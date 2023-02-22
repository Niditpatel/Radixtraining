<script>
import ErrorVue from './Error.vue';
export default {
    props: {
        FieldName: String
    },
    components: {
        ErrorVue
    },
    computed: {
        propModel: {
            get() { return this.prop },
            set(FieldName) { this.$emit('update:prop', FieldName) },
        },
    },
}
</script>

<template>
    <span>
        <label class="text-gray-700 text-xl ">FirstName : </label>
        <div class="relative form-floating mb-3 mt-2 xl:w-96">
            <input type="number"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Phone" v-model="FieldName" @blur="v$.FieldName.$touch" />
            <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                your name</label>
        </div>
        <ErrorVue :errors="v$.FieldName.$errors"></ErrorVue>
    </span>
</template>

