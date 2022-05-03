<template>
  <a
    class="normal-link"
    target="__blank"
    :href="link.to"
    v-if="isExternalLink"
    >{{ link.name }}</a
  >
  <router-link v-else :to="link.to" v-slot="{ href, isActive }"
    ><a :href="href" :class="isActive ? 'is-active' : 'normal-link'">{{
      link.name
    }}</a></router-link
  >
</template>

<script>
export default {
  name: 'CustomLink',
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith('http');
    },
  },
};
</script>

<style>
a {
  font-weight: normal;
  margin: 0 10px;
  text-decoration: none;
}

.is-active {
  color: #42b983;
  font-weight: bold;
}

.normal-link {
  color: #c6c5c5;
}
</style>
