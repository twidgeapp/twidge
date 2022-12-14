#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::sync::Arc;

use rust_core::{config::Config, functions::get_twidge_dir};
use tauri::Manager;
use window_vibrancy::{apply_acrylic, apply_blur, apply_vibrancy, Color, NSVisualEffectMaterial};

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

                    #[cfg(windows)]
                    window.set_decorations(false).unwrap();

                    #[cfg(target_os = "macos")]
                    apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, None).expect(
                        "Unsupported platform! 'apply_vibrancy' is only supported on macOS",
                    );

                    #[cfg(target_os = "windows")]
                    apply_acrylic(&window, Some((18, 18, 18, 125))).expect(
                        "Unsupported platform! 'apply_acrylic' is only supported on Windows",
                    );

                    window_shadows::set_shadow(&window, true).unwrap();
                }

                Ok(())
            },
        )
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
