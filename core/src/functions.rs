#[tauri::command]
pub async fn show_bar(_window: tauri::Window) -> Result<(), String> {
    #[cfg(target_os = "macos")]
    window.set_decorations(true);

    #[cfg(target_os = "linux")]
    window.set_decorations(true);

    Ok(())
}
