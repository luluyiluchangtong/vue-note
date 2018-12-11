// 运行时版本 + 编译器 = 完整版本  runtime + compiler
// 最终打好的包里实际上是不需要 编译器 的，所以只用 运行时版本 即可。
// 响应式数据：通常是 通过 view 来修改 model，如果能够通过 model来反映 view的变化。则就实现了 响应式数据！！
// 通过 vue的 dev-tool 查看input 的 v-model 绑定，修改视图里的数据，相应的 data 也会改变，修改 data里的数据，视图改变


// 生命周期
//  el 询问有无 el 节点 / 挂载 el 节点 到 vm 实例,  有无 template模板  --- 》 beforeMounted 编译 template 模板为 render 函数  》 mounted  将实例挂在到节点
// 数据更新 updated ，， 虚拟 DOM 重新渲染打补丁，，

// 响应式原理
// 数据转为  getter setter，  get，set变化，通知 watcher 函数， watcher函数触发 render函数渲染虚拟 DOM，视图改变


// virtual DOM  不是 shadow DOM （MDN），， 后者只是一种 dom封装，其实还是操作实际 dom

// 模板语法： 插值， 指令， 缩写

// 数据变化 执行异步 或 开销较大的操作时 是使用侦听器 watch:{}, 

// class 绑定对象   内联写法 :class="{active: isActive}" / data对象写法 :class="classObject" / 计算属性写法  classObject: ()=>{return {active: ...}}
//       绑定数组   :class="[activeClass, errorClass]"  /  :class="[{active:isActive}, errorClass]"

// style 绑定对象   内联写法 :style="{active: isActive}" / data对象写法 :class="styleObject"  / 计算属性写法 styleObject: ()=>{return {active: ...}}
//       绑定数组   :style="[activeClass, errorClass]"

// 多个元素为一组 进行切换时， 请使用 template  包裹这组元素， template 不会被渲染到页面上。。

// this.loginType = this.loginType === "username" ? "email" : "username";  
// v-if 和 v-show 的本质区别就是，前者条件为 真 才渲染到 DOM，  v-show 则只是 display:blokc/none. 一直都存在在dom 中

// 除了数组的  v-for   还有对象的 v-for     value in object      ( value, key ) in object

// title 特性 和 vue 实例的 message 属性 '保持一致'
// 数据 绑定到 DOM文本， DOM特性， DOM结构上
// 这篇教程 '主要描述的' 就是如何使用这些选项来创建你想要的行为
// vue 实例暴露的属性  const vm=new Vue({})   vm.$data  vm.$el  vm.$watch()....
// 生命周期钩子函数，这给了用户在不同阶段添加自己的代码的机会

// 数组的变异 push() pop() ...   非变异方法 (concat() filter() ...)， 即 是否修改了 原始数组
// vm.$set(vm.items, indexOfItem, newValue)  通过索引设置数组的方式
// vm.items.splice(newLength)   修改数组长度

// vm.$set(vm.userProfile, 'age', 27)  设置对象属性
// vm.userProfile = Object.assign({}, vm.userProfile, {  设置对象多个属性
//   age: 27,
//   favoriteColor: 'Vue Green'
// })

// 事件修饰符  按键修饰符  系统修饰符  

// v-model.lazy   v-model.number  v-model.trim

// @click="$emit('abc',12)  触发 父组件 的事件时， 还可以传递参数，父组件利用这个参数作运算

// 不同于组件和 prop，事件名不会被用作一个 JavaScript 变量名或属性名，所以就没有理由使用 camelCase 或 PascalCase 了

// 全局注册组件 和 农局部注册组件的 区别是， 局部注册的组件在使用时， 需要在 components 选项里声明。
// 组件可以接受任意的特性，而这些特性会被添加到这个组件的根元素上

// 组件上， 组件内
// 组件上，其他传入的特性值一般替换掉组件内部的值， class style 时特例， 会合并掉内部的和外部传入的
// 组件上的 特性（除了 class style），若不想传递到 根元素， 就使用 inheritAttrs: false, 禁用掉，
// 然后通过在组件元素上绑定 v-bind="$attrs" 接受父组件上 特性的传递

// 组件上监听的事件 都只能是 组件内 $emit 提供来的，如果想要 监听原声事件 传一个 .native 修饰符就行了,,
// 此时事件是作用在 最外层元素上的。 
// 组件内使用了 v-bind:"$attrs"  inheritAttrs: false,  时， 
// 此时 组件内 某个元素 可以通过  $listeners 属性 接受 组件上 的所有 事件监听器 除了含有 native 修饰符的

// 异步组件 ？？？？？




// props:{
propA: Number;
PropB: {
    type: String,
    default: "ss"
},
PropC: {
    type: Object,
    default: () => {
        return { message: "22" }
    }
}
}