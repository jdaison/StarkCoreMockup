<template>
  <el-container class="item-car">
    <el-row>
      <el-col :span="4">
        <i class="el-icon-circle-check"></i>
      </el-col>
      <el-col :span="4">
        {{posted}}
      </el-col>
      <el-col :span="4">
        {{location}}
      </el-col>
      <el-col :span="4">
        <div class="vertical-align">
          <img id="img-logo" alt="car" src="../../assets/car.png"/>
        </div>
      </el-col>
      <el-col :span="4" class="price">
        {{formatPrice(price)}}
      </el-col>

    </el-row>

  </el-container>
</template>

<script src="./car.js"></script>

<style lang="scss" src="./car.scss" scoped></style>