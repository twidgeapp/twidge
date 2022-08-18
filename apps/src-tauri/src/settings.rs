use std::sync::Arc;

use tcore::errors::CoreError;
use tcore::prisma::{self, settings, PrismaClient};

pub struct Settings {
    pub hotkey: String,
}

impl Settings {
    pub fn from_name(settings: Vec<prisma::settings::Data>) -> Self {
        let mut f_settings = Settings {
            hotkey: "Ctrl+Shift+K".to_string(),
        };

        for setting in settings {
            if setting.name == "hotkey" {
                f_settings.hotkey = setting.value.to_string();
            }
        }

        f_settings
    }

    pub async fn new(client: Arc<PrismaClient>) -> Result<Self, CoreError> {
        // Check if the hotkey value exists in the database
        // If it doesn't, create it
        let hotkey = client
            .settings()
            .upsert(
                settings::UniqueWhereParam::NameEquals("hotkey".to_owned()),
                (
                    settings::name::set("hotkey".to_owned()),
                    settings::value::set("Ctrl+Shift+K".to_owned()),
                    vec![],
                ),
                vec![],
            )
            .exec()
            .await
            .unwrap();

        let settings = client.settings().find_many(vec![]).exec().await.unwrap();

        Ok(Settings::from_name(settings))
    }
}
