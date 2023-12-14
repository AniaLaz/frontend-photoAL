import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";
import AboutPage from "@/pages/About";
import Shares from "@/pages/Shares.vue";
import PostIdPage from "@/pages/PostIdPage";
import WhatIDoCatrgory from "@/pages/WhatIDoCatrgory";
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
  {
    path: "/category",
    component: WhatIDoCatrgory,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
