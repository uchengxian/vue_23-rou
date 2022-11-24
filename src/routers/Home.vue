<template>
<div>
  <h1>“home组件”</h1>
  <h1>“home组件”</h1>
  <h1>“home组件”</h1>
  <h1 @click="goback">“home组件”</h1>
  <p>用户名：params{{ $route.params.id}}</p>
  <p>用户名：query{{ $route.query.id}}</p>
  <button @click="goback">goback</button>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data(){
    return{
      ob:'456'
    }
  },
  methods:{
    goback(){
      // this.$router.go(-1)
      // this.$router.push({path:'/FooTer?url='+this.$route.path})
      this.$router.push({name:"Home",params:{id:this.ob}})
    }
  }
}
</script>

<style scoped>

</style>