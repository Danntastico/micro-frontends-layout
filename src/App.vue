<template>
  <div id="micro-frontends-layout">
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  beforeCreate() {
    if (!sessionStorage.getItem('token')) {
      window.history.pushState(null, null, '/login');
    }
  },
};
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}
body {
  height: 100%;
}
</style>
