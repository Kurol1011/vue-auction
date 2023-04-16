<template>
  <auction-item
      v-for="auctionItem in auctionItems"
      :auctionItem="auctionItem"
      :key="auctionItem.id">

  </auction-item>
</template>

<script>
import auctionItem from "@/components/AuctionItem";
export default {
  components:{auctionItem},
  props:{
    auctionItems:{
      type: Array,
      required:true
    }
  }
}
</script>

<style scoped>

</style>