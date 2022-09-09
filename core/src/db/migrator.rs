use crate::{
    errors::CoreError,
    prisma::{new_client_with_url, PrismaClient},
    utils::get_twidge_dir,
    Shared,
};
use enumflags2::BitFlags;
use include_dir::{include_dir, Dir};
use migration_core::migration_connector::ConnectorParams;
use migration_core::{commands::apply_migrations, json_rpc::types::ApplyMigrationsInput};
use quaint::prelude::*;
use sql_migration_connector::SqlMigrationConnector;
use tokio::fs::{create_dir, remove_dir_all};

static MIGRATION_DIR: Dir = include_dir!("$CARGO_MANIFEST_DIR/../prisma/migrations");

pub async fn new_client() -> Result<PrismaClient, CoreError> {
    let library_url = get_twidge_dir().join("library.db");

    log::info!(
        "Connecting to library database at {}",
        library_url.display()
    );

    tokio::fs::create_dir_all(library_url.parent().unwrap()).await?;
    tokio::fs::File::create(library_url.clone()).await?;

    let client =
        new_client_with_url(&("file:".to_string() + library_url.to_str().unwrap())).await?;

    Ok(client)
}

#[tauri::command]
pub async fn run_migrations(state: tauri::State<'_, Shared>) -> Result<(), String> {
    let library_url = get_twidge_dir().join("library.db");
    let library_url = &("file:".to_string() + library_url.to_str().unwrap());

    let shared = state.clone();
    let migrations_temp = get_twidge_dir().join("migrations");
    let migrations_directory_path = migrations_temp
        .to_str()
        .ok_or("Invalid Directory".to_string())?
        .to_string();

    if migrations_temp.exists() {
        remove_dir_all(&migrations_directory_path).await;
    }

    if let Err(e) = create_dir(&migrations_temp).await {
        log::error!("Error creating migrations directory: {}", e);
        return Err(e.to_string());
    }

    if let Err(e) = MIGRATION_DIR.extract(&migrations_temp) {
        log::error!("Error extracting migrations: {}", e);
        return Err(e.to_string());
    }

    let mut connector = match &ConnectionInfo::from_url(library_url) {
        Ok(value) => {
            match value {
                ConnectionInfo::Sqlite { .. } => SqlMigrationConnector::new_sqlite(),
                ConnectionInfo::InMemorySqlite { .. } => unreachable!(), // This is how it is in the Prisma Rust tests
            }
        }
        Err(_) => todo!(),
    };

    if let Err(e) = connector.set_params(ConnectorParams {
        connection_string: library_url.to_string(),
        preview_features: BitFlags::empty(),
        shadow_database_connection_string: None,
    }) {
        log::error!("Error setting connector params: {}", e);
        return Err(e.to_string());
    };

    if let Err(e) = apply_migrations(
        ApplyMigrationsInput {
            migrations_directory_path,
        },
        &mut connector,
    )
    .await
    {
        log::error!("Error applying migrations: {}", e);
        return Err(e.to_string());
    } else {
        log::info!("Migrations applied successfully");
    };

    if let Err(e) = remove_dir_all(migrations_temp).await {
        log::error!("Error removing migrations directory: {}", e);
        return Err(e.to_string());
    }

    println!("Running migrations");
    Ok(())
}
