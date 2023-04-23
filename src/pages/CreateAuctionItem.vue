<template>
  <h1 class="part_create__item">Create Item</h1>
  <div class="create__auction__item__container">
    <form @submit.prevent="createAuctionItem()" class="create__auction__item_form">
      <label for="title" class="create__auction__item__label" >Title</label>
      <input type="text" placeholder="Title" class="create__auction__item__input" v-model="auctionItem.title">
      <div v-for="error in v$.auctionItem.title.$errors" :key="error.$uid" class="register__error__message">{{error.$message}}</div>

      <label for="description" class="create__auction__item__label">Description</label>
      <textarea type="text" placeholder="description" class="create__auction__item__textarea" v-model="auctionItem.description"></textarea>
      <div v-for="error in v$.auctionItem.description.$errors" :key="error.$uid" class="register__error__message">{{error.$message}}</div>

      <label for="title" class="create__auction__item__label">Initial Price</label>
      <input type="number" placeholder="Initial price" class="create__auction__item__input" v-model="auctionItem.initialPrice">
      <div v-for="error in v$.auctionItem.initialPrice.$errors" :key="error.$uid" class="register__error__message">{{error.$message}}</div>

      <button class="create__auction__item__btn">Add auction</button>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required,maxLength,minLength,helpers,minValue,maxValue,numeric} from '@vuelidate/validators'
import axios from "axios";

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data(){
    return {
      URL:'http://localhost:8081/item/create',
      auctionItem:{
        title:'',
        description:'',
        initialPrice:0
      }
    }
  },
  validations(){
    return{
    auctionItem: {
        title: {
          required,
          minLength:minLength(2)
        },
        description: {
          required,
          minLength:minLength(60)
        },
        initialPrice: {
          required,
          numeric,
          minValue:minValue(5),
          maxValue:maxValue(999999)
        },
      }
    }
  },
  methods:{
    async createAuctionItem() {

      const isFormCorrect = await this.v$.$validate()
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return
      // actually submit form


      axios.post(this.URL, this.auctionItem, {
        headers: {
          //this.$store.state.auth_data.authHeaders
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      })
          //.then(response => { this.$store.commit('auth_data/setJwtToken',response.data.token);})
          .then(response => {
            console.log('item created');
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>
.part_create__item{
  text-align: center;
  margin: 10px 0;
  font-size: 29px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
}

.create__auction__item__container{
  width:90%;
  padding:20px;
  border: 2px solid #0e0b54;
  border-radius: 20px;
  margin:10px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  box-shadow: 2px 2px 7px black;
}

.create__auction__item__label{
  display: inline-block;
  margin:5px 0;
  font-size: 20px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
}

.create__auction__item__input{
  display: block;
  border: 2px solid #565454;
  border-radius: 20px;
  padding:5px 10px;
  width:400px;
  margin-top: 10px;
  font-size: 14px;
  font-family: 'Ubuntu', sans-serif;
  font-weight:700;
  color: #0e0b54;
}

.create__auction__item__textarea{
  display: block;
  border: 2px solid #565454;
  border-radius: 20px;
  padding:5px 10px;
  width:400px;
  height:300px;
  margin-top: 10px;
  font-size: 14px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  color: #0e0b54;
}

.create__auction__item__btn{
  margin: 15px 0px;
  color: #565454;
  padding: 5px 10px;
  background-color: white;
  font-size: 20px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: normal;
  box-shadow: 2px 2px 7px black;
}

.create__auction__item__btn:hover{
  color: white;
  background-color: orange;
  cursor: pointer;
}
</style>