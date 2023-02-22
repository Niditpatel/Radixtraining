<script>
import '../style.css'
export default {
    data() {
        return {
            eid: '',
            EName: '',
            Address: '',
            Gender: '',
            DOJ: '',
            Emps: [],
            hobbies: [],
            FMonth: '',
            Fname: '',
            filteredbyMongth: [],
            filterbyname: []
        }
    },
    methods: {
        SaveEmp() {
            this.Emps.push({ ID: this.eid, Name: this.EName, Address: this.Address, Gender: this.Gender, DOJ: this.DOJ, Hobbies: this.hobbies.join(',') });
        },
        getBymonth() {
            this.filteredbyMongth = this.Emps.filter(value => value.DOJ.split('-')[1] == this.FMonth)
        },
        getByName() {
            this.filterbyname = this.Emps.filter(value => value.Name.match(this.Fname));
        }
    }
}
</script>

<template>
    <div class="mx-5">
        <fieldset action="" class="border p-5">
            <legend>Employee</legend>
            <label for="eid">Employee ID : </label>
            <input type="number" class="border form-control" name="EmpID" id="eid" v-model=eid><br><br>
            <label for="name">Eployee's Name : </label>
            <input type="text" class="border form-control" name="EName" id="name" v-model=EName><br><br>
            <label for="Address">Address : </label>
            <input type="text" class="border form-control" name="Address" id="Address" v-model=Address><br><br>
            <label for="Gender">Select Gender : </label>
            <span class="space-x-4">
                <span class="space-x-1">
                    <input type="radio" class="form-check-input" name="gender" id="male" v-model=Gender
                        value="Male"><label for="male">Male</label>
                </span>
                <span class="space-x-1">
                    <input type="radio" class="form-check-input" name="gender" id="female" v-model=Gender
                        value="Female"><label for="female">Female</label>
                </span>
            </span>
            <br><br>
            <label for="DOJ">DOJ : </label>
            <input type="date" class="border form-control" name="DOJ" id="DOJ" v-model="DOJ"><br><br>
            <label for="hobbies">Hobbies : </label>
            <span class="space-x-4">
                <span class="space-x-1">

                    <input type="checkbox" class="form-check-input" name="hobbies" value="Swimming" v-model="hobbies">
                    <label>Swimming</label>
                </span>
                <span class="space-x-1">

                    <input type="checkbox" class="form-check-input" name="hobbies" value="Reading" v-model="hobbies">
                    <label>Reading</label>
                </span>
                <span class="space-x-1">

                    <input type="checkbox" class="form-check-input" name="hobbies" value="Playing" v-model="hobbies">
                    <label>Playing</label>
                </span>
                <span class="space-x-1">

                    <input type="checkbox" class="form-check-input" name="hobbies" value="Others" v-model="hobbies">
                    <label>Others</label>
                </span>
            </span>
            <br><br>
            <button class="border rounded-xl px-5 py-1 hover:bg-blue-400 hover:text-white"
                @click.stop.prevent="SaveEmp()">save</button>
        </fieldset><br><br><br>

        <div class='mb-3 flex justify-between'>
            <span class="space-x-2">
                <label for="MonthFilter">By Month : </label>
                <input type="number" class="border form-control" name="MonthFilter" id="MonthFilter" v-model="FMonth"
                    @keyup="getBymonth">
            </span>
            <span class="space-x-2">
                <label for="SortByName">By Name : </label>
                <input type="text" class="border form-control" name="SortByName" id="SortByName" v-model="Fname"
                    @keyup="getByName">
            </span>

        </div><br>

        <table class="border-collapse border text-center  table-auto border-zinc-900 w-full ">
            <caption>Employees Detail :</caption>
            <tr class="bg-neutral-400">
                <th class="border border-zinc-900 p-2">ID</th>
                <th class="border border-zinc-900 p-2">Name</th>
                <th class="border border-zinc-900 p-2">Address</th>
                <th class="border border-zinc-900 p-2">Gender</th>
                <th class="border border-zinc-900 p-2">DOJ</th>
                <th class="border border-zinc-900 p-2">Hobbies</th>
            </tr>
            <tr v-if="Emps.length === 0">
                <td class="border text-3xl" colspan="6"> There is no data </td>
            </tr>
            <tr class="odd:bg-neutral-400" v-else-if="filteredbyMongth.length !== 0" v-for="i of filteredbyMongth">
                <td class="border border-zinc-900 p-1">{{ i.ID }}</td>
                <td class="border border-zinc-900 p-1">{{ i.Name }}</td>
                <td class="border border-zinc-900 p-1">{{ i.Address }}</td>
                <td class="border border-zinc-900 p-1">{{ i.Gender }}</td>
                <td class="border border-zinc-900 p-1">{{ i.DOJ }}</td>
                <td class="border border-zinc-900 p-1">{{ i.Hobbies }}</td>
            </tr>
            <tr class="odd:bg-neutral-400" v-else-if="filterbyname.length !== 0" v-for="i of filterbyname">
                <td class="border border-zinc-900 p-1">{{ i.ID }}</td>
                <td class="border border-zinc-900 p-1">{{ i.Name }}</td>
                <td class="border border-zinc-900 p-1">{{ i.Address }}</td>
                <td class="border border-zinc-900 p-1">{{ i.Gender }}</td>
                <td class="border border-zinc-900 p-1">{{ i.DOJ }}</td>
                <td class="border border-zinc-900 p-1">{{ i.Hobbies }}</td>
            </tr>
            <tr class="odd:bg-neutral-400" v-else v-for=" i of Emps">
                <td class="border border-zinc-900 p-1">{{ i.ID }}</td>
                <td class="border border-zinc-900 p-1">{{ i.Name }}</td>
                <td class="border border-zinc-900 p-1">{{ i.Address }}</td>
                <td class="border border-zinc-900 p-1">{{ i.Gender }}</td>
                <td class="border border-zinc-900 p-1">{{ i.DOJ }}</td>
                <td class="border border-zinc-900 p-1">{{ i.Hobbies }}</td>
            </tr>
        </table>
    </div>
</template>
