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
  },
  async created() {
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
    axios.get('http://localhost:8081/auctions')
        .then(response => this.$store.commit('global_data/addAuctionItems',response.data))
        //.then(response => console.log(response.data))
        .catch(error => console.log(error))
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