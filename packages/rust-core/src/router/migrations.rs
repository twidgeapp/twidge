use crate::functions::get_twidge_dir;
use rspc::{ErrorCode, RouterBuilder};

use super::context::Context;

pub fn setup_router() -> RouterBuilder<Context> {
    let router = RouterBuilder::<Context>::new().query("run", |t| {
        t(|ctx, _: ()| async move {
            let client = ctx.client;

            let directory = get_twidge_dir().map_err(|e| {
                rspc::Error::new(
                    ErrorCode::InternalServerError,
                    "Failed to get twidge directory".to_string(),
                )
            })?;

            let migrations_directory = directory.join("migrations");
            if !migrations_directory.exists() {
                std::fs::create_dir(&migrations_directory).map_err(|e| {
                    rspc::Error::new(
                        ErrorCode::InternalServerError,
                        "Failed to create migrations directory".to_string(),
                    )
                })?;
            }

            println!("Running migrations");

            #[cfg(debug_assertions)]
            client._db_push().await.unwrap();

            #[cfg(not(debug_assertions))]
            client._migrate_deploy().await.unwrap();

            Ok("Hello, world!")
        })
    });

    router
}
