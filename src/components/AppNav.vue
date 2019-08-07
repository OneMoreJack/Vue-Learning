<template>
<div>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router ="true"
        @select="handleSelect"
    >
        <el-menu-item index="/">Home</el-menu-item>
        <el-submenu index="/basic/dynamic-components">
            <template slot="title">Basic</template>
            <el-menu-item index="/basic/dynamic-components">动态组件</el-menu-item>
        </el-submenu>  
    </el-menu>
</div>
</template>

<script>
export default {
    name: 'MainPage',
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="scss" scoped>

</style>