<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld></HelloWorld>
    <button @click="fun">点击this</button>
    <nav>
<!--      <router-link to="/Home/12/123">点击进入</router-link>-->
<!--      <router-link :to="{name:'Home',params:{id:123}}">点击进入params</router-link>-->
      <hr>
      <router-link  to="/FooTer">点击进入</router-link>
      <router-link  to="/Home/123">点击进入home</router-link>
      <router-link  to="/FooTer/hi">点击进入home</router-link>
      <router-link :to="{name:'Home',query:{id:789}}">点击进入query</router-link>
      <router-link :to="{name:'Home',params:{id:888}}">点击进入params</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

import HelloWorld from "@/components/HelloWorld";
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    fun(){
      console.log(this.$route.params)
      console.log(this.$route.query)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a{
  display: block;
  background-color: #42b983;
  text-decoration: none;
  margin: 0 auto;
}
</style>
