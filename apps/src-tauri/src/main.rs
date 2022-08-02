#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::sync::Arc;
use tauri::{CustomMenuItem, Manager, RunEvent, SystemTray, SystemTrayMenu, SystemTrayMenuItem};

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

    let shared = Arc::new(tcore::Shared(client));

    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let hide = CustomMenuItem::new("hide".to_string(), "Hide");
    let tray_menu = SystemTrayMenu::new()
        .add_item(quit)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(hide);

    let tray = SystemTray::new().with_menu(tray_menu);

    let app = tauri::Builder::default()
        .manage(shared)
        .system_tray(tray)
        .invoke_handler(tauri::generate_handler![
            // spaces
            tcore::functions::spaces::get_spaces,
            tcore::functions::spaces::create_space,

            // migrator
            tcore::functions::migrator::run_db_migrator
        ])
        .build(tauri::generate_context!())
        .expect("error while running tauri application");

    app.run(move |app_handler, event| {
        if let RunEvent::ExitRequested { .. } = event {
            app_handler.windows().iter().for_each(
                |(window_name, window)| {
                    if let Err(e) = window.close() {}
                },
            );
            app_handler.exit(0);
        }
    })
}
