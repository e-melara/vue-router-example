<template>
  <CustomLink v-for="link in links" :key="link.to" :link="link" />
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  name: 'NavBar',
  data() {
    return {
      links: [
        {
          to: 'pokemon-home',
          name: 'Pokemons',
        },
        {
          to: 'pokemon-id',
          name: 'Por ids',
          id: 151,
        },
        {
          to: 'pokemon-about',
          name: 'About',
        },

        // DBZ
        {
          to: 'dbz-character',
          name: 'Personajes',
        },
        {
          to: 'dbz-about',
          name: 'DBZ About',
        },

        {
          to: 'https://www.google.com',
          name: 'Google',
        },
      ],
    };
  },
  components: {
    CustomLink: defineAsyncComponent(() =>
      import('../../shared/components/CustomLink.vue')
    ),
  },
};
</script>

<style scoped>
div {
  padding: 0 30px;
}

div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}

div a.router-link-exact-active {
  color: #42b983;
}
</style>
