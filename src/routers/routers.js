import { createRouter, createWebHashHistory } from 'vue-router';

import isAutheticatedGuard from './auth-guard';

const routes = [
  {
    path: '/',
    redirect: { name: 'pokemon-home' },
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () =>
      import(
        /* webpackChunkName: "LayoutPokemon" */ '../modules/pokemon/layouts/PokemonLayout.vue'
      ),
    children: [
      {
        path: '',
        name: 'pokemon-home',
        component: () =>
          import(
            /* webpackChunkName: 'ListPagePokemon' */ '../modules/pokemon/pages/ListPage.vue'
          ),
      },
      {
        path: 'about',
        name: 'pokemon-about',
        component: () =>
          import(
            /* webpackChunkName: 'AboutPagePokemon' */ '../modules/pokemon/pages/AboutPage.vue'
          ),
      },
      {
        path: ':id',
        name: 'pokemon-id',
        component: () =>
          import(
            /* webpackChunkName: PokemonPage '' */ '../modules/pokemon/pages/PokemonPage.vue'
          ),
        props: route => {
          const id = Number(route.params.id);
          return isNaN(id) ? { id: 1 } : { id };
        },
      },
      { path: '', redirect: { name: 'pokemon-about' } },
    ],
  },
  // DBZ Layout
  {
    name: 'dbz-layout',
    path: '/dbz',
    beforeEnter: [isAutheticatedGuard],
    component: () =>
      import(
        /* webpackChunkName: "LayoutDBZ" */ '../modules/dbz/layout/DBZLayout.vue'
      ),
    children: [
      {
        path: 'character',
        name: 'dbz-character',
        component: () =>
          import(
            /* webpackChunkName: 'CharactersDBZ' */ '../modules/dbz/pages/Characters.vue'
          ),
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () =>
          import(
            /* webpackChunkName: 'AboutDBZ' */ '../modules/dbz/pages/About.vue'
          ),
      },
      {
        path: '',
        redirect: { name: 'dbz-character' },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// const canAccess = () => {
//   return new Promise(resolve => {
//     const random = Math.random() * 100;
//     if (random > 50) {
//       resolve(true);
//       console.log('Autenticado - canAccess');
//     } else {
//       resolve(false);
//       console.log('Bloqueado por el beforeEach Guard - canAccess');
//     }
//   });
// };

// router.beforeEach(async (to, from, next) => {
//   const authorized = await canAccess();

//   return authorized ? next() : next({ name: 'pokemon-home' });
// });

export default router;
