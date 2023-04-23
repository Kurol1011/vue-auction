<template>
  <div>
    <h1 class="part__welcome">Welcome to Online Auction</h1>
    <router-link to="/auctions" class="welcome__link">Open all auctions</router-link>
    <button @click="getHi()">getHi</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return {
      // headers:null
    }
  },
methods:{
  getHi(){
    axios.interceptors.request.use(
        config => {
          const token = localStorage.getItem('token');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            config.headers["Content-Type"] = "application/json";
          }
          return config;
        },
        error => {
          return Promise.reject(error);
        }
    );
    const hiReq = axios.get("http://localhost:8081/hello",
        {
          headers:{
            //'Authorization': 'Bearer ' + localStorage.getItem('token'),
             'Content-Type': 'application/json'
          }
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
  }
},
  computed:{

  }
}
</script>

<style scoped>
.part__welcome{
  text-align: center;
  font-size: 65px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  margin-top:100px;
  color: #0e0b54;
}
.welcome__link{
  display: block;
  font-size: 24px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  margin: 20px auto 50px ;
  color: #1393dc;
  width:200px;
}
</style>