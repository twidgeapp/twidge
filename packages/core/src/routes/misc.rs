use rspc::RouterBuilder;

use super::Context;

pub fn mount() -> RouterBuilder<Context> {
    RouterBuilder::<Context>::new().query("run_migrations", |t| {
        t(|ctx, _: ()| async move {
            let client = ctx.db.clone();

            #[cfg(debug_assertions)]
            client._db_push().await.unwrap();

            #[cfg(not(debug_assertions))]
            client._migrate_deploy().await.unwrap();

            Ok(())
        })
    })
}
