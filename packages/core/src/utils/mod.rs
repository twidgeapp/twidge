use crate::errors::CoreError;

pub mod element;

pub async fn get_data_dir() -> Result<std::path::PathBuf, CoreError> {
    let data_dir = platform_dirs::AppDirs::new(Some("twidge"), true)
        .unwrap()
        .data_dir;
    if !data_dir.exists() {
        tokio::fs::create_dir_all(&data_dir).await?;
    }
    Ok(data_dir)
}

pub async fn get_assets_dir() -> Result<std::path::PathBuf, CoreError> {
    let data_dir = platform_dirs::AppDirs::new(Some("twidge"), true)
        .unwrap()
        .data_dir;
    if !data_dir.exists() {
        tokio::fs::create_dir_all(&data_dir).await?;
    }

    let assets_dir = data_dir.join("assets");
    if !assets_dir.exists() {
        tokio::fs::create_dir_all(&assets_dir).await?;
    }

    Ok(assets_dir)
}
