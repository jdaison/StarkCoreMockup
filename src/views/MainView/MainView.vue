<template>
  <el-container>
    <el-header>
    <MenuBar></MenuBar>
    </el-header>
    <el-container>
      <el-aside width="200px">Side bar</el-aside>
      <el-container>
        <el-main>content</el-main>
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
        <el-footer>footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script src="./mainview.js"></script>
<style lang="scss" src="./mainview.scss"></style>
