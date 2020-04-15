class Tool {
  name = 'Tool'

  debounce(fn, delay = 1000) {
    let timer;
    return function(...args) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fn.call(this, ...args)
      }, delay)
    }
  }
}

export default new Tool()