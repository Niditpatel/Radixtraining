<script>
export default {
  data() {
    return {
      UserName: '',
      Password: '',
    };
  },
  methods: {
    Login() {
      if ((this.UserName === 'admin') && (this.Password === 'admin')) {
        alert('login successfull....');
        return true;
      } else {
        console.log(this.UserName);
        console.log(this.Password);
        alert('error');
      }
    },
  },
};
</script>

<template>
  <label for="username">UserName : </label>
  <input
    type="text"
    name="username"
    id="username"
    v-model="UserName"
  /><br /><br />
  <label for="password">Password : </label>
  <input
    type="text"
    name="password"
    id="password"
    v-model="Passowrd"
  /><br /><br />
  {{ UserName }}{{ Password }}
  <button @click="Login()">Login</button>
</template>

