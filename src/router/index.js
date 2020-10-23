import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/Default'
import Blank from '@/layout/Blank'
import Index from '@/page/index'
import ChangeCity from '@/page/changeCity'
import GoodsList from '@/page/goodsList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Default,
      redirect: '/index',
      children: [
        {
          path: 's/:name',
          name: 'goods',
          component: GoodsList
        },
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: ChangeCity
        }
      ]
    },
    {
      path: '/blank',
      name: 'Blank',
      component: Blank
    }
  ]
})
