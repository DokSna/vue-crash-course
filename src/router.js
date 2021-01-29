// сначала импортируем непосредственно сам Vue
import Vue from 'vue';
// после этого импортируем роутер
import Router from 'vue-router';

import Home from '@/views/Home'

// регаем роутер как плагин (и передаем туда объект Router)
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/todos',
      component: () => import('./views/Todos.vue')
    }
  ],
});
