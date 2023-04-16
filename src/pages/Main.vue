<template>
    <h1 class="part__main">Auction items</h1>
    <auction-item-list :auctionItems="$store.state.global_data.auctionItems"/>
</template>

<script>
import axios from "axios";
import AuctionItem from "@/components/AuctionItem";
import AuctionItemList from "@/components/AuctionItemList";
export default {
  components: {AuctionItem,AuctionItemList},

  data() {
    return {

    };
  },
  methods:{
    getHi(){
      axios.get(this.URL).then(response => this.message = response.data).catch(error => console.log(error))
    }
  },
  mounted() {
    axios.interceptors.request.use(
        config => {
          const token = localStorage.getItem('token');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        },
        error => {
          return Promise.reject(error);
        }
    );
  }

}
</script>

<style>
.part__main{
  text-align: center;
  margin: 10px 0;
  font-size: 29px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
}
</style>