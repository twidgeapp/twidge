use crate::{prisma, Shared};
use rspc::{RouterBuilder, Type};
use serde::{Deserialize, Serialize};

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new()
        .query("get", |t| {
            #[derive(Debug, Clone, Deserialize, Serialize, Type)]
            struct Args {
                space_id: i32,
            }

            t(|ctx, Args { space_id }: Args| async move {
                let result = ctx
                    .client
                    .notes()
                    .find_many(vec![prisma::notes::spaces_id::equals(space_id)])
                    .take(4)
                    .exec()
                    .await?;

                Ok(result)
            })
        })
        .mutation("create", |t| {
            #[derive(Debug, Clone, Deserialize, Serialize, Type)]
            struct Args {
                space_id: i32,
            }

            t(|ctx, Args { space_id }: Args| async move {
                let notes_length = ctx
                    .client
                    .notes()
                    .find_many(vec![prisma::notes::spaces_id::equals(space_id)])
                    .exec()
                    .await?
                    .len();

                let title = format!("Note {}", notes_length + 1);

                let result = ctx
                    .client
                    .notes()
                    .create(
                        title,
                        String::new(),
                        prisma::spaces::id::equals(space_id),
                        vec![],
                    )
                    .exec()
                    .await?;

                Ok(result)
            })
        })
}
