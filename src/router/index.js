import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/components/HomeView.vue";
import AboutView from "@/components/AboutView.vue";
import ProductosView from "@/components/ProductosView.vue";
import CarritoView from "@/components/CarritoView.vue";
import AdminView from "@/components/AdminView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/productos",
    component: ProductosView,
  },
  {
    path: "/carrito",
    component: CarritoView,
  },
  {
    path: "/about",
    component: AboutView,
  },
  {
    path: "/admin",
    component: AdminView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
