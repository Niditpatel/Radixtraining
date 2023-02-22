<script>
export default{
    data(){
        return{
            alpha:[]
        }
    },
    mounted(){
        for(let i =65 ;i<=90;i++){
            this.alpha.push(String.fromCharCode(i));
        }
    }
}
</script>
<template>
    <div class="Alpha">
    <ul  v-for="item of alpha"><li>{{item}}</li></ul>
</div>
</template>

<style>
.Alpha{
    display: grid;
    grid-template-columns: auto auto auto auto;
}
</style>