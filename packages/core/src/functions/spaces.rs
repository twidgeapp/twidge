use std::sync::Arc;

use prisma::spaces::Data;
use tauri::State;

use crate::Shared;

#[tauri::command]
pub async fn my_custom_command(state: State<'_, Arc<Shared>>) -> Result<Vec<Data>, String> {
    let client = state.inner().0.clone();
    let result = client.spaces().find_many(vec![]).exec().await.unwrap();
    println!("{:#?}", result);
    Ok(result)
}
