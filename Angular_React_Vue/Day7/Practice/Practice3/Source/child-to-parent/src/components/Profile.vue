<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        displayname(name) {
            this.$emit('display', this.name)
        }
    }
}
</script>

<template>
    <label class="text-xl ">Name : </label><br>
    <input type="text"
        class="border border-black rounded-xl my-2 form-control pl-2 focus:border-green-900 focus:outline-none focus:border-2"
        name="name" id="name" v-model="name" @input="displayname(name)" placeholder="Enter Name Here... ">
</template>