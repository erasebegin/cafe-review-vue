import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70cb3824 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _cbca12b2 = () => interopDefault(import('../pages/view-json.vue' /* webpackChunkName: "pages/view-json" */))
const _def9da2e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _70cb3824,
    name: "about"
  }, {
    path: "/view-json",
    component: _cbca12b2,
    name: "view-json"
  }, {
    path: "/",
    component: _def9da2e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
