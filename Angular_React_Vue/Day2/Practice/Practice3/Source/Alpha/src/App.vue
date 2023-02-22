<script >
import Alpha from './components/Alpha.vue';
export default {
  components: {
    Alpha
  },
  data() {
    return {
      title: "Alphabates :"
    }
  }
}
</script>

<template>
  <h2>{{ title }}</h2>
  <Alpha></Alpha>
</template>

<style>

</style>
