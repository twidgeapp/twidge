use rand::seq::SliceRandom;
use rspc::RouterBuilder;

use crate::{prisma, Shared};

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new()
        .mutation("create", |t| {
            t(|ctx, _: ()| async move {
                let space_len = ctx.client.spaces().count(vec![]).exec().await?;
                let colors = vec![
                    "#F16A50", "#CA3214", "#FF6369", "#D864D8", "#849DFF", "#3451B2", "#00C2D7",
                ];
                let color = colors
                    .choose(&mut rand::thread_rng())
                    .unwrap()
                    .to_owned()
                    .to_owned();

                let space_name = "Space ".to_owned() + &space_len.to_string();

                let space = ctx
                    .client
                    .spaces()
                    .create(
                        space_name.clone(),
                        "Document16Filled".to_owned(),
                        color,
                        vec![],
                    )
                    .exec()
                    .await?;

                ctx.client
                    .whiteboard()
                    .create(space_name, prisma::spaces::id::equals(space.id), vec![])
                    .exec()
                    .await?;

                Ok(space)
            })
        })
        .query("get", |t| {
            t(|ctx, _: ()| async move {
                let spaces = ctx.client.spaces().find_many(vec![]).exec().await?;

                Ok(spaces)
            })
        })
}
