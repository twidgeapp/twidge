#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::sync::Arc;

use tcore::Shared;

#[tokio::main]
async fn main() {
    std::env::set_var("RUST_LOG", "debug");
    pretty_env_logger::init();

    let client = tcore::db::migrator::new_client().await.unwrap();
    let shared = Shared {
        client: Arc::new(client),
    };
    let router = Arc::new(tcore::routes::init_router());
    let shared_clone = shared.clone();

    tauri::Builder::default()
        .plugin(rspc::integrations::tauri::plugin(router, move || {
            shared_clone.clone()
        }))
        .manage(shared)
        .invoke_handler(tauri::generate_handler![
            tcore::functions::show_bar,
            tcore::functions::open_in_default_app
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
