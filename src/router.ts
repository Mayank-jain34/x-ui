import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Buttons from './views/Buttons.vue';
import Toasts from './views/Toasts.vue';
import Icons from './views/Icons.vue';
import Accordions from './views/Accordions.vue';
import Cards from './views/Cards.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: Buttons,
    },
    {
      path: '/toasts',
      name: 'toasts',
      component: Toasts,
    },
    {
      path: '/icons',
      name: 'icons',
      component: Icons,
    },
    {
      path: '/accordions',
      name: 'accordions',
      component: Accordions,
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards,
    },
  ],
});
