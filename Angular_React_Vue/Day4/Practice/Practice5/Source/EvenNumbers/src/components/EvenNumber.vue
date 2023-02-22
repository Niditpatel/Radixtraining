<script>
export default{
  props:{
    list: Array
  }
}
</script>


<template>
    <ul>
        <li v-for="i of list">{{i}}</li>
    </ul>
</template>