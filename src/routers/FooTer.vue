<template>
<div>
  <h1>"footer组件"</h1>
  <p>用户名：params{{ $route.params.id}}</p>
  <ul>
    <li v-for="(v,k) in ams" :key="k">      <router-link :to="{
                    path:'/FooTer/MSG',
                    query:{
                        id:v.id,
                        title:v.title
                    }
                }">
      {{v}}
    </router-link>&nbsp;</li>
    <router-view></router-view>
  </ul>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: "FooTer",
  data(){
    return{
      msg:[{id:'001',title:'第一个标题'},{id:'002',title:'第2个标题'},{id:'003',title:'第3个标题'},],
      ams:[]
    }
  },
  mounted() {
    axios.get('https://api.uixsj.cn/hitokoto/get?type=hitokoto&code=json').then((res)=>{
      console.log(res)
      this.ams.push(res.data.content)
    })
  }
}
</script>

<style scoped>

</style>