<script>
import { Fragment } from 'vue';

export default{
    data() {
        return {
            num1: 0,
            num2: 0,
        };
    },
    components: { Fragment }
}

</script>

<template>
<label for="num1">Enter First Number : </label>
<input type="number" name="Number1" id="num1" v-model="num1"><br><br>
<label for="num2">Enter the Second Number : </label>
<input type="number" name="Number2" id="num2" v-model="num2"><br><br>
<div> Greater Number is :
<span v-if=" num1 > num2">{{num1}}
</span>
<span v-else>
    {{num2}}
</span>
</div>

</template>
