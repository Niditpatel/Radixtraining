<script>
export default {
    data() {
        return {
            num1: '',
            num2: '',
            ans: '',
            operator: ''
        }
    },
    methods:{
        handlechange(){
            return this.operator = ''
        },
        operation(value) {
            if (this.num1 === '' || this.num2 === '') {
                return alert("give numbers first");
            } else {
                if (value === '+') {
                    this.ans = (parseFloat(this.num1) + parseFloat(this.num2)).toFixed(2).toString()
                    return this.ans, this.operator = value;
                } else if (value === '-') {
                    this.ans = (parseFloat(this.num1) - parseFloat(this.num2)).toFixed(2).toString()
                    return this.ans, this.operator = value;
                } else if (value === '*') {
                    this.ans = (parseFloat(this.num1) * parseFloat(this.num2)).toFixed(2).toString()
                    return this.ans, this.operator = value;
                }
                else if (value === '/') {
                    this.ans = (parseFloat(this.num1) / parseFloat(this.num2)).toFixed(4).toString()
                    return this.ans, this.operator = value;
                }
                else {
                    alert("please select valid operation");
                }
            }
        }
    }
}
</script>

<template>
<fieldset class="calc">
    <legend>
        <h2>Calc</h2>
    </legend>
    <label for="num1">Enter First Number :</label>
    <input type="number" name="" id="num1" v-model="num1"   @keyup="handlechange()"><br><br>
    <label for="num2">Enter Second Number : </label>
    <input type="number" name="" id="num2" v-model="num2" @keyup="handlechange()"> <br> <br>
    <span class="calc-btns">
        <button class="btn" value="+" @click="operation('+')">+</button>
        <button class="btn" value="-" @click="operation('-')">-</button>
        <button class="btn" value="*" @click="operation('*')">*</button>
        <button class="btn" value="/" @click="operation('/')">/</button>
    </span>
    <br>
    <div v-if="num1 !='' && num1 !=undefined ">
        <h3>Output :</h3>
        <div>
            {{num1}} &nbsp;
            <span v-if="num2 !='' && num2 !=undefined">
                <span v-if="operator !=''">
                    ({{operator}})
                </span>
                &nbsp; {{num2}}
                <span v-if="operator !='' && ans !=='NaN'">
                    = {{ans}}
                </span>
            </span>
            
        </div>
    </div>
</fieldset>
</template>


<style>
.calc{
    padding-bottom: 80px ;
    margin:  0px 500px;
}
.calc-btns{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.btn{
    height: 40px;
    font-size: medium;
    width: 40px;
    border-radius: 10px;
    background-color:rgba(170, 104, 231, 0.534);
}
.btn:active{
    font-size: larger;
    background-color:rgb(71, 0, 138);
}
.calc textarea {
    width: 100%;
}
</style>