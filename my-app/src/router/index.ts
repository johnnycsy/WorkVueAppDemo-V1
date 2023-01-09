import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";

const r = [
  { path: "/", name: "Home", component: Home },
  { path: "/Contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: r,
});

export default router;
