use std::sync::Arc;

use prisma::PrismaClient;
use serde::{Deserialize, Serialize};
use tauri::State;

use crate::utils::{
    element::{parse_type, write_data_url_to_fs},
    get_assets_dir,
};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct CreateElementValue {
    content: String,
    r#type: String,
}

#[derive(Debug, Clone)]
pub struct Element {
    content: String,
    r#type: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct CreateElementData {
    pub space_id: i32,
    pub r#type: String,
    pub value: Vec<CreateElementValue>,
}

#[tauri::command]
pub async fn create_element(
    client: State<'_, Arc<PrismaClient>>,
    window: tauri::Window,
    data: CreateElementData,
) -> Result<(), String> {
    let client = client.inner().clone();

    let mut values = Vec::new();

    match parse_type(data.clone().r#type).as_str() {
        "text" => {
            for value in data.clone().value {
                values.push(Element {
                    content: value.content,
                    r#type: value.r#type,
                });
            }
        }
        "file" => {
            let assets_dir = get_assets_dir().await.unwrap();

            for data in data.value.clone() {
                // split the data url into the data and the mime type
                let f_type = data.r#type.split("/").last().unwrap();
                let mut file = assets_dir.join(uuid::Uuid::new_v4().to_string() + "." + f_type);

                let file = write_data_url_to_fs(data.content.clone(), file);
                let ele = Element {
                    content: file,
                    r#type: data.r#type.clone(),
                };

                values.push(ele)
            }
        }

        &_ => todo!(),
    }

    for value in values {
        let ele = client
            .elements()
            .create(
                prisma::elements::element_type::set(value.r#type),
                prisma::elements::content::set(value.content),
                prisma::elements::space::link(prisma::spaces::UniqueWhereParam::IdEquals(
                    data.space_id,
                )),
                vec![],
            )
            .exec()
            .await
            .unwrap();

        window.emit("create-element", serde_json::to_string(&ele).unwrap());
    }

    Ok(())
}

#[tauri::command]
pub async fn get_elements(client: State<'_, Arc<PrismaClient>>) -> Result<String, String> {
    let client = client.inner().clone();

    let elements = client.elements().find_many(vec![]).exec().await.unwrap();

    Ok(serde_json::to_string(&elements).unwrap())
}
