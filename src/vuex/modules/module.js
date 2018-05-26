const state = {
  number: 44456453435453
};
const getters = {
  getnum(state) {
    return state.number; // moudle 内部 getters 和 全局 getters 书写的区别。。
  }
};
const mutations = {
  plusNum(state) {
    state.number += 1;
  }
};
const actions = {
  syncM({ commit }) {
    setTimeout(() => {
      commit("plusNum");
    }, 3000);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
//  将 store 分割成模块  module。
//  mutation, 接受的是 模块的局部状态对象 state
//  getter,action 都可以接受 根节点的状态 rootState   例如 rootState.count
/*
moduleA:{
    namespaced: true,
    state:{},
    getters:{},
}
*/ // 带命名空间的模块使模块具有更高的封装性 和 复用性？？？
