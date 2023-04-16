<template>
  <h1 class="part_auction__item">Info Auction Item</h1>
  <div class="auction__item__container">
    <img src="@/assets/images/imageNotFound.png" alt="" class="auction__item__img">
    <h3 class="auction__item__title"> {{ this.getMyItem.title }}</h3>
    <div class="auction_item__description__container">
      <h4 class="auction_item__description__title">Description</h4>
      <p class="auction_item__description__text">
        {{ this.getMyItem.description }}
      </p>
    </div>
    <div class="auction__item__rate__board">
      <div class="rate__controller">
      <span class="final__rate">Current rate: $8755</span>
      <div>
      <input type="text" class="input__rate" value="" placeholder="Input your rate">
      <button class="btn__rate" @click="gethi">Up</button>
      </div>
      <span class="start__rate">Start rate: $ {{ this.getMyItem.initialPrice }}</span>
      </div>
      <div class="rate__members">
        <ul class="rate__members__list">
          <li class="rate__members__el">1</li>
          <li class="rate__members__el">2</li>
          <li class="rate__members__el">3</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
        auctionId: this.$route.params.id,
  }},
  methods:{
    gethi(){

    }
  },
  computed:{
    getMyItem(){
      return this.$store.state.global_data.auctionItems.find(i => i.id === parseInt(this.auctionId));
    }
  }

}
</script>

<style>

.part_auction__item{
  text-align: center;
  margin: 10px 0;
  font-size: 29px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
}

.auction__item__container{
  display: flex;
  width: 90%;
  flex-direction: column;
  background-color: white;
  padding:15px 30px;
  margin: auto;
  border-radius: 20px;
  border: 2px solid #565454;
  box-shadow: 2px 2px 7px black;
  /*align-items: center;*/
}

.auction__item__img{
  width: 70%;
  height:300px;
  margin:0 auto;
  border-radius: 10px;
}

.auction__item__title{
  font-size: 29px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  margin:20px 10px;
  color: #0e0b54;
}

.auction_item__description__container{
  border:2px solid #a7d9b6;
  border-radius: 30px;
  padding:10px 30px 30px;
}

.auction_item__description__title{
  font-size: 27px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
}

.auction_item__description__text{
  color:#0e0b54;
  font-size: 17px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: normal;
  line-height: 1.7;
}

.auction__item__rate__board{
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  border: 2px solid orange;
  border-radius: 20px;
  padding:10px 20px;
}
.rate__controller{
  display: flex;
  flex-direction: column;
}


.auction__item__rate__board span{
  display: inline-block;
}
.final__rate{
  border: 2px solid orangered;
  padding:5px 10px;
  border-radius: 20px;
  width:270px;
  margin-bottom: 10px;
  font-size: 19px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
}

.input__rate{
  width:200px;
  height:30px;
  border: 2px solid #0e0b54;
  border-radius: 10px;
  text-align: center;
  font-size: 17px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  color:#0e0b54;
}

.btn__rate{
  width:60px;
  height:30px;
  border: 2px solid black;
  border-radius: 20px;
  color:#0e0b54;
  margin-left: 10px;
  font-size: 15px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  box-shadow: 2px 2px 5px #0e0b54;
}

.btn__rate:hover{
  background-color: #4fb416;
  color:white;
  cursor: pointer;
}

.start__rate{
  border: 2px solid #565454;
  border-radius: 20px;
  padding:5px 10px;
  width:170px;
  margin-top: 10px;
  font-size: 14px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: normal;
  color: #656565;
}

.rate__members{
  width:250px;
  border:2px solid #0e0b54;
  border-radius: 20px;
  padding: 5px 10px;
}

.rate__members__list{
  list-style:none;
}

</style>