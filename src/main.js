import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import Dash from './views/Dashboard.vue'
import Home from "@/views/Home.vue";
import App from "@/App.vue";
import './assets/main.css'

// ROUTER
const routes = [
    {path: '/', name: 'Dashboard',component: Dash},
    {path: '/home',name: 'Home', component: Home},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
.use(router)
.mount('#app')