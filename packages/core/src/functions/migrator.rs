use std::sync::Arc;

use tauri::State;

use crate::{
    db::migrations::{run_migrations as run_db_migrations, MigrationError},
    Shared,
};

/// This function will be called from the "loading screen"
/// We are not running the migrations as soon as the app loads because
/// - Load times would be slower
/// - We can show migration errors and hence help the end user fix migration errors
#[tauri::command(async)]
pub async fn run_migrations(state: State<'_, Arc<Shared>>) -> Result<String, String> {
    let client = state.inner().0.clone();

    if let Err(e) = run_db_migrations(client).await {
        Err(format!("{}", e))
    } else {
        Ok(String::new())
    }
}
