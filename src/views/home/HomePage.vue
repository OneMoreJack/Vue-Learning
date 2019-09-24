<template>
<div>
    <el-collapse 
        v-model="activeNames"
        :style="{
            width: '1000px', 
            margin: 'auto',
            color: 'lightgray',
        }" 
    >
        <el-collapse-item 
            v-for="item in navData"
            :key="item.id"
            :title="item.title" 
            :name="item.id"
        >
            <div
                v-for="con in item.content"
                :key="con.id"
            >
                <el-divider content-position="left">
                    <span 
                        :style="{cursor: 'pointer'}"
                        @click="jumpTo(con.link)"
                    >
                        {{con.title}}
                    </span>
                </el-divider>
            </div>
        </el-collapse-item>
    </el-collapse>
</div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            activeNames: ['1'],
        }
    },
    computed: {
        navData() {
            return this.$store.state.nav.navData
        }
    },

    methods: {
        jumpTo(path) {
            this.$router.push({
                path
            })
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>