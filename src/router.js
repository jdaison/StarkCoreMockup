import Vue from "vue";
import Router from "vue-router";
import MainView from "./views/MainView/MainView.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: MainView
    }, 
    {
      path: "/about", name: "about", component: () => import("./views/About.vue")
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
});
