use std::collections::HashMap;
use std::sync::Arc;

use lazy_static::lazy_static;

use crate::{
    errors::CoreError,
    prisma::{settings, PrismaClient},
};

lazy_static! {
    static ref SETTINGS: HashMap<&'static str, &'static str> = {
        let mut m = HashMap::new();
        m.insert("hotkey", "ctrl+shift+space");
        m.insert("autostart", "true");
        m.insert("first_run", "true");
        m
    };
}

pub async fn populate_settings(client: &Arc<PrismaClient>) -> Result<(), CoreError> {
    for (key, value) in SETTINGS.iter() {
        let found_ele = client
            .settings()
            .find_unique(settings::name::equals(key.to_string()))
            .exec()
            .await?;

        if found_ele.is_none() {
            client
                .settings()
                .create(key.to_string(), value.to_string(), vec![])
                .exec()
                .await?;
        }

        println!("Found ele: {:?}", found_ele);
    }

    Ok(())
}
