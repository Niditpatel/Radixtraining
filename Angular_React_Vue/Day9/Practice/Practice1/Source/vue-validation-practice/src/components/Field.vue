<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            ID: '',
            Name: '',
            Address: '',
            userinfo: []
        }
    },
    validations() {
        return {
            ID: { required },
            Name: { required },
            Address: { required }
        }
    },
    methods: {
        async adddata() {
            const validuser = await this.v$.$validate()
            if (!validuser) return;
            else this.userinfo.push({ ID: this.ID, Name: this.Name, Address: this.Address });
        }
    }
}
</script>

<template>

    <div class="form-group w-fit mx-auto my-5">
        <h1>User Profile Form</h1>
        <div class="my-2">
            <label>ID : </label><br>
            <input class="form-control border border-black" v-model="ID" @blur="v$.ID.$touch">
            <div v-if="v$.ID.$error">this Field is required</div>
        </div>
        <div class="my-2">
            <label>Name : </label><br>
            <input type="text" class="form-control border border-black" v-model="Name" @blur="v$.Name.$touch">
            <div v-if="v$.Name.$error">this Field is required</div>

        </div>
        <div class="my-2">
            <label>Address : </label><br>
            <input type="text" class="form-control border border-black" v-model="Address" @blur="v$.Address.$touch">
            <div v-if="v$.Address.$error">this Field is required</div>
        </div>

        <button class="text-xl bg-gray-100 border rounded-xl px-5 py-1" @click="adddata()">Add data</button>
    </div>
    <div class="w-fit mx-auto">
        <table class="table border border-collapse">
            <caption>User Data</caption>
            <thead class="bg-gray-50">
                <th class="border">ID</th>
                <th class="border">Name</th>
                <th class="border">Address</th>
            </thead>
            <tr v-if="userinfo.length < 1">
                <td colspan="3"> there is no data to show</td>
            </tr>
            <tr v-else class="odd:bg-gray-50" v-for="item of userinfo">
                <td class="border p-1">{{item.ID}}</td>
                <td class="border p-1">{{item.Name}}</td>
                <td class="border p-1">{{item.Address}}</td>
            </tr>
        </table>
    </div>

</template>

