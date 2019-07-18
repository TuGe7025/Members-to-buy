import Vue from 'vue'
import Router from 'vue-router'
import Detail from './views/Detail/Detail.vue'
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
      path: '/login',
      name: 'login',
      component: () => import('./views/User/userLogin.vue')
    },
    {
      path: '/newaval',
      name: 'new',
      component: () => import('./views/New-arrival/New.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/User/register.vue')
    },
    {
      path: '/discount',
      name: 'discount',
      component: () => import('./views/Discount/Discount.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      components: {
        default: Detail
      }
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
      },
      children: [
        {
          path: 'nologin',
          component: () => import('@/components/user-login/noLogin.vue')
        },
        {
          path: 'login',
          component: () => import('@/components/user-login/Login.vue')
        }
      ]
    }
  ]
})
