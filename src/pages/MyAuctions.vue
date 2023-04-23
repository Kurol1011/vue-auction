<template>
  <h1 class="part__my__auction__items">My auction items</h1>
  <auction-item-list :auctionItems="$store.state.global_data.myAuctionItems"/>
</template>

<script>
import axios from "axios";
import AuctionItemList from "@/components/AuctionItemList";
import AuctionItem from "@/components/AuctionItem";
export default {
  components: {AuctionItem,AuctionItemList},
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
    axios.get('http://localhost:8081/my-auctions')
        .then(response => this.$store.commit('global_data/addMyAuctionItems',response.data))
        //.then(response => console.log(response.data))
        .catch(error => console.log(error))
  }
}
</script>

<style scoped>
.part__my__auction__items{
  text-align: center;
  margin: 10px 0;
  font-size: 29px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
}
</style>