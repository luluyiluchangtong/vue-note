<template>
  <div id="app">
    <navTab></navTab>
        <div id="nav">
      {{items.c}}dsfv
    </div>
    <p>{{arr}}</p>
    <div v-focus></div>
      <router-view></router-view>
      <transition name='fade'>
            <keep-alive  include="a,b">  
        <!-- a,b 组件的 name；   exclude 意思时不包含哪些组件  -->
        <!-- 缓存, 用在一个子组件 被开关的情形 所以 v-for 不适用 -->
      <router-view name='a'></router-view>
      <!-- <router-view> 组件是一个 functional 组件，渲染路径匹配到的视图组件 -->
           </keep-alive>
         <!-- activated函数  keep-alive激活时调用 -->
         <!-- deactivated函数  keep-alive停用时调用 -->
         <!-- 当组件在 <keep-alive> 内被切换，
           它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行 -->
      </transition>

  </div>
</template>

<script>
// 模板被编译成 渲染 render函数，data里的属性被转换成 getter setter对象，当 getter setter被调用的时候会通知 watcher对象重新渲染，从而触发渲染函数渲染虚拟dom
// "http://61.164.47.179:1515/youcb_test/sys/proc/normalProxy.jsp?procName=PROC_WEB_SD_SCHEME_LOAD_TEST&in_app=969D35C5&in_secrets=145D58F0&in_token=0D023D54&in_webyonghID=1&in_code=ab"
//  生命周期：其实分为三个阶段： 1.数据配置前后（beforeCreate, created） 2. 实例挂载前后（beforeMount, mounted） 3.数据更新前后（beforeUpdate, updated） 4.实例销毁前后（beforeDestroy, destroyed）
import navTab from "@/components/navTab";
export default {
  data() {
    return {
      number: {
        one: 11,
        two: 22
      },
      num11: 23,
      items: {
        a: 34
      },
      arr: [11, 22, 33, 44, 55]
    };
  },
  directives: {
    focus: {
      bind: function(el, binding, vnode, oldnode) {
        var s = JSON.stringify;
        el.innerHTML = // 即指被 指令 绑定的那个元素
          "name: " +
          s(binding.name) +
          "<br>" +
          "value: " +
          s(binding.value) +
          "<br>" +
          "expression: " +
          s(binding.expression) +
          "<br>" +
          "argument: " +
          s(binding.arg) +
          "<br>" +
          "modifiers: " +
          s(binding.modifiers) +
          "<br>" +
          "vnode keys: " +
          Object.keys(vnode).join(", ");
      }
    }
  },
  // 指令对象 focus 的 钩子函数（即指令被调用的场景） bind unbind inserted update componentUpdated
  // bind 指令第一次绑定元素时调用
  // unbind 指令与元素解绑时调用
  // inserted 被绑定元素插入父节点时调用
  // update 指令所在组件 Vnode(虚拟节点) 更新时调用
  // componentUpdated 指令所在组件和子组件的 Vnode(虚拟节点) 更新时调用。
  // Vue.directives("focus", {  全局指令
  // inserted: function (el, bindding, vnode, oldnode) {}
  // })
  customOption: "foo",
  created: function() {
    console.log(this.$options.customOption); // => 'foo'
    // 不能直接在根级上 动态 添加 响应式属性
    this.$set(this.items, "c", 45); // 将 响应式属性 添加到根级的 对象上
    this.$set(this.arr, 3, 45678); // 将 响应式属性 添加到根级的 数组上
    this.arr.splice(0, 1, 88888);
  },
  components: {
    navTab
  },
  methods: {
    foo() {
      var arr = [];
    }
  }
};
</script>

<style scoped>
.active {
  color: green;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
