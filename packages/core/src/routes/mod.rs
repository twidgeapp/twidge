use rspc::{internal::MiddlewareBuilderLike, Config, Router, RouterBuilder};
use std::{path::PathBuf, sync::Arc};
pub mod misc;
pub mod settings;

#[derive(Debug, Clone)]
pub struct Context {
    pub db: Arc<crate::prisma::PrismaClient>,
}

pub fn setup_router() -> RouterBuilder<
    Context,
    (),
    impl MiddlewareBuilderLike<Context, LayerContext = Context> + Send + 'static,
> {
    Router::<Context>::new()
        .config(
            Config::new()
                .export_ts_bindings(
                    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
                        .join("../../apps/desktop/src/bindings.ts"),
                )
                .set_ts_bindings_header("/* eslint-disable */"),
        )
        .merge("misc.", misc::mount())
        .merge("settings.", settings::mount())
        .query("version", |t| {
            t(|_, _: ()| env!("CARGO_PKG_VERSION").to_string())
        })
}
