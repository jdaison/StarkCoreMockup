<template>
  <el-container class="item-car">
    <el-row>
      <el-col :span="2">
        <i class="el-icon-circle-check"></i>
      </el-col>
      <el-col :span="4">
        {{formatDate(posted)}}
      </el-col>
      <el-col :span="4">
        {{location}}
      </el-col>
      <el-col :span="2">
        <div class="vertical-align">
          <img id="img-logo" alt="car" src="../../assets/car.png"/>
        </div>
      </el-col>
      <el-col :span="6" class="price">
        {{formatPrice(price)}}
      </el-col>
      <el-col :span="2">
        <div class="dots"></div>
      </el-col> 
    </el-row>

  </el-container>
</template>

<script src="./car.js"></script>

<style lang="scss" src="./car.scss" scoped></style>