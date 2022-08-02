use std::sync::Arc;

use tauri::State;

use crate::{Shared, db::migrations::run_migrations};

#[tauri::command(async)]
pub async fn run_db_migrator(state: State<'_, Arc<Shared>>) -> Result<(), String> {
    let client = state.inner().0.clone();

    println!("Running migrations");

    match run_migrations(client).await {
        Ok(_) => Ok(()),
        Err(e) => Err(format!("{:?}", e))
    }
}
