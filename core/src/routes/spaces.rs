use rspc::RouterBuilder;

use crate::Shared;

pub fn mount() -> RouterBuilder<Shared> {
    RouterBuilder::<Shared>::new()
}
