use rspc::RouterBuilder;
use rspc::Type;
use serde::{Deserialize, Serialize};

use crate::{prisma, Shared};

#[derive(Debug, Clone, Deserialize, Serialize, Type)]
pub struct GetWhiteBoardItemsArgs {
    pub whiteboard_id: u32,
}

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new().query(
        "get",
        move |ctx, args: GetWhiteBoardItemsArgs| async move {
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
        },
    )
}
