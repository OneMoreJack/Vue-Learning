<!-- TOC -->

- [可复用性 & 组合](#可复用性--组合)
  - [自定义指令](#自定义指令)
    - [钩子函数](#钩子函数)
    - [钩子函数参数](#钩子函数参数)
    - [动态指令参数](#动态指令参数)
    - [函数简写](#函数简写)

<!-- /TOC -->
# 可复用性 & 组合  
## 自定义指令
### 钩子函数
一个指令定义对象可以提供如下几个钩子函数 (均为可选)：
+ `bind` ：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
+ `inserted` ：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
+ `update` ：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
+ `componentUpdated` ：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
+ `unbind` ：只调用一次，指令与元素解绑时调用。

### 钩子函数参数
指令钩子函数会被传入以下参数：
+ `el` : 指令所绑定的元素
+ `binding` : 一个对象，包含以下属性
  + `name` : 指令名，不包括‘v-’
  + `value` : 指令的绑定值
  + `oldValue` : 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
  + `expression` : 字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
  + `arg` : 传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"
  + `modifiers` : 一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
+ `vnode` : Vue 编译生成的虚拟节点
+ `oldVnode` : 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

### 动态指令参数
指令的参数可以是动态的。例如，在 `v-mydirective:[argument]="value"` 中，argument 参数可以根据组件实例数据进行更新！这使得自定义指令可以在应用中被灵活使用。
> `v-mydirective:[argument]="value"` 中的 `value` 应该是data中的变量，而不是字符串 'value'

### 函数简写
在很多时候，你可能想在 `bind` 和 `update` 时触发相同行为，而不关心其它的钩子。比如这样写:
```javascript
  Vue.directive('color-swatch', function (el, binding) {
    el.style.backgroundColor = binding.value
  })
```
