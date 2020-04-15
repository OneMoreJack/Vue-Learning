<template>
  <div id="app">
    <hello-world />
    <!-- <router-view name="nav"></router-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'app',

  components: {
    HelloWorld
  }
}
</script>

<style>
* {padding: 0; margin: 0}
#app {
  width: 1000px;
  margin: auto;
}
</style>
