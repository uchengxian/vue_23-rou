## vue router创建
## npm install vue-router@3 
* 终端命令行引入vue-router
##配置
1. 创建router文件夹新建一个index.js文件（此文件用于引入）
2. index.js 中引入vue 引入vue-router 再使用Vue.se使用router
3. 引入配置组件，要使用的路由
4. 创建router实例对象，配置routes属性
```js
const index =  new VueRouter({
    routes: [              //配置路由，这里是个数组
        {                    //每一个链接都是一个对象
            path: '/Home',         //链接路径
            name: 'Home',     //路由名称，
            component: Home   //对应的组件模板
        },{
            path:'/FooTer',
            name:"FooTer",
            component:FooTer,
            //     children:[        //子路由,嵌套路由 （此处偷个懒，免得单独再列一点）
            //   {path:'/',component:Hi},
            //   {path:'hi1',component:Hi1},
            //   {path:'hi2',component:Hi2},
            // ]
        }
    ]
})
export default index // 默认暴露
```
##Vue配置
1. 引入router文件
2. 使用router
 ```js
import router from "./router";
```
##配置html
1. 需要路由的标签替换为
```html
      <router-link to="/Home">点击进入</router-link>
<!--默认是a标签。点击连接跳转需要使用router-link-->
```
2. 路由的显示
```html
<router-view></router-view>
```
需要显示的位置使用router-view

3. 路由的传递参数
```html 
      <router-link to="/Home/12">点击进入</router-link>
      <router-link :to="{name:'Home',params:{id:123}}">
      点击进入</router-link>
```
```js
this.$route.params.id获取参数
path: '/Home/:id'         //路径名称为id接受参数为id
```
使用params传递参数