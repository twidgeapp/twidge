#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use std::sync::{Arc, Mutex};

use prisma::prisma;
use tauri::Manager;
use tcore::routes::Context;
use window_shadows::set_shadow;
mod daemon;

#[tokio::main]
async fn main() {
    // check if debug mode
    if cfg!(debug_assertions) {
        std::env::set_var("RUST_LOG", "debug");
    }

    pretty_env_logger::init();
    log::info!("GM 🌚");

    let router = tcore::routes::setup_router().build().arced();

    let db_path = tcore::utils::dirs::get_twidge_dir()
        .unwrap()
        .join("library.db");
    let glob_app = Arc::new(Mutex::new(None));

    std::fs::File::create(db_path.clone()).unwrap();

    let prisma = Arc::new(
        prisma::new_client_with_url(&format!("file:{}", db_path.display()))
            .await
            .unwrap(),
    );

    let glob_app_cloned = glob_app.clone();
    
    tokio::spawn(async move {
        daemon::setup_daemon(glob_app_cloned).await;
    });

    tauri::Builder::default()
        .setup(move |app| {
            let window = app.get_window("main").unwrap();
            set_shadow(&window, true).expect("Failed to set shadow");

            let window = window.clone();
            glob_app.lock().unwrap().replace(window);
            Ok(())
        })
        .plugin(rspc::integrations::tauri::plugin(router, move || Context {
            db: prisma.clone(),
        }))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
