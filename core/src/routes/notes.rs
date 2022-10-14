use crate::{prisma, Shared};
use rspc::{RouterBuilder, Type};
use serde::{Deserialize, Serialize};

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new()
        .query("get", |t| {
            #[derive(Debug, Clone, Deserialize, Serialize, Type)]
            struct GetArgs {
                space_id: i32,
            }

            t(|ctx, GetArgs { space_id }: GetArgs| async move {
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
            struct CreateArgs {
                space_id: i32,
            }

            t(|ctx, CreateArgs { space_id }: CreateArgs| async move {
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
        .mutation("edit", |t| {
            #[derive(Debug, Clone, Deserialize, Serialize, Type)]
            struct EditArgs {
                id: i32,
                title: String,
                content: String,
            }

            t(
                |ctx, EditArgs { id, title, content }: EditArgs| async move {
                    println!("edit note {}", id);
                    let result = ctx
                        .client
                        .notes()
                        .update(
                            prisma::notes::id::equals(id),
                            vec![
                                prisma::notes::title::set(title),
                                prisma::notes::content::set(content),
                            ],
                        )
                        .exec()
                        .await?;

                    Ok(result)
                },
            )
        })
}
