<script>
export default{
    props:{
        errors:Array
    }
}
</script>
<template>
    <div>
        <div v-for="error of errors" :key="error.$uid">
            <div class="text-red-900">{{error.$message}}</div>
        </div>
    </div>
</template>