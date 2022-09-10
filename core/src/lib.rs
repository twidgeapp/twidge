use std::sync::Arc;

use prisma::PrismaClient;

pub mod db;
pub mod errors;
pub mod functions;
pub mod prisma;
pub mod routes;
pub mod utils;

#[derive(Debug, Clone)]
pub struct Shared {
    pub client: Arc<PrismaClient>,
}
