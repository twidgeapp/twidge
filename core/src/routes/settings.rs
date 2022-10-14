use crate::prisma;

use super::Shared;
use rspc::{ErrorCode, RouterBuilder, Type};
use serde::{Deserialize, Serialize};

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new()
        .query("get", |t| {
            #[derive(Debug, Clone, Deserialize, Serialize, Type)]
            struct SettingsGetArgs {
                key: String,
            }

            t(|ctx, args: SettingsGetArgs| async move {
                ctx.client
                    .settings()
                    .find_unique(prisma::settings::name::equals(args.key.clone()))
                    .exec()
                    .await
                    .map_err(|_| rspc::Error::new(ErrorCode::NotFound, "Setting not found".into()))
            })
        })
        .mutation("set", |t| {
            #[derive(Debug, Clone, Deserialize, Serialize, Type)]
            struct SettingsSetArgs {
                key: String,
                value: String,
            }

            t(|ctx, args: SettingsSetArgs| async move {
                let value = ctx
                    .client
                    .settings()
                    .upsert(
                        prisma::settings::name::equals(args.key.clone()),
                        (args.key.clone(), args.value.clone(), vec![]),
                        vec![
                            prisma::settings::name::set(args.key.clone()),
                            prisma::settings::value::set(args.value.clone()),
                        ],
                    )
                    .exec()
                    .await?;
                Ok(value)
            })
        })
}
