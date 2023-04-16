<template>
      <header class="header__container">
        <div class="header__content">
        <div class="header__logo">
          <span class="header__logo__text">IAuction</span>
        </div>
        <div class="header__links">
          <router-link to="/auctions" class="header__link">All auctions</router-link>
          <router-link to="/" class="header__link">About us</router-link>
          <router-link to="/createauction" class="header__link">Add auction</router-link>
          <router-link to="/myauctions" class="header__link">My auctions</router-link>
        </div>
          <div class="header__profile" ref="header__profile">
            <a @click="toggleDropdown" class="header__dropbtn">Profile</a>
            <div class="header__dropdown__content" v-show="showDropdown" @click="hideDropdown" >
              <router-link to="/register" class="header__dropdown__content__link">Register page</router-link>
              <router-link to="/login" class="header__dropdown__content__link">Login page</router-link>
          </div>
        </div>

      </div>
      </header>
</template>

<script>
export default {
name:'top-menu',
  data() {
    return {
      showDropdown: false,
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    hideDropdown(event) {
        this.showDropdown = false;
    },
  },
}
</script>

<style scoped>




.header__container{
  width:100%;
  height:70px;
  background-color: #565454;
  box-shadow: 5px 3px 5px black;
}

.header__content{
  height: inherit;
  color: white;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 70%;
}

.header__logo{
  flex:1;
  display: flex;
  align-items: center;
  justify-content: start;
}

.header__logo__text{
  font-size: 29px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  display: inline-block;
}

.header__links{
  flex:2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__link{
  display: inline-block;
  font-size: 17px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: normal;
  width: 120px;
  transition: font-size 0.3s ease;
}

.header__link:hover{
  transform: translateX(-3px);
  font-size: 18px;
  font-weight: bold;
}

.header__profile {
  align-self: center;
  flex: 1;
  position: relative;
  display: inline-block;
}

a{
  text-decoration: none;
  color: white;
}

/* Кнопка выпадающего списка */
.header__dropbtn {
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-size: 24px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
}

.header__dropdown__content {
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.header__dropdown__content__link{
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 15px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
}

.header__dropdown__content__link:hover {
  background-color: #ddd;
}

</style>