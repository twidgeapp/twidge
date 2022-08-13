use std::sync::Arc;

use prisma::PrismaClient;
use serde::{Deserialize, Serialize};
use tauri::State;

use crate::utils::{
    element::{parse_type, write_data_url_to_fs},
    get_assets_dir,
};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct CreateElemntValue {
    data_url: String,
    r#type: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct CreateElementData {
    pub space_id: i32,
    pub r#type: String,
    pub value: Vec<CreateElemntValue>,
}

#[tauri::command]
pub async fn create_element(
    client: State<'_, Arc<PrismaClient>>,
    data: CreateElementData,
) -> Result<(), String> {
    let client = client.inner().clone();

    match parse_type(data.clone().r#type).as_str() {
        "text" => {}
        "file" => {
            let assets_dir = get_assets_dir().await.unwrap();

            for data in data.value.clone() {
                // split data url into 2 parts by / and get the last part
                let f_type = data.r#type.split("/").last().unwrap();

                let mut file = assets_dir.join(uuid::Uuid::new_v4().to_string() + "." + f_type);

                write_data_url_to_fs(data.data_url.clone(), file).unwrap();
            }
        }

        &_ => todo!(),
    }

    Ok(())
}
