import Vue from "vue";
import Router from "vue-router";
// import ItemList from "./views/ItemList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ItemList.vue")
    },
    {
      path: "/news-detail/:id",
      name: "newsDetail",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ItemView.vue")
    }
  ]
});
