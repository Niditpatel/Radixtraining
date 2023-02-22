<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink
          :to="{name:'profile','params':{name:'nidit'}}"
          >Profile</RouterLink
        >
      </nav>
    </div>
  </header>
  <RouterView />
</template>
