#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::sync::Arc;
use tauri::Manager;
use tcore::Shared;

#[tokio::main]
async fn main() {
    std::env::set_var("RUST_LOG", "debug");
    pretty_env_logger::init();

    let client = Arc::new(tcore::db::migrator::new_client().await.unwrap());
    let router = tcore::routes::init_router();

    tauri::Builder::default()
        .plugin(rspc::integrations::tauri::plugin(router, move || Shared {
            client: Arc::clone(&client),
        }))
        .invoke_handler(tauri::generate_handler![
            tcore::functions::show_bar,
            tcore::functions::set_visible
        ])
        .setup(
            #[allow(unused_variables)]
            |app| {
                #[cfg(not(linux))]
                {
                    let window = app.get_window("main").unwrap();

                    window_shadows::set_shadow(&window, true).unwrap();

                    #[cfg(windows)]
                    window.set_decorations(false).unwrap();
                }

                Ok(())
            },
        )
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
