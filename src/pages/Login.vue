<template>
  <div>

    <transition name="slide-fade">
      <div class="auth__status__block" v-if="hasAuthSuccess" style="color:#4fb416">
        User login success
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="auth__status__block" v-if="hasAuthError"  style="color:red">
        An error occurred in login
      </div>
    </transition>

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
      },
      hasAuthSuccess:false,
      hasAuthError: false,
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
            this.hasAuthSuccess = true;
          })
          .catch(error => {
            console.log(error);
            this.hasAuthError = true;
          })
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

.auth__status__block{
  width:200px;
  height:70px;
  position: absolute;
  right:0;
  padding: 10px;
  font-size: 17px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  background-color: #a7d9b6;
  box-shadow: 3px 3px 3px black;
}
.auth__status__block{
  width:200px;
  height:70px;
  position: absolute;
  right:0;
  padding: 10px;
  color:#4fb416;
  font-size: 17px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  background-color: #a7d9b6;
  box-shadow: 3px 3px 3px black;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

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