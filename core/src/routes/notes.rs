use crate::{prisma, Shared};
use rspc::{RouterBuilder, Type};
use serde::{Deserialize, Serialize};

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new()
        .query("get", |t| {
            #[derive(Debug, Clone, Deserialize, Serialize, Type)]
            struct GetNotesArgs {
                space_id: i32,
            }

            t(|ctx, GetNotesArgs { space_id }: GetNotesArgs| async move {
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
            struct CreateNoteArgs {
                space_id: i32,
            }

            t(
                |ctx, CreateNoteArgs { space_id }: CreateNoteArgs| async move {
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
                },
            )
        })
        .mutation("edit", |t| {
            #[derive(Debug, Clone, Deserialize, Serialize, Type)]
            struct EditNotesArgs {
                id: i32,
                title: String,
                content: String,
            }

            t(
                |ctx, EditNotesArgs { id, title, content }: EditNotesArgs| async move {
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
