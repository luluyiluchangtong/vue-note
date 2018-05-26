export default {
  getNumbers() {
    state => {
      return state.num1.filter(num1 + 3);
    };
  }
};
// 有时候我们需要从 store 中的 state 中 派生出 一些状态. Getters 接受 state 作为其第一个参数
// 除了可以 传入state参数，也可以接受其他 getters 作为第二个参数

//   组件中使用 getter有两种方式：
// 方式一： 读取 getters 对象里操作好的值， 若getters对象里的值返回的是一个函数，则通过方法访问。 属性形式 访问会有缓存，方法形式 访问没有缓存。
//   computed: {
//   getNumbers () {
//     return this.$store.getters.getNumbers
//   }
//   }

// 方式二： 和 state 的规则一样
//   computed: {
//   ...mapGetters([                   或另外命名 {getNum: 'getNumbers'}
//       'getNumbers',
//       'getLength'
//     ])
//   }
