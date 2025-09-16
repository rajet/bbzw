import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TopSecretView from "../views/TopSecretView.vue";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";

// Define route records with proper typing
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
    children: [
      {
        path: "news",
        component: NewsView,
      },
      {
        path: "jobs",
        component: JobsView,
      },
    ],
  },
  {
    path: "/secret",
    name: "Secret",
    component: TopSecretView,
    beforeEnter: (to, from, next) => {
      const evenMinute = new Date().getMinutes();
      if (evenMinute % 2 === 0) {
        next("/");
        console.log("ZUGRIFF VERWEIGERT");
      } else {
        console.log("Zugriff erlaubt");
        next();
      }
      console.log(`navigiert von: ${from.path} nach ${to.path}`);
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
