use std::sync::{Arc, Mutex};

use axum::http::Method;
use axum::{routing::get, Extension, Router};
use http::header::HeaderName;
use log::info;
use tauri::Window;
use tower_http::cors::{AllowHeaders, Any, CorsLayer};
mod routes;

type WindowState = Arc<Mutex<Option<Window>>>;
#[derive(Clone)]
struct AppState {
    window: WindowState,
}

async fn home(Extension(shared): Extension<Arc<AppState>>) -> &'static str {
    let window = shared.window.lock().unwrap();

    // focus the window
    window.as_ref().unwrap().set_focus();

    "Hello, I am under the woter!!"
}

pub async fn setup_daemon(window: Arc<Mutex<Option<Window>>>) {
    let app_state = Arc::new(AppState { window });

    let app = Router::new()
        .nest("/", routes::routes())
        .layer(Extension(app_state))
        .layer(
            CorsLayer::new()
                .allow_origin(Any)
                .allow_methods([Method::GET, Method::POST])
                .allow_headers([
                    http::header::AUTHORIZATION,
                    http::header::ACCEPT,
                    http::header::CONTENT_TYPE,
                    http::header::SET_COOKIE,
                    http::header::COOKIE,
                    HeaderName::from_static("x-csrf-token"),
                ]),
        );

    info!("Starting deamon on http://localhost:42690");

    axum::Server::bind(&"0.0.0.0:42690".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
