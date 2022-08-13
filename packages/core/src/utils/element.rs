use std::{fs::File, io::Write, path::PathBuf};

/// Used to decide if the value has to be written to the filesystem or not
pub fn parse_type(t: String) -> String {
    let result = match t.to_lowercase().as_str() {
        "text" => "text",
        "file" => "file",
        &_ => todo!(),
    };

    result.to_string()
}

pub fn write_data_url_to_fs(url: String, path: PathBuf) -> Result<(), String> {
    let data_url = dataurl::DataUrl::parse(&url).unwrap();
    let data = data_url.get_data();
    let mut path = path.clone();

    let infered_type = data_url.get_media_type();

    path.with_extension(infered_type.split("/").last().unwrap());
    let mut file = File::create(path).unwrap();
    file.write_all(data).unwrap();

    Ok(())
}
