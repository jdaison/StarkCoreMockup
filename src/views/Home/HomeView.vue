<template>
  <el-container class="item-car">
    <h1>
     Already we have <strong>{{countCars}}</strong> cars available to ...
    </h1>
    <car v-for="item in cars"
      :posted="item.posted" 
      :location="item.location"
      :price="item.price"
      :key = "item.id"
    >
    </car>

    <AddCar v-if="showNewCar"></AddCar>

    <AddButton class="add-button"></AddButton>
  </el-container>
</template>

<script src="./homeview.js"></script>
<style lang="scss" src="./homeview.scss" scoped></style>
