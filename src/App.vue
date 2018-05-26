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
import navTab from "@/components/navTab";
export default {
  data() {
    return {
      number: {
        one: 11,
        two: 22
      }
    };
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
