pub mod db;
pub mod settings;
pub mod spaces;
use std::path::PathBuf;

use rspc::{Config, Router};

use crate::Shared;

pub fn init_router() -> Router<Shared> {
    let router = Router::<Shared>::new()
        .config(
            Config::new()
                .set_ts_bindings_header("/* eslint-disable */")
                .export_ts_bindings(
                    PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("../packages/utils/bindings.ts"),
                ),
        )
        .merge("spaces.", spaces::mount())
        .merge("settings.", settings::mount())
        .merge("db.", db::mount())
        .query("version", move |_, _: ()| async move {
            env!("CARGO_PKG_VERSION")
        });

    router.build()
}
