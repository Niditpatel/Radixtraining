<script>
export default{
    data(){
        return{
            Length:'',
            Width:'',
            Area:''
        }
    },
    methods:{
        findArea(){
            this.Area =( parseFloat(this.Length) * parseFloat(this.Width)).toFixed(2)
        }
    }
}
</script>


<template>
    <label for="length">Enter Length of the Ractangle : </label>
<input type="number" id="length" v-model="Length" ><br><br>     
<label for="width"> Enter Width of the Ractangle : </label>
<input type="number"  id="width" v-model="Width" ><br><br>
<button @click="findArea()">Calc Area</button><br>
<div>Output : {{Area}}</div>
</template>
<style>

</style>