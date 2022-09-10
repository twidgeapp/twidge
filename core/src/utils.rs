use std::path::PathBuf;

/// Get the twidge config directory.
/// This config directory has the following structure:
/// - library.db
/// - assets/ # All the images/videos/audios are stored here
/// - config.toml
pub fn get_twidge_dir() -> PathBuf {
    let path = platform_dirs::AppDirs::new(Some("twidge"), true).unwrap();

    path.data_dir
}
