#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use std::sync::{Arc, Mutex};

use tauri::Manager;
use tcore::routes::Context;
use window_shadows::set_shadow;
mod daemon;

#[tokio::main]
async fn main() {
    // check if the app is running in debug mode
    if cfg!(debug_assertions) {
        std::env::set_var("RUST_LOG", "debug");
    }

    pretty_env_logger::init();
    log::info!("GM 🌚");

    let router = tcore::routes::setup_router().build().arced();

    let db_path = tcore::utils::dirs::get_twidge_dir()
        .unwrap()
        .join("library.db");

    // check if ${twidge_dir}/library.db exists if not create it
    if !db_path.exists() {
        std::fs::File::create(db_path.clone()).unwrap();
    }

    // instantiate a new prisma client and Arc it so that rust doesn't scold me
    let prisma = Arc::new(
        tcore::prisma::new_client_with_url(&format!("file:{}", db_path.display()))
            .await
            .unwrap(),
    );

    // used to store the tauri::Window object for the daemon to communicate
    let global_app = Arc::new(Mutex::new(None));
    let global_app_cloned = global_app.clone();

    // spawn the daemon in a separate thread
    tokio::spawn(async move {
        daemon::setup_daemon(global_app_cloned).await;
    });

    tauri::Builder::default()
        .setup(move |app| {
            let window = app.get_window("main").unwrap();
            set_shadow(&window, true);

            let window = window.clone();
            global_app.lock().unwrap().replace(window);
            Ok(())
        })
        .plugin(rspc::integrations::tauri::plugin(router, move || Context {
            db: prisma.clone(),
        }))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
