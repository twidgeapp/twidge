#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use rust_core::config::Config;

#[tokio::main]
async fn main() {
    let config = Config::default().load().unwrap();
    let router = rust_core::router::build_router().arced();

    tauri::Builder::default()
        .plugin(rspc::integrations::tauri::plugin(router, || ()))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
