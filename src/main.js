// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from './vuex/store'
import {
  store
} from "./vuex/store";
import "./assets/tachyons.css";
import "./assets/reset.css";
// import BScroll from "better-scroll";
// Vue.use(BScroll);
import config from './api/config'
import Toast from "./components/toast";
// 使用插件
// Vue.use(Toast);


import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

// provide / inject 选项只建议在插件和库中使用
// import { Button } from 'ant-design-vue'
// Vue.component(Button.name, Button)


import smoothscroll from "smoothscroll-polyfill";

// kick off the polyfill!
smoothscroll.polyfill();

// 用 vueaxios 就是定义了大家都知道的规范：  vueaxios 引入的时候需要写在前面，否则报错 Vue.use(Vueaxios, axios);
// 有三种使用方式都可以： 1.Vue.axios.get(api)   2.this.axios.get(api)   3.this.$http.get(api)

// 用了vueaxios 就可以不用像下面这么写了。。
// Vue.prototype.$http = axios     this.$http.post().then()

// 全局绑定 就是说在别的组件里 直接使用 axios.get('/user?ID=12345') 不用再 import axios 。。。
// 只是单独的在 单个组件 里用，就直接 import axios  然后 aixos.get(api)... 这么用就行了
Vue.config.keyCodes.y = 121;
Vue.config.productionTip = false;
Vue.prototype.$appName = "My App"; // Vue原型上定义的属性, 方法。这样在每个实例中都可以使用了。
//  $  是为实例属性设置的作用域， 为的是避免和是实例里的 属性，方法冲突
Vue.prototype.$Box = function () {
  // alert("ssss");
};
/*
Vue.config.errorHandler = function (err, vm, info) {
  console.log(err);
  // console.log(info);
}

Vue.config.ignoredElements=[
  'my-component'
]
这里 自定义元素 --- my-component 即使不是组件名么也可以使用

Vue.config.errorHandler=function(err, vm, info){
 // 爆出 生命周期钩子，自定义事件内的错误，及实例
}
Vue.config.warnHandler=function(msg, vm, trace){

}

Vue.config.devtools=true;
Vue.config.silent=true; 所有的日志和警告

*/

/* eslint-disable no-new */
var vm = new Vue({
  el: "#app",
  // el  只能出现在  new 创建的实例中，是Vue实例的挂载目标
  router,
  store,
  template: "<App/>", // vue的 字符串模板 作为vue实例 的标识性应用
  components: {
    App
  },
  //  render: h => h(App)  或使用 render函数 代替 template components
}); // .$mount("#app")  使用手动开启编译代替  el 选项

// 所有的生命周期钩子自动绑定 this 上下文到实例中，
// 因此你可以访问数据，对属性和方法进行运算. 同样不能使用 '=>'
// 每个组件就是一个实例， 组件可以被用来创建多个实例
// beforeCreated  创建并初始化实例
// created 配置 实例的属性，方法，数据观测
// beforeMounted  挂载之前调用，render函数起用，
// mounted  挂载实例之后调用，开始渲染视图，这里 DOM的更新是异步的，得等 DOM 渲染完毕才能观察到数据的更新，  不会承诺所有子组件一起被挂载！！需要 则使用 this.$nextTick()
// beforeUpdate  数据更新时调用，（虚拟DOM重新渲染和打补丁之前）
// Update  数据更新后调用，（虚拟DOM重新渲染和打补丁之后）   不会承诺所有子组件一起被重绘！！需要 则使用  this.$nextTick()
// activated  keep-alive 组件激活时调用
// deactivated  keep-alive 组件停用时调用
// beforeDestroyed  实例销毁前调用
// destroyed  实例销毁后调用

// router.beforeEach((to, from, next) => {
//   alert("全局守卫  路由跳转后的alert");
//   next(); // 没参数，跳转继续。 有参数：1. false 终止跳转   2. path:'' 跳转到指定地址
// });

// router.afterEach((to, from) => {
//   alert("sfsaf");
// });
