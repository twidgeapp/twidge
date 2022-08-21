use std::{path::PathBuf, sync::Arc};

use prisma::PrismaClient;
use rspc::Router;

#[derive(Clone, Debug)]
pub struct Shared {
    pub client: Arc<PrismaClient>,
}

pub fn init_router() -> Router<Shared> {
    let router = Router::<Shared>::new()
        .query("getSpaces", move |ctx, _: ()| async move {
            let client = ctx.client.clone();
            let users = client.spaces().find_many(vec![]).exec().await.unwrap();
            Ok(users)
        })
        .build();

    router
        .export_ts(PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("../utils/index.ts"))
        .expect("Error exporting rspc Typescript bindings!");
    router
}
