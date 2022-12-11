pub mod config;
pub mod context;
pub mod migrations;

use rspc::{Config, Router};

use self::context::Context;

pub fn build_router() -> Router<Context> {
    let router = Router::<Context>::new()
        .config(Config::new().export_ts_bindings("../../packages/utils/bindings.ts"))
        .merge("migrations.", migrations::setup_router())
        .merge("config.", config::setup_config_router())
        .query("version", |t| t(|_ctx, _: ()| "1.0.0"))
        .build();

    router
}
