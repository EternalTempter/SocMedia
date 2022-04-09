import { createRouter,createWebHistory } from "vue-router";
import feed from '../views/feed.vue'
import messages from '../views/messages.vue'
import home from '../views/home.vue'
import guilds from '../views/guilds.vue'

const routes = [
    {
        name: 'home',
        path: '/',
        alies: '/home',
        component: home
    },
    {
        name: 'feed',
        path: '/feed',
        component: feed
    },
    {
        name: 'messages',
        path: '/messages',
        component: messages
    },
    {
        name: 'guilds',
        path: '/guilds',
        component: guilds
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router