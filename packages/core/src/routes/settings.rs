use prisma::prisma;
use rspc::{RouterBuilder, Type};

use super::Context;
use serde::{Deserialize, Serialize};

pub fn mount() -> RouterBuilder<Context> {
    RouterBuilder::<Context>::new()
        .query("get", |t| {
            #[derive(Serialize, Deserialize, Debug, Type)]
            pub struct GetSettingsArgs {
                pub key: String,
            }

            t(move |shared, args: GetSettingsArgs| async move {
                let client = shared.db.clone();

                let found = client
                    .settings()
                    .find_many(vec![prisma::settings::key::equals(args.key)])
                    .exec()
                    .await?;

                Ok(found)
            })
        })
        .mutation("set", |t| {
            #[derive(Serialize, Deserialize, Debug, Type)]
            pub struct SetSettingsArgs {
                pub key: String,
                pub value: String,
            }

            t(move |shared, args: SetSettingsArgs| async move {
                let client = shared.db.clone();

                client
                    .settings()
                    .upsert(
                        prisma::settings::key::equals(args.key.clone()),
                        (args.key.to_string(), args.value.to_string(), vec![]),
                        vec![prisma::settings::value::set(args.value)],
                    )
                    .exec()
                    .await?;
                Ok(())
            })
        })
}
