<template>
  <div>
    <h1 class="part__login">Login page</h1>
    <div class="container__login">
      <form @submit.prevent="sendLoginRequest()">
        <label for="email" class="login__label">Email:</label>
        <input type="text" v-model="User.email" class="login__input">
        <label for="password" class="login__label">Password:</label>
        <input type="password" v-model="User.password" class="login__input">
        <button class="btn__auth">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      LoginURL:'http://localhost:8080/api/auth/login',
      User:{
        email:'',
        password:''
      }
    }
  },
  methods:{
    sendLoginRequest(){
      axios.post(this.LoginURL,this.User,{
        headers:{
          //this.$store.state.auth_data.authHeaders
          'Content-Type': 'application/json'
        }
      })
          //.then(response => { this.$store.commit('auth_data/setJwtToken',response.data.token);})
          .then(response => {
            localStorage.setItem('token', response.data.token);
            console.log('login success');
          })
          .catch(error => { console.log(error)})
    }
  },
mounted() {
  // axios.interceptors.request.use(
  //     config => {
  //       const token = localStorage.getItem('jwtToken');
  //       if (token) {
  //         config.headers.Authorization = `Bearer ${token}`;
  //       }
  //       return config;
  //     },
  //     error => {
  //       return Promise.reject(error);
  //     }
  // );
}
}
</script>

<style scoped>

.part__login{
  text-align: center;
  margin: 10px 0;
  font-size: 29px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
}

.container__login{
  display: flex;
  width: 90%;
  padding:20px;
  border: 2px solid #0e0b54;
  border-radius: 20px;
  margin:10px auto;
  display: flex;
  box-shadow: 2px 2px 7px black;
  flex-direction: column;
  align-items: center;
}

.login__label{
  display: inline-block;
  margin:15px 0 5px;
  font-size: 20px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
}

.login__input{
  display: block;
  border: 2px solid #565454;
  border-radius: 20px;
  padding:5px 10px;
  width:250px;
  margin-top: 10px;
  font-size: 14px;
  font-family: 'Ubuntu', sans-serif;
  font-weight:700;
  color: #0e0b54;
}

.btn__auth{
  color: #565454;
  padding: 5px 10px;
  background-color: white;
  margin: 10px auto;
  font-size: 17px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: normal;
  box-shadow: 2px 2px 7px black;
  display: block;
}
.btn__auth:hover{
  color: white;
  background-color: #565454;
  cursor: pointer;
}
</style>