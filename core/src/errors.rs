use migration_core::migration_connector::ConnectorError;
use thiserror::Error;

#[derive(Debug, Error)]
pub enum CoreError {
    #[error("Prisma New Client Error")]
    PrismaNewClientError(#[from] prisma_client_rust::NewClientError),

    #[error("Prisma Query Error")]
    PrismaQueryError(#[from] prisma_client_rust::QueryError),

    #[error("Tokio IO Error")]
    TokioError(#[from] tokio::io::Error),

    #[error("Tokio Join Error")]
    TokioJoinError(#[from] tokio::task::JoinError),

    #[error("Quaint Error")]
    QuaintError(#[from] quaint::error::Error),

    #[error("Migration Core Error")]
    MigrationCoreError(#[from] ConnectorError),
}
