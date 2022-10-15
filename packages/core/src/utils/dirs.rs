use std::{io, path::PathBuf};

pub fn get_twidge_dir() -> io::Result<PathBuf> {
    let mut path = dirs::home_dir().unwrap();
    path.push(".twidge");
    if !path.exists() {
        std::fs::create_dir(&path)?;
    }
    Ok(path)
}
