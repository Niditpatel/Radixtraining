<script>
import EvenNumber from "./components/EvenNumber.vue";
export default{
  data(){
    return{
      myarr:[]
    }
  },
  components:{
    EvenNumber
  },
  mounted(){
    for(let i =0 ; i <= 100; i++){
      if(i%2 === 0) this.myarr.push(i);
    }
  }
}
</script>
<template>
<EvenNumber :list=myarr ></EvenNumber>
</template>