use log::info;
use rspc::RouterBuilder;

use crate::{db::settings, Shared};

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new().query("migrate_and_populate", move |ctx, _: ()| async move {
        info!("Running migrations");
        let client = ctx.client.clone();

        #[cfg(debug_assertions)]
        client._db_push(false).await.unwrap();

        #[cfg(not(debug_assertions))]
        client._migrate_deploy().await.unwrap();

        settings::populate_settings(client).await.unwrap();

        Ok(())
    })
}
