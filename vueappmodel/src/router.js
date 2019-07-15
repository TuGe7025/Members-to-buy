import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/Footer/Footer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/garage',
      name: 'garage',
      component: () => import('./views/Garage-Kits/Garage.vue')
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('./views/Home/Home.vue'),
        footer: Footer
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        default: () => import('./views/Kind/Kind.vue'),
        footer: Footer
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: () => import('./views/Cart/Cart.vue'),
        footer: Footer
      }
    },
    {
      path: '/order',
      name: 'order',
      components: {
        default: () => import('./views/Order/Order.vue'),
        footer: Footer
      }
    }
  ]
})
