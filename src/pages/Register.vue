<template>
  <div>
    <button @click="turn">click</button>
    <transition name="slide-fade">
      <div class="register__status__block" v-if="hasRegistrationSuccess" style="color:#4fb416">
        User registration success
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="register__status__block" v-if="hasRegistrationError"  style="color:red">
        An error occurred in registration
      </div>
    </transition>


    <h1 class="part__register">Register</h1>
    <div class="container__register">
      <form @submit.prevent="sendRegisterRequest()">
        <label for="name" class="register__label">Name:</label>
        <input type="text" class="register__input" v-model="userRegister.name"/>

        <label for="surname" class="register__label">Surname:</label>
        <input type="text" class="register__input" v-model="userRegister.surname">

        <label for="email" class="register__label">Email:</label>
        <input type="text" class="register__input" v-model="userRegister.email">

        <label for="password" class="register__label">Password:</label>
        <input type="text" class="register__input" v-model="userRegister.password">
        <button class="btn__auth" >Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios, {interceptors} from "axios";

export default {
  data() {
    return {
      registerApiUrl: 'http://localhost:8080/api/auth/register',
      message:'',
      userRegister:{
        name:'',
        surname:'',
        email:'',
        password:'',
      },
      hasRegistrationSuccess:false,
      hasRegistrationError: false,
    };
  },
  methods: {
    sendRegisterRequest(){
      const request = axios.post(this.registerApiUrl, this.userRegister,{headers:this.$store.state.auth_data.authHeaders})
          .then(response =>{
            //this.$store.commit('auth_data/setJwtToken',response.data.token);
            localStorage.setItem('token',response.data.token);
            this.userRegistrationSuccess = true;
          })
          .catch(error => {
            console.log(error);
            this.hasRegistrationError = true;
          });
    },
    turn(){
      this.hasRegistrationError = true;
    }
  },
};
</script>

<style>
.register__status__block{
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
.register__status__block{
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

.part__register{
  text-align: center;
  margin: 10px 0;
  font-size: 29px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
}

.container__register{
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

.register__label{
  display: inline-block;
  margin:15px 0 5px;
  font-size: 20px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
}

.register__input{
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