use std::sync::Arc;

use tauri::State;

#[tauri::command(async)]
pub async fn get_spaces(
    client: State<'_, Arc<prisma::PrismaClient>>,
) -> Result<Vec<prisma::spaces::Data>, String> {
    let client = client.inner().clone();

    let spaces = client.spaces().find_many(vec![]).exec().await;

    match spaces {
        Ok(spaces) => Ok(spaces),
        Err(err) => Err(err.to_string()),
    }
}
