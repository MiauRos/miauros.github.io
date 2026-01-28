import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Projects from '@/pages/Projects.vue';
import About from "@/pages/About.vue";
import Contact from "@/pages/Contact.vue";
import Valentine from "@/pages/Valentine.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact},
  { path: '/love', name: 'Valentine', component: Valentine },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
