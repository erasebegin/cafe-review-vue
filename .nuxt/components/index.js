export { default as Featured } from '../../components/Featured.vue'
export { default as Nav } from '../../components/Nav.vue'

export const LazyFeatured = import('../../components/Featured.vue' /* webpackChunkName: "components/Featured" */).then(c => c.default || c)
export const LazyNav = import('../../components/Nav.vue' /* webpackChunkName: "components/Nav" */).then(c => c.default || c)
