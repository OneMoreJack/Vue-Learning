<template>
  <div>
    <h1>{{name}}!!</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data() {
    return {
      name: 'Hello World'
    }
  },

  created() {
    this.$tool.debounce(this.printName)()
  },

  methods: {
    printName() {
      console.log('name',this.name)
    }
  }
}
</script>
