<template>
  <h1 class="part_create__item">Create Item</h1>
  <div class="create__auction__item__container">
    <form @submit.prevent="" class="create__auction__item_form">
      <label for="title" class="create__auction__item__label">Title</label>
      <input type="text" placeholder="Title" class="create__auction__item__input" v-model="auctionItem.title">
      <label for="description" class="create__auction__item__label">Description</label>
      <textarea type="text" placeholder="description" class="create__auction__item__textarea" v-model="auctionItem.description"></textarea>
      <label for="title" class="create__auction__item__label">Initial Price</label>
      <input type="text" placeholder="Title" class="create__auction__item__input" v-model="auctionItem.initialPrice">
      <button class="create__auction__item__btn">Add auction</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      auctionItem:{
        title:'',
        description:'',
        initialPrice:''
      }
    }
  },
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