use std::collections::HashMap;

use prisma::prisma;
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

            let mut settings = HashMap::new();
            settings.insert("first-run", true);

            for (key, value) in settings {
                // check if the setting exists
                let found = client
                    .settings()
                    .find_many(vec![prisma::settings::key::equals(key.to_string())])
                    .exec()
                    .await
                    .unwrap();

                if found.is_empty() {
                    client
                        .settings()
                        .create(key.to_string(), value.to_string(), vec![])
                        .exec()
                        .await
                        .unwrap();
                }
            }

            Ok(())
        })
    })
}
