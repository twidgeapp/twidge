use rspc::{internal::MiddlewareBuilderLike, RouterBuilder};

use crate::Shared;

pub mod items;

// TODO: This return type sucks, An rspc solutions is in the works.
pub fn mount() -> RouterBuilder<
    Shared,
    (),
    impl MiddlewareBuilderLike<Shared, LayerContext = Shared> + Send + 'static,
> {
    RouterBuilder::<Shared>::new().merge("items.", items::mount())
}
