use rspc::RouterBuilder;

use crate::Shared;

pub mod items;

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new().merge("items.", items::mount())
}
