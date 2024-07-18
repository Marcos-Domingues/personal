import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '../views/HomePage'
const lazyload = (view) => import(`../views/${view}.vue`)

const routes = [
  { path: '/', component: HomePage },
  { path: '/projects', component: lazyload('ProjectsPage') }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;