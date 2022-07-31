use std::sync::Arc;

use crate::Shared;
use prisma::spaces::Data;
use rand::seq::SliceRandom;
use serde::{Deserialize, Serialize};
use tauri::State;
use ts_rs::TS;

/// Gets all spaces from the "spaces" table
#[tauri::command]
pub async fn get_spaces(state: State<'_, Arc<Shared>>) -> Result<String, String> {
    let client = state.inner().0.clone();
    let result = client.spaces().find_many(vec![]).exec().await.unwrap();
    println!("{:#?}", result);
    Ok(serde_json::to_string(&result).unwrap())
}

/// Creates a new space.
/// Randomly gets the space name by getting the len of all spaces present
/// and then prepending Space to it
#[tauri::command(async)]
pub async fn create_space(state: State<'_, Arc<Shared>>) -> Result<(), String> {
    let client = state.inner().0.clone();
    let colors = vec![
        "#699BF7", "#F769F1", "#F7BE69", "#F76969", "#7469F7", "#69F76F", "#F769F1",
    ];

    // get all the spaces
    let result = client.spaces().find_many(vec![]).exec().await.unwrap();
    let space_name = format!("Space #{}", result.len());
    let final_color: &str = colors.choose(&mut rand::thread_rng()).unwrap();

    println!("Creating new space with color {:#?}", final_color);

    client.spaces().create(
        prisma::spaces::name::set(space_name),
        prisma::spaces::description::set(String::new()),
        prisma::spaces::icon::set(String::from("Document16Filled")),
        prisma::spaces::color::set(final_color.to_string()),
        vec![],
    ).exec().await.unwrap();

    Ok(())
}
