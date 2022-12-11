use super::context::Context;
use rspc::ErrorCode;
use rspc::RouterBuilder;
use rspc::Type;
use serde::{Deserialize, Serialize};

pub fn setup_config_router() -> RouterBuilder<Context> {
    let router = RouterBuilder::<Context>::new().query("get", |t| {
        #[derive(Debug, Clone, Deserialize, Serialize, Type)]
        pub struct GetConfigInput {
            pub key: String,
        }

        t(|ctx, args: GetConfigInput| async move {
            let config = ctx.config.clone();
            let value = config
                .get(args.key)
                .map_err(|e| rspc::Error::new(ErrorCode::BadRequest, e.to_string()))?;

            Ok(value.to_string())
        })
    });

    router
}
