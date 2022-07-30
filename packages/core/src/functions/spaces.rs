use std::sync::Arc;

use prisma::spaces::Data;
use tauri::State;

use crate::Shared;

#[tauri::command]
pub async fn get_spaces(state: State<'_, Arc<Shared>>) -> Result<String, String> {
    let client = state.inner().0.clone();
    let result = client.spaces().find_many(vec![]).exec().await.unwrap();
    println!("{:#?}", result);
    Ok(serde_json::to_string(&result).unwrap())
}
