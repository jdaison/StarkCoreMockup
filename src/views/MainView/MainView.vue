<template>
  <el-container>
    <el-aside>
      <SmartFilters></SmartFilters>
    </el-aside>
    <el-container>
      <el-header>
        <MenuBar></MenuBar>
      </el-header>
      <el-main>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
      <el-footer>
        <router-link :to="{ path: 'about' }">About</router-link>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script src="./mainview.js"></script>
<style lang="scss" src="./mainview.scss"></style>
