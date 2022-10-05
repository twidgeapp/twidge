use crate::{prisma, Shared};
use rspc::{RouterBuilder, Type};
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Deserialize, Serialize, Type)]
pub struct NotesArgs {
    pub space_id: i32,
}

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new()
        .query("get", |ctx, args: NotesArgs| async move {
            let NotesArgs { space_id } = args;

            let client = ctx.client.clone();
            let result = client
                .notes()
                .find_many(vec![prisma::notes::spaces_id::equals(space_id)])
                .exec()
                .await?;
            // last 4 notes
            let result = result
                .into_iter()
                .rev()
                .take(4)
                .collect::<Vec<prisma::notes::Data>>();

            Ok(result)
        })
        .mutation("create", |ctx, args: NotesArgs| async move {
            let NotesArgs { space_id } = args;

            let client = ctx.client.clone();
            let notes_length = client
                .notes()
                .find_many(vec![prisma::notes::spaces_id::equals(space_id)])
                .exec()
                .await?
                .len();

            let title = format!("Note {}", notes_length + 1);

            let result = client
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
}
