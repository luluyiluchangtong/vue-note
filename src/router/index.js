import Vue from "vue";
import Router from "vue-router";
import p11 from "../components/p11.vue";
import p12 from "../components/p12.vue";

import part1 from "../components/part1.vue";
import part2 from "@/components/part2";
import aboutVue from "@/components/aboutVue";
// import part3 from '../com ponents/part3.vue'
import login from "../components/login.vue";

const part3 = () => import("../components/part3.vue");
// 异步组件的引入方式

Vue.use(Router);
export default new Router({
  linkExactActiveClass: "active", // 链接激活时的全局配置  Exact(精确的)
  // linkExactActiveClass: 'active', 全局配置激活的，默认的class
  // .router-link-exact-active    局部配置 激活的 class类
  // fallback: true(默认)  在浏览器不支持 history的情况下，回退到 hash模式
  mode: "history",
  // 默认值 hash（浏览器环境） abstract（node.js环境） history (HTML5 history模式)
  // 可选值: "hash" | "history" | "abstract"
  scrollBehavior(to, from, savedPosition) {
    // 滚动行为只在 HTML5 history 模式下可用
    // 参数savedPosition只有在使用导航的前进，后退按钮时才有用。
    return {
      x: 0,
      y: 0
    };
  },
  routes: [
    {
      path: "/",
      redirect: "/part1"
    },
    {
      path: "/part1",
      component: part1,
      children: [
        {
          path: "p11",
          component: p11
        },
        {
          path: "/part1/p12",
          component: p12
        }
      ]
    },
    {
      path: "/part2",
      components: {
        default: part2,
        a: p12
      }
    },
    {
      path: "/part3",
      component: part3
    },
    {
      path: "/part3",
      component: part3
      // beforeEnter: (to, from, next) => {
      //   alert("fsfsa");
      //   next();
      // }      路由守卫 没试出来？？？？
    },
    {
      path: "/aboutVue",
      component: aboutVue
    },
    {
      path: "/login",
      component: login
    },
    {
      path: "/login/:Id",
      name: "log",
      component: login
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 200 };
  }
});

// router
// $router 对象的属性： $router.params ....
// 定义路由到组件的映射，引入组件，最后配置响应链接！！
// 动态路由可以设置多个路由参数 /login/:Id/post/:username。。使用路由参数时。因为组件会复用，所以跳转的时候，组件的 钩子函数 也不会被调用！！这里需要注意
// 所以 需要对路由参数的变化做出响应， 使用  beforeRouteUpdate(to,from,next){ console.log('ss'), next()}

// 声明式路由：
// <router-link to="home">Home</router-link>
// <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
// to属性
// replace属性 覆盖历史记录
// append属性（即在当前的路径下追加前往的路径） a到b    路径变为 /a/b
// tag 属性，默认是 a标签。 可以更改  tag="li"
// event 属性， 触发导航的事件，默认 event="click"

// 编程式路由：push()  replace()  go()
// router.push({ name: 'user', params: { userId: 123 }})
// path 和 params 分开写时 params 是不生效的。 要么path 写全； 要么 name 和 params 一起配置。。
// 同样的规则也适用于 router-link 组件的 to 属性。
// router.replace() 和 router.push()不同的是，它不会向 history 添加新记录，而是换掉当前的 history 记录。除此 还有 go()

//
// 嵌套路由: <router-view> 专门用来渲染组件的。。一个 被渲染组件 同样可以包含自己的嵌套出口 <router-view>,
// 要在 嵌套的路由 中渲染组件，需要设置 children配置，以 / 开头的嵌套路径会被当作根路径。 嵌套的路径就直接写路径名就行，无需再设置。
// 命名视图： 即多个 同级出口  <router-view name="a"></router-view>

// 在路由配置中： routes:[{}]  设置  重定向： redirect:'/sd'    别名：alias:'/sd

//  组件 和 路由解耦？？
/*
{
  path: '/login/:Id',
  name: 'log',
  component: login
}    // 这里

{
  path:'/login/:id',// 动态路径参数 以冒号开头
  component:login,
  props: true, //通过 props 解耦
  children:[
    {path:'',component:ccc},
    {path:'kkk',component:kkk},
    {path:'qqq',component:qqq}
  ]
}
*/
//  路由的默认hash模式， 如果改成 history模式，请在后台设置，并在  router里设置一个 404页面
/*
mode: 'history',
routes: [
  { path: '*', component: NotFoundComponent }
]
*/

// 导航守卫： 其实就是 钩子函数。就是在导航跳转的时候，我们就可以通过 钩子函数 来 拦截 并作 相应的处理。
// 使用场景：某些页面需要登录后才可以访问、某些页面需要用户达到什么等级才可以访问，又或者是跳转页面后修改一些信息等等

// 1.全局导航钩子：beforeEach()  afterEach() 写在  路由实例中  即写在 main.js里   afterEach()没有 next参数，
// 2.局部导航钩子：beforeEnter()， 写在 路由配置中
// 3.组件内的导航钩子：beforeRouteEnter(不能获取组件实例 this，不过可以通过给 next() 传递回调访问组件实例)  beforeRouteUpdate()  beforeRouteLeave()
// 每个守卫方法都接收三个参数：(to, from, next) to:哪儿去   form：哪儿来的   next(false)不准去，保持就好。 next({path:'/'}) 去个别的地方吧   next(error) 怎么做你都是错的。

// 路由源信息 meata    过渡效果 <transition> <router-view></router-view> <transition>

// 导航完成后（生命周期钩子 created(){ this.getData() }中）获取数据，期间显示『加载中』之类的指示。 ？？？？？
// 数据获取成功后执行导航。  ？？？？？？？？？

// 路由对象存在于： routes[ {} ---这是路由信息对象 ];  scrollBehavior 方法的参数; 导航守卫的参数;  this.$route

// 切换路由时的滚动行为:
// 路由实例提供的方法：scrollBehavior(to, from, savedPosition)  savedPosition参数只在浏览器前进后退按钮时用到
// 滚动到页面顶部：
/*
  scrollBehavior(to, from, savedPosition) { 
    if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
*/
// 滚动到锚点位置：
/*
scrollBehavior (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
    }
  }
}
*/

// 路由懒加载： 结合 Vue 的异步组件 和 webpack 的代码分割功能
