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

pub fn write_data_url_to_fs(url: String, path: PathBuf) -> String {
    let data_url = dataurl::DataUrl::parse(&url).unwrap();
    let data = data_url.get_data();

    let mut file = File::create(path.clone()).unwrap();
    file.write_all(data).unwrap();

    path.to_str().unwrap().to_string()
}
