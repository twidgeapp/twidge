use std::sync::Arc;

use axum::{extract::Query, routing::get, Extension, Router};
use serde::{Deserialize, Serialize};

use super::AppState;

#[derive(Serialize, Deserialize, Debug)]
pub struct LoginQueryParams {
    pub unique_id: String,
}

async fn login(
    Extension(shared): Extension<Arc<AppState>>,
    Query(params): Query<LoginQueryParams>,
) -> &'static str {
    let window = shared.window.lock().unwrap();
    let window = window.as_ref().unwrap();

    window.set_focus();
    window.show();
    window.emit("login", params.unique_id);

    "Desktop app is now in focus"
}

pub fn routes() -> Router {
    Router::new().route("/login", get(login))
}
