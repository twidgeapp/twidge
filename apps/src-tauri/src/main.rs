#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

pub mod settings;

use settings::Settings;
use std::sync::Arc;
use tauri::{CustomMenuItem, SystemTray, SystemTrayMenu, SystemTrayMenuItem};
use tauri_plugin_autostart::MacosLauncher;
use tcore::routes::Shared;

#[tokio::main]
async fn main() {
    std::env::set_var("RUST_LOG", "info");
    pretty_env_logger::init();

    let client = Arc::new(tcore::db::migrator::new_client().await.unwrap());
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let hide = CustomMenuItem::new("hide".to_string(), "Hide");
    let tray_menu = SystemTrayMenu::new()
        .add_item(quit)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(hide);

    Settings::new(client.clone()).await.unwrap();

    let shared = Shared {
        client: client.clone(),
    };

    tauri::Builder::default()
        .system_tray(SystemTray::new().with_menu(tray_menu))
        .plugin(rspc::integrations::tauri::plugin(
            Arc::new(tcore::routes::init_router()),
            move || (shared.clone()),
        ))
        .plugin(tauri_plugin_autostart::init(
            MacosLauncher::LaunchAgent,
            true,
        ))
        .manage(client)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
