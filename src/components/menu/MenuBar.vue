<template>
  <ElContainer>
    <div>
      <img id="img-logo" alt="starkcore logo" src="../../assets/logo.png"/>
    </div>
    <div v-on:click='toggleMenu($event)' id="home" v-bind:class="{ active: isHomeActive }" >
      <i class="el-icon-s-home"></i>
      <p>home</p>
    </div>
    <div v-on:click='toggleMenu($event)' id="messages" v-bind:class="{ active: isMsgActive }" >
      <i class="el-icon-message"></i>
      <p>Messages</p>
    </div>
    <div v-on:click='toggleMenu($event)' id="wishlist" v-bind:class="{ active: isWishListActive }" >
      <i class="el-icon-star-on"></i>
      <p>WishList</p>
    </div>
    <div v-on:click='toggleMenu($event)' id="settings" v-bind:class="{ active: isSettingActive }" >
      <i class="el-icon-s-tools"></i>
      <p>Settings</p>
    </div>
    <div v-on:click='toggleMenu($event)' id="account" v-bind:class="{ active: isMyAccountActive }" >
      <i class="el-icon-user-solid"></i>
      <p>My Account</p>
    </div>
  </ElContainer>

</template>

<script src="./menubar.js"></script>

<style lang="scss" src="./menubar.scss" scoped></style>