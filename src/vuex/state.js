export default {
  num: "number",
  seen: false,
  num1: 12,
  hide: false,
  gettel: "admin",
  getpas: "admin",
  ajaxDate: [],
  a: 22
};
// Vuex 使用 单一状态树 —— 是的，用一个对象就包含了全部的应用层级状态
// 通过在根实例中（App.vue）注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，（前面的说明在 main.js里体现）
// --- 所以子组件能通过 return this.$store.state.count 访问到.
//   方式一：
//   computed: {
//     count () {
//       return this.$store.state.numbers   // 本地的属性则  return this.numbers
//     }
//   }

// 当组件需要多个状态的时候，使用 mapState辅助函数 帮助我们生成计算属性，主要目的是为了简化书写
//   方式二：
//   computed: mapstate({
//     count: state => state.numbers
//   })   以这个为准吧，， 数据来源更清楚

//    当映射的‘计算属性’的名称（这里是 count） 与 属性 state里值的名称（这里是 numbers）相同时 可以传递一个 字符串数组
//    computed: mapstate([
//      'numbers'           两者都是命名为  number 或者是  count 时这样写
//    ])

// mapState(对象展开运算符 ...mapState) 函数返回的是一个对象，主要目的是将多个对象合并为一个(局部对象和全局对象的混合使用)。
// 使用 对象展开运算符 之后这么写：
// computed: {
//   localComputed () { /* ... */ },
//   // 使用对象展开运算符将此对象混入到外部对象中
// ...mapState({
//      count: state => state.numbers     这里当映射的计算属性名称 和引入的state名称相同时，可使用 数组对象表示
//   })
// }
// 如果 有些状态 严格属于单个组件，最好还是作为组件的局部状态

// 箭头函数的简写： 以下三个只是写法不一样。
// state => state.count
// (state) => state.count
// state => {return state.count}
