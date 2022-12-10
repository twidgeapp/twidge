use std::path::PathBuf;

use anyhow::Result;

pub fn get_twidge_dir() -> Result<PathBuf> {
    let home_dir = dirs::home_dir().ok_or(anyhow::anyhow!("Could not find home directory"))?;
    let mut twidge_dir = home_dir.join(".twidge");

    if !twidge_dir.exists() {
        std::fs::create_dir(&twidge_dir)?;
    }

    #[cfg(debug_assertions)]
    {
        twidge_dir = twidge_dir.join("debug");
        if !twidge_dir.exists() {
            std::fs::create_dir(&twidge_dir)?;
        }
    }

    Ok(twidge_dir)
}
