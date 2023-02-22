<script>
import './style.css'
import display from './components/display.vue'
export default{
  data(){
    return{
      Name:''
    }
  },
  components:{
    display
  }
}
</script>
<template>
  <label class="text=xl"> Name : </label>
  <input type="text" class="border border-black px-1" name="Name" id="Name" v-model="Name" placeholder="Enter Name Here..">
  <display :name="Name"></display>
</template>