<template>
  <div>
    <custom-event-checkbox v-model="ifChecked" />
    <br><hr><br>
    <custom-event-input 
      v-model="msg"
      label="greet：" 
      @focus="onFocus"
    />
  </div>
</template>

<script>
  import CustomEventCheckbox from '@/components/CustomEventCheckbox'
  import CustomEventInput from '@/components/CustomEventInput'
  export default {
    name: 'CustomEvents',
    components: {
      CustomEventCheckbox,
      CustomEventInput
    },

    data() {
      return {
        ifChecked: true,
        msg: 'hello, child'
      }
    },

    methods: {
      onFocus(event) {
        console.log('监听focus', event)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>