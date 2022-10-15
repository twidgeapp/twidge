#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use std::sync::Arc;

use prisma::prisma;
use tauri::Manager;
use tcore::routes::Context;
use window_shadows::set_shadow;

#[tokio::main]
async fn main() {
    let router = tcore::routes::setup_router().build().arced();

    let db_path = tcore::utils::dirs::get_twidge_dir()
        .unwrap()
        .join("library.db");

    std::fs::File::create(db_path.clone()).unwrap();
    let prisma = Arc::new(
        prisma::new_client_with_url(&format!("file:{}", db_path.display()))
            .await
            .unwrap(),
    );

    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();
            set_shadow(&window, true).expect("Failed to set shadow");
            Ok(())
        })
        .plugin(rspc::integrations::tauri::plugin(router, move || Context {
            db: prisma.clone(),
        }))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
