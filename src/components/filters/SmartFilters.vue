<template>
  <ElContainer>
    <div class="vertical-align">
      <img id="img-logo" alt="starkcore logo" src="../../assets/logo.png"/>
    </div>
    <div class="rigth-border">

      <div class="vertical-align border-margin-padding-bottom" >
        <i class="el-icon-place"></i>
        <p>Smart Filters</p>
      </div>
      <div class="vertical-align">
        <img src="../../assets/sale.png"/>
        <MySwitch ></MySwitch>
      </div>
      <div class="vertical-align">
        <img src="../../assets/calendar.png"/>
        <MySwitch ></MySwitch>
      </div>
      <div class="vertical-align">
        <img src="../../assets/heart.png"/> 
        <MySwitch ></MySwitch>
      </div>

      <div class="vertical-align border-margin-padding-top">
        <p>Status</p>
      </div>
      <div>
        <input class="searchInput" type="text" placeholder="Search"/>
      </div>
      <div class="label">
        <p  >DELIVERED</p>
      </div>
    </div>
 
  </ElContainer>
</template>

<script src="./smartfilters.js"></script>

<style lang="scss" src="./smartfilters.scss" scoped></style>