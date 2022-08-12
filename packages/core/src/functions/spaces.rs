#[tauri::command(async)]
pub async fn get_spaces() -> Result<Vec<prisma::spaces::Data>, String> {
    Ok(vec![])
}
