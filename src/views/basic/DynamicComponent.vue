<template>
<div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane 
            v-for="item in tabs"
            :key="item.name"
            :label="item.label" 
            :name="item.name"
        >
            <component :is="item.name"></component>
        </el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
import DemoOne from '@/views/demo/DemoOne.vue';
import DemoTwo from '@/views/demo/DemoTwo.vue';
import DemoThree from '@/views/demo/DemoThree.vue';

export default {
    name: 'DynamicComponent',
    components: {
        DemoOne,
        DemoTwo,
        DemoThree,
    },
    data() {
      return {
        activeName: 'DemoOne',
        tabs: [
            {label: '组件 1' , name: 'DemoOne'},
            {label: '组件 2' , name: 'DemoTwo'},
            {label: '组件 3' , name: 'DemoThree'},
        ]
      };
    },
    methods: {
      handleClick(tab, event) {
        
      }
    }
}
</script>

<style lang="scss" scoped>

</style>