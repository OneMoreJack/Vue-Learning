<template>
  <div>
    自定义指令 v-focus 使 input 自动聚焦：
    <br>
    <input v-focus type="text"><br><br>
    <hr>
    自定义指令 v-pin 控制按钮 “回到顶部” 的位置<br>
    left:
    <input
      v-model="distance.left"
      type="number" 
    >
    top:
    <input
      v-model="distance.top"
      type="number"
    ><br><br>
    <hr>
    <button v-pin="distance" >回到顶部</button>
      
  </div>
</template>

<script>
  export default {
    name: 'CustomDirective',
    directives: {

      // 自动聚焦指令
      focus: {
        inserted(el) {
          el.focus()
        },
      },

      // 固定定位指令
      pin: {
        bind(el, binding) {
          el.style.position = 'fixed';
          el.style.left = `${binding.value.left}px`;
          el.style.top = `${binding.value.top}px`;
        },

        update(el, binding) {
          el.style.left = `${binding.value.left}px`;
          el.style.top = `${binding.value.top}px`;
        }
      }
    },

    data() {
      return {
        distance: {
          left: 20,
          top: 50
        },
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>