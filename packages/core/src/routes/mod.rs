use std::path::PathBuf;

use rspc::Router;

pub fn init_router() -> Router {
    let router = <Router>::new()
        .query("version", |ctx, args: ()| "1.0.0")
        .build();

    router
        .export_ts(PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("../utils/index.ts"))
        .expect("Error exporting rspc Typescript bindings!");
    router
}
