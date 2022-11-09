use std::path::PathBuf;

/// Get the twidge config directory.
/// This config directory has the following structure:
/// - library.db
/// - assets/ # All the images/videos/audios are stored here
/// - config.toml
pub fn get_twidge_dir() -> PathBuf {
    let path = platform_dirs::AppDirs::new(Some("twidge"), true).unwrap();
    let mut data_dir = path.data_dir;

    // check if in dev mode
    if cfg!(debug_assertions) {
        data_dir.push("dev");
    }

    data_dir
}
