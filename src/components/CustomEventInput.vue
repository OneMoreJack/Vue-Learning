<template>
  <label>
    {{label}}
    <!-- <input 
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    > -->
    <input 
      type="text"
      :value="value"
      v-on="inputListeners"
    >
  </label>
</template>

<script>
  export default {
    name: 'CustomEventInput',
    /* 默认情况下，父作用域的不被认作 props 的特性绑定 (attribute bindings) 
    将会“回退”且作为普通的 HTML 特性应用在子组件的根元素上; inheritAttrs 为
    false 时，关闭这些默认行为*/
    inheritAttrs: false,
    props: {
      value: String,
      label: String,
    },

    computed: {
      inputListeners() {
        let vm = this;
        return Object.assign({},
          this.$listeners,
          {
            // 此处配合 v-model 工作，否则父组件收到的是input事件 [object InputEvent]
            input(event) {
              vm.$emit('input', event.target.value)
            },
          }
        )
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>