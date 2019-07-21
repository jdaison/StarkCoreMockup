import Vue from "vue";
import Router from "vue-router";
import MainView from "./views/MainView/MainView.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: MainView,
      children: [
         { path: "/home", component: () => import("./views/Home/HomeView.vue") },      
         { path: "/messages", component: () => import("./views/Messages/MessagesView.vue") },      
         { path: "/wishlist", component: () => import("./views/WishList/WishListView.vue") },      
         { path: "/settings", component: () => import("./views/Settings/SettingsView.vue") },      
       ]
    }, 
    {
      path: "/about", component: () => import("./views/About.vue")
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
});
