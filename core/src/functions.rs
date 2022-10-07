#[tauri::command]
#[allow(unused)]
pub async fn show_bar(window: tauri::Window) -> Result<(), String> {
    #[cfg(target_os = "macos")]
    window.set_decorations(true);

    #[cfg(target_os = "linux")]
    window.set_decorations(true);

    Ok(())
}

#[tauri::command]
pub async fn open_in_default_app(data: String) -> Result<(), String> {
    open::that(data).map_err(|e| e.to_string())
}
