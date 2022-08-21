use rspc::RouterBuilder;

use super::Shared;

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new()
        .query("get", move |ctx, _: ()| async move {
            let client = ctx.client.clone();
            let users = client.spaces().find_many(vec![]).exec().await.unwrap();
            Ok(users)
        })
        .mutation("create", move |ctx, _: ()| async move { Ok("") })
}
