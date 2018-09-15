import { apiAddress } from '../api/api'
export default {
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // commit("increment"); 
        commit("increment", { number11: 11 }); // 带参数 和不带参数的提交方式
      }, 2000);
    });
  },
  actionAPI({ commit }) {  // ajax 请求的数据 放在 状态管理中，供应全局调用，
    apiAddress({
      type: 0,
      sort: 1
    }).then(res => {
      // 获取数据成功后的其他操作
      console.log(res);
      // commit("mutationAPI", res)
      commit("mutationAPI", res)
    });

  }
};
// Action 提交的是 mutation，而不是直接变更状态， 一般是 异步提交 mutation 时用到：如上所示：
// 然后如下这样触发：store.dispatch('incrementAsync').then(()=>{})

// Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此可以有 context.commit context.state
// increment (context) {
// context.commit('increment')
// }
// 可以使用 参数解构来简化代码----
// increment ({ commit }) {
// commit('increment')
// }

// 触发 Action 有两种方式：
// 方式一：
//   methods: {
//     Async () {
//       this.$store.dispatch('incrementAsync')
//   }
// }
// 有参数时， 分 载荷方式 或者 对象方式提交，， 同 mutations 写法一样，如下：
// 1.以载荷形式分发：
//   methods: {
//     Async () {
//    this.$store.dispatch('incrementAsync', {
//    amount: 10
//     })
//     }
//   }

// 2.以对象形式分发：
//   methods: {
//    Async () {
//    this.$store.dispatch({
//    type: 'incrementAsync',
//    amount: 10
//   })
//   }
//   }

//   // 方式二：使用 mapActions 辅助函数
//   methods: {
//   ...mapActions([
//       'incrementAsync' // 映射 this.increment() 为 this.$store.dispatch('increment')
//     ])
// }
