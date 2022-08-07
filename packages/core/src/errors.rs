use thiserror::Error;

#[derive(Error, Debug)]
pub enum CoreError {
    #[error("Prisma Query Error")]
    PrismaQueryError(#[from] prisma::QueryError),

    #[error("Prisma Query Error")]
    PrismaNewClientError(#[from] prisma::NewClientError),

    #[error("Tokio Error")]
    TokioError(#[from] tokio::io::Error),

    #[error("Serde Error")]
    SerdeError(#[from] serde_json::Error),

    #[error("Other")]
    OtherError(String),
}
