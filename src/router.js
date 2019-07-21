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
       ]
    }, 
    {
      path: "/about", component: () => import("./views/About.vue")
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
});
