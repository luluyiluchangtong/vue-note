<template>
  <div class="">
    <ul class="flex fixed bottom-0 z-1 justify-center w-100">
      <li v-for="(tab, index) in tabs" class="ph2" :key="index">
        <router-link  :to="tab.path">{{tab.text}}</router-link>
        <!-- 默认渲染成 a 标签，可通过 tag属性生成别的标签 -->
      </li>
    </ul>
  </div>

</template>
<script>
export default {
  data() {
    return {
      tabs: [
        { text: "part1", path: "/part1" },
        { text: "part2", path: "/part2" },
        { text: "part3", path: "/part3" },
        { text: "aboutVue", path: "/aboutVue" }
      ]
    };
  }
};
</script>
<style scoped>
.router-link-exact-active {
  color: blue;
}
/* 链接激活时的局部配置 */
</style>
