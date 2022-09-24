use rspc::RouterBuilder;
use rspc::Type;
use serde::{Deserialize, Serialize};
use tokio::io::AsyncWriteExt;

use crate::utils::get_twidge_dir;
use crate::{prisma, Shared};

#[derive(Debug, Clone, Deserialize, Serialize, Type)]
pub struct GetWhiteBoardItemsArgs {
    pub whiteboard_id: u32,
}

#[derive(Debug, Clone, Deserialize, Serialize, Type)]
pub struct CreateWhiteBoardArgs {
    pub r#type: String,
    pub data: String,
    pub whiteboard_id: i32,
}

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new()
        .query("get", move |ctx, args: GetWhiteBoardItemsArgs| async move {
            let GetWhiteBoardItemsArgs { whiteboard_id } = args;
            let client = ctx.client.clone();

            let whiteboard_elements = client
                .whiteboard_item()
                .find_many(vec![prisma::whiteboard_item::WhereParam::IdEquals(
                    whiteboard_id.try_into().unwrap(),
                )])
                .exec()
                .await?;

            Ok(whiteboard_elements)
        })
        .mutation(
            "create",
            move |ctx, args: CreateWhiteBoardArgs| async move {
                let CreateWhiteBoardArgs {
                    data,
                    r#type,
                    whiteboard_id,
                } = args;
                let client = ctx.client.clone();

                if r#type == "text" {
                    client
                        .whiteboard_item()
                        .create(
                            r#type,
                            data,
                            prisma::whiteboard::id::equals(whiteboard_id),
                            vec![],
                        )
                        .exec()
                        .await
                        .unwrap();
                } else {
                    // file type is a file
                    // convert base64 to binary and save to file
                    let data_url = dataurl::DataUrl::parse(&data).unwrap();
                    let data = data_url.get_data();

                    let mut assets_dir = get_twidge_dir().join("assets");
                    std::fs::create_dir_all(&assets_dir).unwrap();

                    let file_name = uuid::Uuid::new_v4().to_string();
                    let mut file_path = assets_dir.join(file_name + "." + &r#type);

                    let mut file = tokio::fs::File::create(file_path.clone()).await.unwrap();
                    file.write_all(data).await.unwrap();

                    client
                        .whiteboard_item()
                        .create(
                            r#type,
                            file_path.to_str().unwrap().to_string(),
                            prisma::whiteboard::id::equals(whiteboard_id),
                            vec![],
                        )
                        .exec()
                        .await?;
                }

                Ok(())
            },
        )
}
