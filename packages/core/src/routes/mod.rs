use std::{path::PathBuf, sync::Arc};

use prisma::PrismaClient;
use rspc::{Config, Router};
mod spaces;
#[derive(Clone, Debug)]
pub struct Shared {
    pub client: Arc<PrismaClient>,
}

pub fn init_router() -> Router<Shared> {
    let router = Router::<Shared>::new()
        .config(Config::new().set_ts_bindings_header("/* eslint-disable */"))
        .merge("spaces.", spaces::mount())
        .build();

    router
        .export_ts(PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("../utils/index.ts"))
        .expect("Error exporting rspc Typescript bindings!");
    router
}
