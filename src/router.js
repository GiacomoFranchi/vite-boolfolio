import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";
import ContactsPage from "./pages/ContactsPage.vue";
import SingleProjectPage from "./pages/SingleProjectPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/aboutus',
            name: 'about',
            component: AboutUsPage
        },
        {
            path: '/contatti',
            name: 'contacts',
            component: ContactsPage
        },
        {
            path: '/api/projects/:slug',
            name: 'progetto',
            component: SingleProjectPage
        }
    ]
});
export{router};