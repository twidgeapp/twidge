use std::sync::Arc;

use prisma::PrismaClient;

use crate::config::Config;

/// Router context for use with rspc
pub struct Context {
    pub client: Arc<PrismaClient>,
    pub config: Config,
}
