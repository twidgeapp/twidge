use rspc::RouterBuilder;

use super::Shared;
use rspc::Type;
use serde::{Deserialize, Serialize};

#[derive(Type, Deserialize, Debug, Serialize)]
pub struct UpdateSpaceIndexesArgs {
    pub spaces: Vec<prisma::spaces::Data>,
}

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new()
        .query("get", move |ctx, _: ()| async move {
            let client = ctx.client.clone();
            let users = client.spaces().find_many(vec![]).exec().await?;
            Ok(users)
        })
        .mutation("create", move |ctx, _: ()| async move {
            let client = ctx.client.clone();

            let spaces = client.spaces().find_many(vec![]).exec().await?.len();

            let space = client
                .spaces()
                .create(
                    "Space ".to_owned() + &spaces.to_string(),
                    String::new(),
                    String::from("Document16Filled"),
                    String::from("#ffffff"),
                    vec![prisma::spaces::index::set(spaces.try_into().unwrap())],
                )
                .exec()
                .await?;

            Ok(space)
        })
        .mutation(
            "updateSpaceIndexes",
            move |ctx, args: UpdateSpaceIndexesArgs| async move {
                let client = ctx.client.clone();

                for (index, space) in args.spaces.iter().enumerate() {
                    // create spaces if they do not exist
                    let space = client
                        .spaces()
                        .upsert(
                            prisma::spaces::UniqueWhereParam::IdEquals(space.id.clone()),
                            (
                                "Space ".to_owned() + &(space.id + 1).to_string(),
                                String::new(),
                                String::from("Document16Filled"),
                                String::from("#ffffff"),
                                vec![prisma::spaces::index::set(index.try_into().unwrap())],
                            ),
                            vec![prisma::spaces::index::set(index.try_into().unwrap())],
                        )
                        .exec()
                        .await?;
                }

                Ok(())
            },
        )
}
