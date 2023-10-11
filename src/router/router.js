import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";
import AboutPage from "@/pages/About";
import Shares from "@/pages/Shares.vue";
import PostIdPage from "@/pages/PostIdPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/post",
    component: PostPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/post/:id",
    component: PostIdPage,
  },
  {
    path: "/shares",
    component: Shares,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
