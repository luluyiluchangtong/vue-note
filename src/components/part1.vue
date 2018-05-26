<template>
  <div>
    <div class='bb pa2'>
      <h3>例子1：</h3>
      <div v-if='hide' key="hide">
        切換元素1
      </div>
      <div v-else key="show">
        切換元素2
      </div>
      <input type="button" value="anniu" @click='TOGGOLE'>
    </div>
    <!--************-->
    <div class='bb pa2'>
      <num msg='静态 props'></num>
      <!-- <mumName msg='静态 props'></mumName> -->
      <!-- 书写顺序： 1.先写import 2.再写 components  3.最后写组件标签 -->
      <!-- import 后面的名称可以自由定义的，一般是默认的文件名称 -->
      <!-- 静态 props-->
      <num :msg1='msg1'></num>
      <!-- 动态 props-->
      <num v-bind="msg2"></num>
      <!-- 动态 props 绑定对象的方式,-->
      
    </div>
    <!--************-->
    <div class='bb pa2'>
      <router-link to='/login'>登陆</router-link>
      <router-link :to="{ name: 'log', params: { Id: 123 }}">编程式路由1</router-link>
      <span @click="psh()">编程式路由2</span>
      <span>modules里的数据{{number}}</span>
    </div>
    <div class='bb pa2'>
      <ul>
        <li v-for='(tab, index) in tabs' :key='tab.text' @click='tabClik(index)' :class="index===tabActive ?'active':''">
          {{tab.text}}
        </li>
      </ul>
    </div>

    <div class=" bb pa2">
      <input type="text" v-model="msg">
      <!-- 默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event -->
      <div>{{msg}}</div>
    </div>
    <div>{{num1}}</div>
    <input type="button" value="异步提交action" @click='Async'>
    <input type="button" value="提交mutations" @click='incre'>
     <div @click="add">{{number}}</div>

     <input type="text" v-model="newItem"> <input type="button" @click="addItem" value="按钮">
    <ul>
      <li v-for=" (item,index) in items" :key="index">
        <span :class="item.isFinished ? 'del':''">{{ item.label }}</span>
        <span @click="toggole(item)">{{ item.isFinished ? 'todo':'done'}}</span>
        <span @click="dele(index)">delete</span>
      </li>
    </ul>
  <img class=" w-10" src="../assets/images/aa.png" alt="">
     <router-link :to="{ path: '/part2'}" replace>replace</router-link>
     <router-link :to="{ path: '/part1/part2'}" append>append</router-link>
     <!-- ??? append -->

     <router-link to="/part1/p11">p11</router-link>
     <router-link to="/part1/p12">p12</router-link>
      <router-view></router-view>

      <div class="wrapper ba overflow-hidden" ref="wrapper" style=" height:400px; width:400px;">
      <ul class="content">
         <li class=" h5 ba w-100">dsd1</li>
         <li class=" h5 ba w-100">dsd2</li>
         <li class=" h5 ba">dsd3</li>
         <li class=" h5 ba">dsd4</li>
         <li class=" h5 ba">dsd5</li>
         <li class=" h5 ba">dsd6</li>
         <li class=" h5 ba">dsd7</li>
         <li class=" h5 ba">dsd7</li>
      </ul> 
     </div>
     <!-- better-scroll 滚动 -->
     <button @click="toast">按钮</button>
  </div>
</template>
<script>
import num from "./num";
import BScroll from "better-scroll";
// import data from "../api/data";
import { mapState, mapMutations } from "vuex";
export default {
  name: "part1", // 只能出现在 组件选项上，name 主要是便于调试
  data() {
    // data的属性转换为  getter  setter 而且只能是数据，不推荐有状态行为的对象，
    // 这里不能用箭头函数，因为=>指的是父级上下文，this就不是这个实例(组件)了，就找不到data里的数据了
    return {
      items: [],
      newItem: "",
      msg: "",
      tabActive: 0,
      msg1: "动态 props1 --- msg1",
      msg2: {
        one: "动态 props 绑定对象的方式1",
        two: "动态 props 绑定对象的方式2"
      },
      tabs: [{ text: "tab1" }, { text: "tab2" }, { text: "tab3" }]
    };
  },
  mounted() {
    this.$nextTick(() => {
      // this.$nextTick 是一个异步函数，修改数据后，确保 整个DOM渲染完毕，再执行的步骤。 用setTimeout(fn,20)也可以
      this.scroll = new BScroll(this.$refs.wrapper, {
        startY: 20,
        scrollX: true
      });
    });
    // this.$nextTick().then(); 作为一个 Promise使用
    /**
     * 实例方法：
     * Vue.set(target,key,value)  设置对象的 “属性”
     * Vue.delete(target,key)  删除对象的 “属性”
     * Vue.use() 安装插件   Vue.use(vuex)
     * Vue.directive()   注册/获取全局 “指令”  v-if  v-bind
     * Vue.filter()  注册/获取全局 “过滤器”    {{ message | capitalize }}
     * extend  创建组件
     * var Profile=Vue.extend({           // 创建构造器
          template: '<p>{{firstName}}</p>',
          data () {
          return {
          firstName:'lu'
    }
  }
})
new Profile()=$mount('#mount-point') // 创建Profile 实例 并挂在到一个元素上！
// 就是 新建组件

     * 实例属性
     * Vue.version   提供字符串形式的安装版本号
     * 
     * 其他：
     * components：{}  注册/获取全局 “组件”
     * mixin   全局注册一个混合
     * parent  建立父子实例关系，一般不建议用 通过 ptops即可

     */
  },
  created() {
    // 实例创建完后就立即调用的方法
    this.crea();
    this.scroll;
  },
  components: {
    num
    //  mumName: num   另一种带有命名的书写方式
  },
  computed: {
    number() {
      return this.$store.state.module.number;
    },
    ...mapState(["hide", "num1"])
  },
  // 这里不能用箭头函数，因为=>指的是父级上下文，this就不是这个实例(组件)了, 就找不到data里的数据了
  // 计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算
  methods: {
    toast() {
      // 全局调用toast
      this.$toast("xinxi", 1500);
    },
    crea() {
      console.log("aaaa");
    },
    addItem() {
      this.items.push({ label: this.newItem, isFinished: false });
      this.newItem = "";
    },
    toggole(item) {
      item.isFinished = !item.isFinished;
    },
    dele(index) {
      this.items.splice(index, 1);
    },
    ...mapMutations(["TOGGOLE", "add"]),
    Async() {
      this.$store.dispatch("incrementAsync");
    },
    tabClik(index) {
      this.tabActive = index;
    },
    psh() {
      this.$router.push({ path: "/part2" });
    },
    incre() {
      this.$store.commit("increment", { number11: 10 }); // 带参数和不带参数的提交方式
    }
    // refresh() {
    //   this.$refs.wrapper.refresh();
    // }
  }
};
</script>
<style lang='scss' scoped>
//vue  scoped属性 --- 有作用域的css  这一属性在普通页面是不被支持的，，vue里是经过处理的
@import "../assets/css/part1.scss";
</style>
