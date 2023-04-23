<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap" rel="stylesheet">
  <div class="app">
      <top-menu :isAuth="$store.state.global_data.isAuth"></top-menu>
    <div class="container" >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>

*{
  box-sizing: border-box;
  padding: 0;
  margin:0;
}

.container{
  width: 70%;
  background-color: white;
  border: 2px solid #1393dc;
  margin: 10px auto;
  padding:10px 20px;
}

</style>