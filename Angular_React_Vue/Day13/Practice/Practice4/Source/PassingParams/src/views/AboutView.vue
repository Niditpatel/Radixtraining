<template>
  <div class="about">
    <h1>This is an about page</h1>
    <RouterLink :to="{ name: 'profile', params: { name: 'nidit' } }"
      >Profile</RouterLink
    >
  </div>
  <RouterView></RouterView>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
</script>
