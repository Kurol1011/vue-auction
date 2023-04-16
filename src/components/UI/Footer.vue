<template>
 <footer class="footer">
   <div class="footer__content">
     <a href="" class="footer__link">Hello</a>
     <a href="" class="footer__link">its</a>
     <a href="" class="footer__link">footer</a>
   </div>
 </footer>
</template>

<script>
export default {
  name:'cst-footer'
}
</script>

<style scoped>
.footer{
  display: flex;
  width: 100%;
  background-color: #565454;
  position: absolute;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  height:70px;
}
.footer__content{
  color:white;
}

.footer__link{
  text-decoration: none;
  color: white;
  display: inline-block;
}
</style>