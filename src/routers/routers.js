import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () =>
      import(
        /* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage.vue'
      ),
  },
  {
    path: '/:id',
    name: 'pokemon-id',
    component: () =>
      import(
        /* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage.vue'
      ),
    props: route => {
      const id = Number(route.params.id);
      return isNaN(id) ? { id: 1 } : { id };
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(
        /* webpackChunkName: "AboutPage" */ '../modules/pokemon/pages/AboutPage.vue'
      ),
  },
  {
    path: '/:patchMatch(.*)*',
    component: () =>
      import(
        /* webpackChunkName: "AboutPage" */ '../modules/shared/pages/NoPageFound.vue'
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;