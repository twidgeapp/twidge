use rspc::RouterBuilder;

use super::Shared;

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
}
