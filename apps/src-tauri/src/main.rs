#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use tauri::{CustomMenuItem, SystemTray, SystemTrayMenu, SystemTrayMenuItem};

#[tokio::main]
async fn main() {
    let directories = platform_dirs::AppDirs::new(Some("twidge"), true).unwrap();
    let data_dir = directories.data_dir.display().to_string();

    std::fs::create_dir_all(&data_dir).unwrap();

    // create file library.db
    let db_path = std::path::Path::new(&data_dir).join("library.db");

    let client = tcore::db::migrations::new_client(db_path.to_str().unwrap())
        .await
        .unwrap();

    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let hide = CustomMenuItem::new("hide".to_string(), "Hide");
    let tray_menu = SystemTrayMenu::new()
        .add_item(quit)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(hide);
    let tray = SystemTray::new().with_menu(tray_menu);

    tauri::Builder::default()
        .system_tray(tray)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
