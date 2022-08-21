use std::sync::Arc;

use tauri::State;

#[tauri::command(async)]
pub async fn get_spaces(
    client: State<'_, Arc<prisma::PrismaClient>>,
) -> Result<Vec<prisma::spaces::Data>, String> {
    let client = client.inner().clone();

    let spaces = client.spaces().find_many(vec![]).exec().await;

    match spaces {
        Ok(mut spaces) => {
            spaces.sort_by(|a, b| a.index.cmp(&b.index));
            Ok(spaces)
        }
        Err(err) => Err(err.to_string()),
    }
}

#[tauri::command(async)]
pub async fn create_space(
    client: State<'_, Arc<prisma::PrismaClient>>,
    window: tauri::Window,
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
            "Space ".to_owned() + &spaces.to_string(),
            String::new(),
            String::from("Document16Filled"),
            String::from("#ffffff"),
            vec![prisma::spaces::index::set(spaces.try_into().unwrap())],
        )
        .exec()
        .await;

    match space {
        Ok(space) => {
            window.emit("new_space", serde_json::to_string(&space).unwrap());
            Ok(space)
        }
        Err(err) => Err(err.to_string()),
    }
}

#[tauri::command(async)]
pub async fn update_space_indexes(
    client: State<'_, Arc<prisma::PrismaClient>>,
    spaces: Vec<prisma::spaces::Data>,
) -> Result<(), String> {
    let client = client.inner().clone();

    for (index, space) in spaces.iter().enumerate() {
        // create spaces if they do not exist
        let space = client
            .spaces()
            .upsert(
                prisma::spaces::id::equals(space.id.clone()),
                (
                    "Space ".to_owned() + &(space.id + 1).to_string(),
                    String::new(),
                    String::from("Document16Filled"),
                    String::from("#ffffff"),
                    vec![prisma::spaces::index::set(index.try_into().unwrap())],
                ),
                vec![prisma::spaces::index::set(index.try_into().unwrap())],
            )
            .exec()
            .await
            .unwrap();
    }

    Ok(())
}
