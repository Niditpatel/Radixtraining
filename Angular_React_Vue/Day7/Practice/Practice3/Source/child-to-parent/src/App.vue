<script>
import Profile from './components/Profile.vue'
export default{
  data(){
    return{
      Name:''
    }
  },
  components:{
    Profile
  },
  methods:{
    show(data){
      this.Name = data;
    }
  }
}
</script>
<template>
  <div class="mx-auto mt-[100px] h-[30px] w-fit ">
    <h1 class="capitalize mb-4 text-2xl">Child to parent </h1>
    <Profile @display="show($event)"></Profile>
    <h1 v-if="Name" class="capitalize"> Hello  {{Name}}</h1>
</div>
</template>