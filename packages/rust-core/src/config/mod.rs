use std::path::PathBuf;

use anyhow::Result;
use serde::{Deserialize, Serialize};
use serde_json::Value;

use crate::functions::get_twidge_dir;

/// Json config for twidge
///
/// Loading database takes time (not to mention that we need to run migrations on first load).
///
/// So we have a separate config file (json) which has all the important settings
/// which are needed just before the app starts.
#[derive(Deserialize, Serialize, Debug, Clone, Copy)]
pub struct Config {
    pub first_start: bool,
}

impl Default for Config {
    fn default() -> Self {
        Self { first_start: true }
    }
}

impl Config {
    pub fn get(&self, key: String) -> anyhow::Result<Value> {
        let conf: serde_json::Value = serde_json::to_value(&self)?.clone();

        let value = conf.get(&key).ok_or(anyhow::anyhow!("Key not found"))?;
        println!("Config value: {:?}", value);

        Ok(value.clone())
    }

    pub fn load(&self) -> Result<Self> {
        let twidge_dir = get_twidge_dir()?;
        let config_path = twidge_dir.join("config.json");

        if !config_path.exists() {
            std::fs::File::create(&config_path)?;
            self.save()?;
        }

        let config_file = std::fs::File::open(&config_path)?;
        let config: Self = serde_json::from_reader(config_file)?;

        Ok(config)
    }

    // This function assumes that the <twidge_dir>/config.json file exists
    pub fn save(&self) -> Result<PathBuf> {
        let self_clone = self.clone();
        let config_string = serde_json::to_string(&self_clone)?;

        let twidge_dir = get_twidge_dir()?;
        let config_path = twidge_dir.join("config.json");

        std::fs::write(config_path.clone(), config_string)?;

        Ok(config_path)
    }
}
