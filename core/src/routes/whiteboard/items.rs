use rspc::RouterBuilder;
use rspc::Type;
use serde::{Deserialize, Serialize};
use tokio::io::AsyncWriteExt;

use crate::utils::get_twidge_dir;
use crate::{prisma, Shared};

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new()
        .query("get", |t| {
            #[derive(Debug, Clone, Deserialize, Serialize, Type)]
            struct Args {
                whiteboard_id: i32,
            }

            t(|ctx, Args { whiteboard_id }: Args| async move {
                log::info!("Getting whiteboard items for {}", whiteboard_id);
                let whiteboard_elements = ctx
                    .client
                    .whiteboard_item()
                    .find_many(vec![prisma::whiteboard_item::whiteboard_id::equals(
                        whiteboard_id,
                    )])
                    .exec()
                    .await?;
                log::info!("Found whiteboard elements: {:?}", whiteboard_elements);
                Ok(whiteboard_elements)
            })
        })
        .mutation("create", |t| {
            #[derive(Debug, Clone, Deserialize, Serialize, Type)]
            struct Args {
                r#type: String,
                data: String,
                whiteboard_id: i32,
            }

            t(|ctx, args: Args| async move {
                let Args {
                    data,
                    r#type,
                    whiteboard_id,
                } = args;
                let r#type = r#type.replace("application/", "");

                if r#type == "text" {
                    ctx.client
                        .whiteboard_item()
                        .create(
                            r#type,
                            data,
                            "auto".to_string(),
                            "auto".to_string(),
                            "auto".to_string(),
                            "auto".to_string(),
                            prisma::whiteboard::id::equals(whiteboard_id),
                            vec![],
                        )
                        .exec()
                        .await?;
                } else {
                    // file type is a file
                    // convert base64 to binary and save to file
                    let data_url = dataurl::DataUrl::parse(&data).unwrap();
                    let data = data_url.get_data();

                    let assets_dir = get_twidge_dir().join("assets");
                    std::fs::create_dir_all(&assets_dir).unwrap();

                    let file_name = uuid::Uuid::new_v4().to_string();
                    let file_path = assets_dir.join(file_name + "." + &r#type);

                    log::info!("{:#?}", file_path);

                    let mut file = tokio::fs::File::create(file_path.clone()).await.unwrap();
                    file.write_all(data).await.unwrap();

                    ctx.client
                        .whiteboard_item()
                        .create(
                            r#type,
                            file_path.to_str().unwrap().to_string(),
                            "auto".to_string(),
                            "auto".to_string(),
                            "auto".to_string(),
                            "auto".to_string(),
                            prisma::whiteboard::id::equals(whiteboard_id),
                            vec![],
                        )
                        .exec()
                        .await?;
                }

                Ok(())
            })
        })
        .mutation("move", |t| {
            #[derive(Debug, Clone, Deserialize, Serialize, Type)]
            struct Args {
                id: i32,
                x_pos: String,
                y_pos: String,
            }

            t(|ctx, args: Args| async move {
                ctx.client
                    .whiteboard_item()
                    .update(
                        prisma::whiteboard_item::id::equals(args.id),
                        vec![
                            prisma::whiteboard_item::pos_x::set(args.x_pos),
                            prisma::whiteboard_item::pos_y::set(args.y_pos),
                        ],
                    )
                    .exec()
                    .await?;
                Ok(())
            })
        })
        .mutation("resize", |t| {
            #[derive(Debug, Clone, Deserialize, Serialize, Type)]
            struct Args {
                id: i32,
                width: String,
                height: String,
            }

            t(|ctx, args: Args| async move {
                ctx.client
                    .whiteboard_item()
                    .update(
                        prisma::whiteboard_item::id::equals(args.id),
                        vec![
                            prisma::whiteboard_item::width::set(args.width),
                            prisma::whiteboard_item::height::set(args.height),
                        ],
                    )
                    .exec()
                    .await?;
                Ok(())
            })
        })
}
