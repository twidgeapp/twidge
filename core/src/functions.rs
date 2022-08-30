#[tauri::command]
pub async fn show_bar(window: tauri::Window) -> Result<(), String> {
    #[cfg(macos)]
    window.set_decorations(true);
    
    Ok(())
}
