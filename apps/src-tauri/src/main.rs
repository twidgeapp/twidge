#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

pub mod settings;

use settings::Settings;
use std::sync::Arc;
use tauri::{CustomMenuItem, SystemTray, SystemTrayMenu, SystemTrayMenuItem};
use tauri_plugin_autostart::MacosLauncher;

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

    tauri::Builder::default()
        .system_tray(SystemTray::new().with_menu(tray_menu))
        .plugin(tauri_plugin_autostart::init(
            MacosLauncher::LaunchAgent,
            true,
        ))
        .manage(client)
        .invoke_handler(tauri::generate_handler![
            // spaces
            tcore::functions::spaces::get_spaces,
            tcore::functions::spaces::create_space,
            tcore::functions::spaces::update_space_indexes,
            // elements
            tcore::functions::elements::create_element,
            tcore::functions::elements::get_elements,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
