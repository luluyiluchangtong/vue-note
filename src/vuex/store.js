import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import module from './modules/module'
import { storePlugins } from './storePlugins';

// export default new Vuex.Store ({
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    module
  },
  plugins: [storePlugins]
  // 这里如果引用modules里的数据的写法是：
  // return this.$store.state.module.number
})
export {
  store
}
// 每一个 Vuex 应用的核心就是 store（仓库），每个应用仅仅包含一个 store 实例。
// mutations: 改变 store 中的状态的唯一途径就是显式地  提交 (commit) mutations
// getters: 从 store 中的 state 中派生出一些状态
// action: 提交的是 mutation, 异步改变数据状态


// export 出去的  文件使用驼峰式；方法，函数等使用 首字母大写 + 驼峰式写法

// vuex
// 根实例 注册 store，注入到所有子组件中， 子组件通过 this.$store 访问到。
// 读取 store 中的状态最简单的方法就是在计算属性中返回某个状态
// 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地 跟踪 每一个状态的变化
