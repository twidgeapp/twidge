use std::sync::Arc;

use tauri::State;

#[tauri::command(async)]
pub async fn get_spaces(
    client: State<'_, Arc<prisma::PrismaClient>>,
) -> Result<Vec<prisma::spaces::Data>, String> {
    let client = client.inner().clone();

    let spaces = client.spaces().find_many(vec![]).exec().await;

    match spaces {
        Ok(spaces) => Ok(spaces),
        Err(err) => Err(err.to_string()),
    }
}

#[tauri::command(async)]
pub async fn create_space(
    client: State<'_, Arc<prisma::PrismaClient>>,
) -> Result<prisma::spaces::Data, String> {
    let client = client.inner().clone();

    let spaces = client
        .spaces()
        .find_many(vec![])
        .exec()
        .await
        .unwrap()
        .len();

    let space = client
        .spaces()
        .create(
            prisma::spaces::name::set("Space ".to_owned() + &spaces.to_string()),
            prisma::spaces::description::set(String::new()),
            prisma::spaces::icon::set(String::from("Document16Filled")),
            prisma::spaces::color::set(String::from("#ffffff")),
            vec![],
        )
        .exec()
        .await;

    match space {
        Ok(space) => Ok(space),
        Err(err) => Err(err.to_string()),
    }
}
