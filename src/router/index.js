import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Pet from '../pages/Pet/Pet.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import  Classify from '../pages/Classify/Classify.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite,
    },
    {
      path:'/',
      redirect:'/msite',
    },
    {
      path:'/classify',
      component:Classify,
    },
    {
      path:'/pet',
      component:Pet,

    },
    {
      path:'/shopcart',
      component:ShopCart,

    }
  ]
})
