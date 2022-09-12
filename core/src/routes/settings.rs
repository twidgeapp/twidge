use crate::prisma;

use super::Shared;
use rspc::{RouterBuilder, Type};
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Deserialize, Serialize, Type)]
pub struct GetSettingsArgs {
    pub key: String,
}

#[derive(Debug, Clone, Deserialize, Serialize, Type)]
pub struct SetSettingsArgs {
    pub key: String,
    pub value: String,
}

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new()
        .query("get", move |ctx, args: GetSettingsArgs| async move {
            let value = ctx
                .client
                .settings()
                .find_unique(prisma::settings::name::equals(args.key.clone()))
                .exec()
                .await?;

            Ok(value)
        })
        .mutation("set", move |ctx, args: SetSettingsArgs| async move {
            let client = ctx.client.clone();
            let value = client
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
}
