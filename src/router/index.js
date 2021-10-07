import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Service',
    name: 'Service',
    component: function () {
      return import(/* webpackChunkName: "Service" */ '../views/Services.vue')
    }
  },
  {
    path: '/Contactss',
    name: 'Contactss',
    component: function () {
      return import(/* webpackChunkName: "Service" */ '../views/Contactss.vue')
    }
  },
  {
    path: '/Category',
    name: 'Category',
    component: function(){
      return import(/*webpackChunkName: "Category" */ '../views/Category.vue')
    }
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "About" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
