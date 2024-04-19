import { createApp } from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import Routers from './router.ts';
import './style.css'
import App from './App.vue'
const router = createRouter({
    history:createWebHashHistory(),
    routes:Routers
});
const app=createApp(App)
app.use(router)
app.mount('#app')
