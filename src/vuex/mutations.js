import * as types from "./mutation-types";
export default {
  TOGGOLE(state, platform) {
    state.hide = !state.hide;
  },

  [types.ADD_NOSUBSCRIBED](state, object) { },
  increment(state, platform) {
    state.num1 += platform.number11; // 带参数： 是对象下的属性
  },
  add(state, platform) {
    state.module.number += 1;
  },
  mutationAPI(state, platform) {
    state.ajaxDate = platform
  }
};
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation,
// 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)---
// 这里 事件类型是 increment， 回调函数 handler 就是我们实际进行状态更改的地方， 接受state作为第一个参数

// increment1 (state, platform) {
//   state.num += platform.amount
// 以对象的方式,, 这里当以 ...mapMutations 提交时怎么传参呢？？
// }

// 你不能直接调用一个 mutation handler。increment1()。。 要想这样 调用 store.commit('increment')

//   组件中使用 mutation 有两种方式：
// 方式一:
//   methods: {
//     incre () {
//       this.$store.commit('increment')
//     }
//   },

// 载荷：
// 简单的理解就是往handler(stage)中传参 handler(stage,payload)；
// 在大多数情况下，载荷（platform）应该是一个对象  这样可以包含多个字段并且记录的 mutation 会更易读
// 有参数时 --- 载荷方式提交
//    methods: {
//     incre () {
//       this.$store.commit('increment', {amount: 10})
//     }
//   },
//   // 或者 ---- 对象方式提交
//   methods: {
//     incre () {
//       this.$store.commit({
//         type: 'increment',
//         amount: 10
//       })
//     }
//   },
//   //方式二：使用 mapMutations 辅助函数
//   methods: {
//   ...mapMutations([
//       'increment' // 映射 this.increment() 为 this.$store.commit('increment'),, 有 载荷时，也是这样提交，无需加上参数。。
//     ])    同名时使用数组形式，不同名时使用对象形式。像这样： {add: 'increment'}
//   },

// 使用 “常量” 替代 “Mutation 事件类型”, 先在 mutationType.js中定义好 常量 export const SOME_MUTATION = 'SOME_MUTATION'
// 再将 mutationType.js中的常量导入到 mutation.js 中  import { SOME_MUTATION } from './mutation-types'
// mutation的所有函数必须是同步的，
