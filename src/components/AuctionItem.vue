<template>
    <div class="board__item__container">
      <img src="@/assets/images/imageNotFound.png" alt="img not found" class="board__item__img">
      <div class="board__item__content">
        <h3 class="board__item__title" :auctionItem="auctionItem.title">{{ auctionItem.title }}</h3>
        <p class="board__item__text" :auctionItem="auctionItem.description">{{ auctionItem.description }}</p>
        <h5 class="board__item__final__price">Current rate: ${{auctionItem.finalPrice}}</h5>
        <h6 class="board__item__start__price" :auctionItem="auctionItem.initialPrice">Starting rate: ${{ auctionItem.initialPrice }}</h6>
        <button class="board__item__btn" @click="$router.push(`/auctions/${auctionItem.id}`)">More</button>
      </div>
    </div>

</template>

<script>
export default {
  props:{
  auctionItem:{
    type: Object,
    required: true
    }
  }
}
</script>

<style scoped>
.board__item__container{
  width:90%;
  padding: 20px;
  background-color: white;
  border:2px solid #565454;
  margin: 20px auto;
  height: 200px; /* максимальная высота */
  border-radius: 20px;
  box-shadow: 2px 2px 7px black;
}

.board__item__title{
  font-size: 24px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
}

.board__item__text{
  margin-top:10px ;
  max-height: 100px;
  -webkit-line-clamp: 4; /* Число отображаемых строк */
  display: -webkit-box; /* Включаем флексбоксы */
  -webkit-box-orient: vertical; /* Вертикальная ориентация */
  overflow: hidden;
  font-size: 17px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: normal;
}

.board__item__final__price{
  padding: 3px 5px;
  border-radius: 10px;
  background-color: #565454;
  color: white;
  font-size: 17px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: normal;
  margin-top: 5px;
  display: inline-block;
}

.board__item__start__price{
  color: #565454;
  font-size: 15px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: normal;
  margin-top: 5px;
  margin-left: 15px;
  display: inline-block;
}

.board__item__btn{
  color: #565454;
  padding: 0px 10px;
  background-color: white;
  margin: 10px 15px;
  float: right;
  font-size: 17px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: normal;
}

.board__item__btn:hover{
  color: white;
  background-color: #565454;
  cursor: pointer;
}

.board__item__img{
  float: left;
  width: 150px;
  height:150px;
  margin-right: 20px;
  border-radius: 10px;
}
</style>