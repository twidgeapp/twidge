use rspc::{RouterBuilder, Type};

use super::Context;

use serde::{Deserialize, Serialize};

pub fn mount() -> RouterBuilder<Context> {
    RouterBuilder::<Context>::new()
        .mutation("create", |t| {
            #[derive(Serialize, Deserialize, Debug, Type)]
            pub struct CreateSpaceArgs {
                pub icon: String,
                pub color: String,
                pub name: String,
                pub description: String,

                pub accent_color: String,
                pub primary_color: String,
            }

            t(move |ctx, args: CreateSpaceArgs| async move {
                let CreateSpaceArgs {
                    icon,
                    color,
                    name,
                    description,
                    accent_color,
                    primary_color,
                } = args;

                let client = ctx.db.clone();
                let created_space = client
                    .space()
                    .create(
                        name,
                        icon,
                        color,
                        description,
                        primary_color,
                        accent_color,
                        vec![],
                    )
                    .exec()
                    .await?;

                Ok(created_space)
            })
        })
        .query("get", |t| {
            t(move |ctx, args: ()| async move {
                let client = ctx.db.clone();
                let spaces = client.space().find_many(vec![]).exec().await?;

                Ok(spaces)
            })
        })
}
