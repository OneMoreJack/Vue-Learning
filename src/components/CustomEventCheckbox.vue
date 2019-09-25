<template>
  <div>
    <input 
      type="checkbox"
      :checked="checked"
      @change="checkHandler"
    >
  </div>
</template>

<script>
  export default {
    name: 'CustomEventCheckbox',
    
    model: {
      prop: 'checked',
      event: 'change'
    },

    props: {
      checked: Boolean,
    },

    methods: {
      checkHandler(event) {
        this.$emit('change', event.target.checked)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>