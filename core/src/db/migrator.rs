use crate::{
    errors::CoreError,
    prisma::{new_client_with_url, PrismaClient},
    utils::get_twidge_dir,
};

pub async fn new_client() -> Result<PrismaClient, CoreError> {
    let library_url = get_twidge_dir().join("library.db");

    log::info!(
        "Connecting to library database at {}",
        library_url.display()
    );
    tokio::fs::create_dir_all(library_url.parent().unwrap()).await?;

    if !library_url.exists() {
        tokio::fs::File::create(library_url.clone()).await?;
    }

    let client =
        new_client_with_url(&("file:".to_string() + library_url.to_str().unwrap())).await?;

    Ok(client)
}
