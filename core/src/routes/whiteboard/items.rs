use rspc::RouterBuilder;
use rspc::Type;
use serde::{Deserialize, Serialize};
use tokio::io::AsyncWriteExt;

use crate::utils::get_twidge_dir;
use crate::{prisma, Shared};

#[derive(Debug, Clone, Deserialize, Serialize, Type)]
pub struct GetWhiteBoardItemsArgs {
    pub whiteboard_id: i32,
}

#[derive(Debug, Clone, Deserialize, Serialize, Type)]
pub struct CreateWhiteBoardArgs {
    pub r#type: String,
    pub data: String,
    pub whiteboard_id: i32,
}

#[derive(Debug, Clone, Deserialize, Serialize, Type)]
pub struct MoveWhiteboardItemArgs {
    pub id: i32,
    pub x_pos: String,
    pub y_pos: String,
}

#[derive(Debug, Clone, Deserialize, Serialize, Type)]
pub struct ResizeWhiteboardItemArgs {
    pub id: i32,
    pub width: String,
    pub height: String,
}

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new()
        .query("get", move |ctx, args: GetWhiteBoardItemsArgs| async move {
            let GetWhiteBoardItemsArgs { whiteboard_id } = args;
            log::info!("Getting whiteboard items for {}", whiteboard_id);
            let client = ctx.client.clone();

            let whiteboard_elements = client
                .whiteboard_item()
                .find_many(vec![prisma::whiteboard_item::whiteboard_id::equals(
                    whiteboard_id,
                )])
                .exec()
                .await?;
            log::info!("Found whiteboard elements: {:?}", whiteboard_elements);
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
                let r#type = r#type.replace("application/", "");

                if r#type == "text" {
                    client
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
                        .await
                        .unwrap();
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

                    client
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
            },
        )
        .mutation(
            "move",
            move |ctx, args: MoveWhiteboardItemArgs| async move {
                let client = ctx.client.clone();

                client
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
            },
        )
        .mutation(
            "resize",
            move |ctx, args: ResizeWhiteboardItemArgs| async move {
                let client = ctx.client.clone();

                client
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
            },
        )
}
