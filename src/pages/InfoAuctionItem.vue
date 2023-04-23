<template>
  <h1 class="part_auction__item">Info Auction Item</h1>
  <div class="auction__item__container">
    <img src="@/assets/images/imageNotFound.png" alt="" class="auction__item__img">
    <h3 class="auction__item__title"> {{ this.auctionItem.title }}</h3>
    <div class="auction__item__description__container">
      <h4 class="auction__item__description__title">Description</h4>
      <p class="auction__item__description__text">
        {{ this.auctionItem.description }}
      </p>
    </div>
    <div class="auction__item__rate__board">

      <div class="rate__join" v-if="!isParticipation">
        <button class="rate__join__btn" @click="joinInAuction()" >Join</button>
      </div>

      <div v-else>
      <div class="rate__controller">
      <span class="final__rate">Current rate: {{this.auctionItem.finalPrice}}</span>
      <div>
      <input type="text" class="input__rate" placeholder="Up your rate on:" v-model="userRate"/>
        <button class="btn__rate" @click="sendUserRate">Up</button>
        <button class="btn__rate" @click="getTotalRate">Calc</button>
        <br>
        <div class="total__rate" >Your total rate: {{ this.totalRate }}</div>
      </div>
      <span class="start__rate">Start rate: $ {{ this.auctionItem.initialPrice }}</span>
      </div>
      </div>

      <div class="rate__members">
        <ul class="rate__members__list">
          <li class="rate__members__el" >1</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
        userRate:0,
        totalRate: 0,
        auctionId: this.$route.params.id,
        auctionItem:{
          id:0,
          title:'',
          description:'',
          initialPrice:0,
          finalPrice:0
        },
        isParticipation:false,
  }},
  methods:{
    sendUserRate(){
      axios.post('http://localhost:8081/do-rate',{
              rate:this.totalRate,
              id:this.auctionItem.id
            },{
        headers: {
          //this.$store.state.auth_data.authHeaders
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      })
          //.then(response => this.$store.commit('global_data/addAuctionItems',response.data))
          .then(response => console.log(response.data))
          .catch(error => console.log(error))
      //location.reload();
    },
    getTotalRate(){
        this.totalRate = Number(this.auctionItem.finalPrice) + Number(this.userRate);
    },
    updateRate(){
      axios.get(`http://localhost:8081/auctions?id=${this.auctionId}`)
          .then(response => {
           this.auctionItem.finalPrice = response.data[0].finalPrice
          })
          .catch(error => {
            if (axios.isCancel(error)) {
              console.log('Запрос отменен');
            } else {
              console.log('Произошла ошибка', error);
            }
          });
    },
    joinInAuction(){
      axios.post('http://localhost:8081/join-auction',this.auctionId,{
        headers: {
          //this.$store.state.auth_data.authHeaders
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      })
          .then(response => { console.log('join is success')
          })
          .catch(error => {
            if (axios.isCancel(error)) {
              console.log('Запрос отменен');
            } else {
              console.log('Произошла ошибка', error);
            }
          });
    }
  },
  async created(){

      //return this.$store.state.global_data.auctionItems.find(i => i.id === parseInt(this.auctionId));
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
      console.log(this.auctionId);
      console.log(`http://localhost:8081/auctions?id=${this.auctionId}`);
      await axios.get(`http://localhost:8081/auctions?id=${this.auctionId}`)
          .then(response => {
                this.auctionItem = response.data[0];
              }
          )
          //.then(response => console.log(response.data))
          .catch(error => console.log(error));
      await axios.get(`http://localhost:8081/boarditem?id=${this.auctionId}`,)
          .then(response => {
            this.isParticipation = response.data;
          })
    },
    mounted() {
      // setInterval(() => {
      //   this.updateRate()
      // }, 1000);
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

.auction__item__description__container{
  border:2px solid #a7d9b6;
  border-radius: 30px;
  padding:10px 30px 30px;
}

.auction__item__description__title{
  font-size: 27px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
}

.auction__item__description__text{
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
.total__rate{
  display: inline-block;
  border: 2px solid orangered;
  border-radius: 20px;
  margin: 10px 0px 10px;
  padding-top:5px;
  width:250px;
  height:30px;
  font-size: 14px;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
}

/*.total__rate__value{*/
/*  display: inline-block;*/
/*  border: 2px solid orangered;*/
/*  border-radius: 20px;*/
/*  margin: 10px 0px 10px;*/
/*  width:150px;*/
/*  height:30px;*/
/*  font-size: 19px;*/
/*  text-align: center;*/
/*  font-family: 'Ubuntu', sans-serif;*/
/*  font-weight: bold;*/
/*}*/

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