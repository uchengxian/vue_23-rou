import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/routers/Home";
import Hi from "@/routers/Hi";
import Hi2 from "@/routers/Hi2";
import FooTer from "@/routers/FooTer";
import MSG from "@/routers/MSG";
Vue.use(VueRouter)
const routes = [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
        path: '/Home',         //链接路径
        name: 'Home',     //路由名称，
        component: Home   //对应的组件模板
    },{
        path:'/FooTer',
        name:"FooTer",
        //别名
        alias:"/as",
        component:FooTer,
            children:[        //子路由,嵌套路由 （此处偷个懒，免得单独再列一点）
          {path:'hi',component:Hi,name:"h1"},
          {path:'hi1',component:Hi2},
          {path: 'MSG',component: MSG}
        ]
    }
    //重定向默认选择FooTer组件
    ,{ path: '/', redirect: '/Home'}
]
const router =  new VueRouter({
    routes
})
/*index.afterEach((to) => {
    document.title = to.name;
})*/
export default router