/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'


// Import the dynamic category page
const CategoryPage = () => import('../components/homePage/categoryPage.vue')
const ProductPage = () => import('../components/homePage/productPage.vue')
const homePage = () => import('../pages/index.vue')
const cartPage = () => import('../pages/Cart.vue')
const extendedRoutes  = [
  {
    path: '/',
    name: 'homePage',
    component: homePage,
  },
  {
    path: '/category/:category',
    name: 'CategoryPage',
    component: CategoryPage,
  },
  {
    path: '/product/:productId',
    name: 'ProductPage',
    component: ProductPage,
  },
  {
    path: '/cart',
    name: 'cartPage',
    component: cartPage,
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(extendedRoutes),
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
