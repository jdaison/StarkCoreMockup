<template>
  <el-container class="item-car">
    <car v-for="item in cars"
      :posted="item.posted" 
      :location="item.location"
      :price="item.price"
      :key = "item.id"
    >
    </car>
    <AddButton class="add-button"></AddButton>
  </el-container>
</template>

<script src="./homeview.js"></script>
<style lang="scss" src="./homeview.scss" scoped></style>
