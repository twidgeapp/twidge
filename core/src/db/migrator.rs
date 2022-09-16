use std::sync::Arc;

use crate::{
    errors::CoreError,
    prisma::{new_client_with_url, PrismaClient},
    utils::get_twidge_dir,
    Shared,
};
use enumflags2::BitFlags;
use include_dir::{include_dir, Dir};
use log::info;
use migration_core::migration_connector::ConnectorParams;
use migration_core::{commands::apply_migrations, json_rpc::types::ApplyMigrationsInput};
use quaint::prelude::*;
use sql_migration_connector::SqlMigrationConnector;
use tokio::fs::{create_dir, remove_dir_all};

use super::settings;

static MIGRATION_DIR: Dir = include_dir!("$CARGO_MANIFEST_DIR/../prisma/migrations");

pub async fn new_client() -> Result<PrismaClient, CoreError> {
    let library_url = get_twidge_dir().join("library.db");

    log::info!(
        "Connecting to library database at {}",
        library_url.display()
    );
    tokio::fs::create_dir_all(library_url.parent().unwrap()).await?;

    if !library_url.exists() {
        tokio::fs::File::create(library_url.clone()).await?;
    }

    let client =
        new_client_with_url(&("file:".to_string() + library_url.to_str().unwrap())).await?;

    Ok(client)
}
