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
      <form @submit.prevent="sendLoginRequest()" class="login__form__container">
        <label for="email" class="login__label">Email:</label>
        <input
            type="text"
            v-model.trim="User.email"
            class="login__input">
        <div v-for="error in v$.User.email.$errors" :key="error.$uid" class="login__error__message">{{error.$message}}</div>
        <label for="password" class="login__label">Password:</label>
        <input
            type="password"
            v-model.trim="User.password"
            class="login__input">
        <div v-for="error in v$.User.password.$errors" :key="error.$uid" class="login__error__message"> {{error.$message}}</div>
        <button class="btn__auth">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email,maxLength,minLength,helpers} from '@vuelidate/validators'
import axios from "axios";
export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data(){
    return{
      LoginURL:'http://localhost:8081/api/auth/login',
      User:{
        email:'',
        password:''
      },
      hasAuthSuccess:false,
      hasAuthError: false,
      isInvalid:true
    }
  },
  validations(){
    return {
    User:{
      email:{
        required:helpers.withMessage("Please enter your email",required),
        email:helpers.withMessage("Your email should be valid",email)
      }
    ,
      password:{
        required,
        minLength:helpers.withMessage("Your password must be more than 4 characters",minLength(4)),
        maxLength:helpers.withMessage("Your password must be less than 128 characters",maxLength(128))

      }
    }
  }
}
,
  methods:{
    async sendLoginRequest(){
      const isFormCorrect = await this.v$.$validate()
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return
      // actually submit form

        this.isInvalid = true;
        const login = axios.post(this.LoginURL, this.User, {
          headers: {
            //this.$store.state.auth_data.authHeaders
            'Content-Type': 'application/json'
          }
        })
            //.then(response => { this.$store.commit('auth_data/setJwtToken',response.data.token);})
            .then(response => {
              localStorage.setItem('token', response.data.token);
              this.hasAuthSuccess = true;
              this.$store.commit('global_data/setIsAuth', true);
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

.login__form__container{
  width:80%
}

.login__label{
  display: block;
  margin:15px 0 5px 30%;
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
  margin:10px auto 0;
  font-size: 14px;
  font-family: 'Ubuntu', sans-serif;
  font-weight:700;
  color: #0e0b54;
}

.login__error__message{
  color:red;
  font-size: 14px;
  font-family: 'Ubuntu', sans-serif;
  font-weight:normal;
  margin: 0 auto;
  display: block;
  text-align: center;
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