<template>
<!-- eslint-disable max-len -->
<nav class="flex items-center justify-between flex-wrap bg-white p-5 shadow-lg">
    <div class="flex items-center flex-shrink-0 text-white mr-8">
      <img src="https://vuejs.org/images/logo.png" alt="logo" class="mr-2" width="60" />
    </div>
    <div> <p class="h1">Micro Frontends</p></div>
      <a
        href="#"
        class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-700 border-gray-700 hover:border-transparent shadow-inner hover:text-red-600 hover:bg-white hover:shadow-lg mt-4 lg:mt-0"
        v-on:click="logout"
      >Sign Out</a>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout() {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('token');
      window.history.pushState(null, null, '/login');
    },
  },
  computed: {
    username() {
      const user = sessionStorage.getItem('user');
      return user ? JSON.parse(user).username : '';
    },
  },
};
</script>

<style>
</style>
