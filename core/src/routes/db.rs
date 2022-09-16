use std::sync::Arc;

use log::info;
use rspc::{ErrorCode, RouterBuilder};

use crate::{db::settings, errors::CoreError, prisma::PrismaClient, Shared};

async fn migrate_and_populate(client: Arc<PrismaClient>) -> Result<(), CoreError> {
    #[cfg(debug_assertions)]
    client._db_push(false).await?;

    #[cfg(not(debug_assertions))]
    client._migrate_deploy().await?;

    settings::populate_settings(client).await?;

    Ok(())
}

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new().query("migrate_and_populate", move |ctx, _: ()| async move {
        info!("Running migrations");
        let client = ctx.client.clone();

        if let Err(e) = migrate_and_populate(client).await {
            info!("Error running migrations: {}", e);
            return Err(rspc::Error::new(ErrorCode::Conflict, e.to_string()));
        }

        Ok(())
    })
}
