<script>
export default{
  data(){
    return{
      Name :'Nidit'
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">Greeting Of The Day {{Name}}</h1>
    <input type="text" v-model="Name"/>
  </div>
</template>

<style>

</style>