<template>
  <h2>Pokemon Page</h2>
  <span>{{ id }}</span>
  <div v-if="pokemon">
    <h3>{{ pokemon.name }}</h3>
    <img class="img-pokemon" :src="pokemon.sprites.front_default" />
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pokemon: null,
    };
  },
  created() {
    this.fetchPokemon();
  },
  watch: {
    id() {
      this.fetchPokemon();
    },
  },
  methods: {
    async fetchPokemon() {
      try {
        const json = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then(r => r.json());
        this.pokemon = json;
      } catch (error) {
        this.$router.push('/');
        console.log('No hay nada que hacer');
      }
    },
  },
};
</script>

<style scoped>
.img-pokemon {
  width: 250px;
}
</style>
