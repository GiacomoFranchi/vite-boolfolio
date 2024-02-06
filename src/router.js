import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";
import ContactsPage from "./pages/ContactsPage.vue";
import SingleProjectPage from "./pages/SingleProjectPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue"

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
            path: '/projects/:slug',
            name: 'progetto',
            component: SingleProjectPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }
    ]
});
export{router};