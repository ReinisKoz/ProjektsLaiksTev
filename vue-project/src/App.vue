<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>

  body {
    margin: 0;
    padding: 0;
  }

  main{
    width: 100%;
    background-color: #aca5a5;
    min-height: 100vh;
    padding: 0;
    margin: 0;
  }
</style>