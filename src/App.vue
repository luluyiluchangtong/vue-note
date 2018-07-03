<template>
  <div id="app">
    <navTab></navTab>
      <router-view></router-view>
      <transition name='fade'>
            <keep-alive>
        <!-- 缓存 -->
      <router-view name='a'></router-view>
      <!-- <router-view> 组件是一个 functional 组件，渲染路径匹配到的视图组件 -->
         </keep-alive>
      </transition>

  </div>
</template>

<script>
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
      num11: 23
    };
  },
  customOption: "foo",
  created: function() {
    console.log(this.$options.customOption); // => 'foo'
  },
  components: {
    navTab
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
