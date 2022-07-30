pub mod db;
pub mod functions;

use std::sync::Arc;

pub struct Shared(pub Arc<prisma::PrismaClient>);
