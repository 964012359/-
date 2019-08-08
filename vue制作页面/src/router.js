import VueRouter from 'vue-router'


import Home from './components/tabbar/home.vue'
import Member from './components/tabbar/member.vue'
import Shopcar from './components/tabbar/shopcar.vue'
import Search from './components/tabbar/search.vue'
import NewsList from './components/news/newsList.vue'
import NewsInfo from './components/news/newsInfo.vue'


const router = new VueRouter({
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', component:Home},
        {path:'/member', component:Member},
        {path:'/shopcar', component:Shopcar},
        {path:'/search' ,component:Search},
        {path:'/home/newsList', component:NewsList},
        {path:'/home/newsInfo/:id', component:NewsInfo},
    ],
    linkActiveClass:'mui-active'
})


export default router