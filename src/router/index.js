import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../components/Store.vue'
import Cart from '../components/Cart.vue'
import Checkout from '../components/Checkout.vue'
import Thankyou from '../components/Thankyou.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/store', name: 'Store', component: Store },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/thank-you', name: 'Thankyou', component: Thankyou },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
