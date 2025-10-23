// #![deny(clippy::all)]

use napi::bindgen_prelude::{Error, Result, Status};
use napi_derive::napi;
use walkdir::WalkDir;

#[napi]
pub async fn get_folder_size(path: String) -> Result<u64> {
  let mut total_size = 0;

  // string to os path
  let path = std::path::Path::new(&path);

  if !path.exists() {
    return Err(Error::new(
      Status::GenericFailure,
      format!("Path does not exist: {}", path.display()),
    ));
  }

  if !path.is_dir() {
    return Err(Error::new(
      Status::GenericFailure,
      format!("Path is not a directory: {}", path.display()),
    ));
  }

  for entry in WalkDir::new(path).follow_links(false) {
    match entry {
      Ok(entry) => {
        if let Ok(metadata) = entry.metadata()
          && metadata.is_file() {
            total_size += metadata.len();
          }
      }
      Err(e) => {
        eprintln!("error: {}", e);
        return Err(Error::new(
          Status::GenericFailure,
          format!("Failed to traverse directory: {}", e),
        ));
      }
    }
  }

  Ok(total_size)
}
