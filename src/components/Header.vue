<template>
<!-- eslint-disable max-len -->
  <nav class="flex items-center justify-between flex-wrap bg-white p-5 shadow-lg">
    <div class="flex items-center flex-shrink-0 text-white mr-8">
      <img src="../assets/endava-logo.png" alt="logo" class="mr-2" width="60" />
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="#"
          class="inline-block text-sm px-4 py-5 leading-none border rounded text-gray-700 hover:border-transparent hover:text-red-600  mt-4 lg:mt-0 mx-2 hover:shadow-md"
        >React To-Do List</a>
        <a
          href="#"
          class="inline-block text-sm px-4 py-5 leading-none border rounded text-gray-700 hover:border-transparent hover:text-red-600  mt-4 lg:mt-0 mx-2 hover:shadow-md"
        >Angular Weather</a>
      </div>
      <div>
        <a
          href="#"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-700 border-gray-700 hover:border-transparent shadow-inner hover:text-red-600 hover:bg-white hover:shadow-lg mt-4 lg:mt-0"
        >Sign Out</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
</style>
