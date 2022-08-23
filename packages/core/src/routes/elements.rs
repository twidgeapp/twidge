use rspc::RouterBuilder;

use crate::utils::{
    element::{parse_type, write_data_url_to_fs},
    get_assets_dir,
};

use super::Shared;
use rspc::Type;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Deserialize, Serialize, Type)]
pub struct Element {
    content: String,
    r#type: String,
}

#[derive(Debug, Serialize, Deserialize, Clone, Type)]
pub struct CreateElementDataArgs {
    pub space_id: i32,
    pub r#type: String,
    pub value: Vec<Element>,
}

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new()
        .query("get", move |ctx, _: ()| async move {
            let client = ctx.client.clone();
            let elements = client.elements().find_many(vec![]).exec().await?;

            Ok(elements)
        })
        .mutation(
            "create",
            move |ctx, args: CreateElementDataArgs| async move {
                let client = ctx.client.clone();

                let mut values = Vec::new();

                match parse_type(args.clone().r#type).as_str() {
                    "text" => {
                        for value in args.clone().value {
                            values.push(Element {
                                content: value.content,
                                r#type: value.r#type,
                            });
                        }
                    }
                    "file" => {
                        let assets_dir = get_assets_dir().await.unwrap();

                        for data in args.value.clone() {
                            // split the data url into the data and the mime type
                            let f_type = args.r#type.split("/").last().unwrap();
                            let mut file =
                                assets_dir.join(uuid::Uuid::new_v4().to_string() + "." + f_type);

                            log::info!("Saving file to {:#?}", assets_dir);

                            let file = write_data_url_to_fs(data.content.clone(), file);
                            let ele = Element {
                                content: file,
                                r#type: data.r#type.clone(),
                            };

                            values.push(ele)
                        }
                    }

                    &_ => todo!(),
                }

                let mut create_values = Vec::new();

                for value in values {
                    let ele = client
                        .elements()
                        .create(
                            value.r#type,
                            value.content,
                            prisma::spaces::id::equals(args.space_id),
                            vec![],
                        )
                        .exec();

                    create_values.push(ele);
                }

                futures::future::join_all(create_values).await;

                Ok(())
            },
        )
}
