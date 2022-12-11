#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::sync::Arc;

use rust_core::{config::Config, functions::get_twidge_dir};
use tauri::Manager;

#[tokio::main]
async fn main() {
    let twidge_dir = get_twidge_dir().unwrap();
    let db_path = twidge_dir.join("twidge.db");

    if !db_path.exists() {
        std::fs::File::create(db_path.clone()).unwrap();
    }

    let client = Arc::new(
        prisma::new_client_with_url(&("file:".to_string() + db_path.to_str().unwrap()))
            .await
            .unwrap(),
    );

    let config = Config::default().load().unwrap();
    let router = rust_core::router::build_router().arced();

    tauri::Builder::default()
        .plugin(rspc::integrations::tauri::plugin(router, move || {
            rust_core::router::context::Context {
                client: client.clone(),
                config,
            }
        }))
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
