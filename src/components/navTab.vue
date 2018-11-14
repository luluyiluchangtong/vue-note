<template>
  <div class="">
    <ul class="flex fixed bottom-0 z-1 justify-center w-100">
      <li v-for="(tab, index) in tabs" class="ph2" :key="index">
        <router-link  :to="tab.path">{{tab.text}}</router-link>
        <!-- 默认渲染成 a 标签，可通过 tag属性生成别的标签 -->
        <!-- 若想将激活的 class 类 用在外层元素，而不是 a 链接，
        <router-link tag="li" to="/foo">
          <a>/foo</a>
        </router-link>
         -->
         <!-- append属性 则在当前路径前加上 '基路径' /a 到 /b 加上 append 则变为  /a/b -->
         <!-- active-class="abc" 默认是 router-active-calss  可以在路由全局中设置选项 linkActiveClass 的值全局配置 -->
      <router-link :to="{path:'home', query:{a:'ss'}}"></router-link>
      <!-- exact 属性精确配置路径，防止 点击当前路径 /a/b ， /a 路径也会被设置 css 类名，所以在路径 /a 上设置 exact 属性 -->
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
