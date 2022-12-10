use rspc::{Config, Router};

pub fn build_router() -> Router {
    let router = <Router>::new()
        .config(Config::new().export_ts_bindings("../../packages/utils/bindings.ts"))
        .query("versions", |t| t(|_: (), _: ()| env!("CARGO_PKG_VERSION")))
        .build();

    router
}
