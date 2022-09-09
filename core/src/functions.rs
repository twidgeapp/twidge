#[tauri::command]
pub async fn show_bar(window: tauri::Window) -> Result<(), String> {
    #[cfg(linux)]
    window.set_decorations(true);

    #[cfg(macos)]
    window.set_decorations(true);

    Ok(())
}
