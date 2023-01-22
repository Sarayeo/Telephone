import { createRouter, createWebHashHistory } from 'vue-router'
import JournalView from '../views/JournalView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from "@/views/AboutView.vue";
import AddView from "@/views/AddView.vue";

const routes = [
  {
    path: '/',
    name: 'journal',
    component: JournalView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView},
  {
    path: '/adding',
    name: 'adding',
    component: AddView}
    
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
