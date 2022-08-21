use std::{path::PathBuf, sync::Arc};

use prisma::PrismaClient;
use rspc::Router;
mod spaces;
#[derive(Clone, Debug)]
pub struct Shared {
    pub client: Arc<PrismaClient>,
}

pub fn init_router() -> Router<Shared> {
    let router = Router::<Shared>::new()
        .merge("spaces.", spaces::mount())
        .build();

    router
        .export_ts(PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("../utils/index.ts"))
        .expect("Error exporting rspc Typescript bindings!");
    router
}
