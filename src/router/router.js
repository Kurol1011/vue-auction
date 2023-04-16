import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import InfoAuctionItem from "@/pages/InfoAuctionItem";
import CreateAuctionItem from "@/pages/CreateAuctionItem";
import MyAuctions from "@/pages/MyAuctions";
import Welcome from "@/pages/Welcome";

const routes = [
    {
        path:'/',
        component: Welcome
    },
    {
        path:'/auctions',
        component: Main
    },
    {
        path:'/register',
        component: Register
    },
    {
        path:'/login',
        component: Login
    },
    {
        path:'/auctions/:id',
        component: InfoAuctionItem
    },
    {
        path:'/createauction',
        component: CreateAuctionItem
    },
    {
        path:'/myauctions',
        component: MyAuctions
    }
]

const router = createRouter( {
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;

//для подключения роутов
//1 создаем router js routes,router(createrouter(config-прописываем))
//2 регаем наш роутер в main js .use(router)
//3 router-view прописываем в app