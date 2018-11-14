<template>
  <div>
    <div class='bb pa2'>
      <h3>例子1：</h3>
      <div v-if='hide' key="hide">
        切換元素11
      </div>
      <div v-else key="show">
        切換元素223
      </div>
      <input type="button" value="anniu" @click='TOGGOLE'>
    </div>
    <!--************-->
    <div class='bb pa2'>
      <num v-model="searchText" v-for="(item, index) of items1" :key="index" :todo="item"  msg='静态 props'></num>
     <input v-model="value" /> 
     <input v-bind:value="value"  v-on:input="value= $event.target.value" />
      <p>语法糖{{value}}</p>

      <!-- <mumName msg='静态 props'></mumName> -->
      <!-- 书写顺序： 1.先写import 2.再写 components  3.最后写组件标签 -->
      <!-- import 后面的名称可以自由定义的，一般是默认的文件名称 -->
      <!-- 静态 props-->
      <num :msg1='msg1'></num>
      <!-- 动态 props  prop通过 v-bind 动态赋值-->
      <num v-bind="msg2"></num>
      <!-- 动态 props 绑定对象的方式,-->
      <!-- props 可以是 数组 或 对象，用来接收来自 父组件 的 数据 -->
    </div>
    <!--************-->
    <div class='bb pa2'>
      <router-link to='/login'>登陆</router-link>
      <router-link :to="{ name: 'log', params: { Id: 123 }}">编程式路由1</router-link>
      <!-- path 不能和 params 一起使用，只能是 name -->
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

      <div class="wrapper ba overflow-hidden" ref="wrapper" style=" height:400px; width:400px;">dfsaf
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
     <button @click="actionAPI">actionAPI</button>
     <button @click="onLoad">11按钮</button>
     <button @click="toast">toast按钮</button>
     <div @click="Box()">{{this.$appName}} 这是在 main.js Vue原型上定义的属性，</div>  
     <div ref="abc" @click="sayHi()">abc</div>
      <button  @click="crea"> anniu12</button>
  </div>
</template>
<script>
import num from "./num";
import "../assets/css/part1.scss";
import BScroll from "better-scroll";
// import data from "../api/data";
import { mapState, mapMutations, mapActions } from "vuex";
import { apiAddress, apiAddress1 } from "../api/api.js"; // 导入我们的api接口
import { addDataToStu } from "../api/jquery_api.js";
export default {
  name: "part1", // 只能出现在 组件选项上，name 主要是便于调试，所以请给每个组件提供一个 name
  data() {
    // data的属性转换为  getter  setter 而且只能是数据，不推荐有状态行为的对象，
    // 这里不能用箭头函数，因为=>指的是父级上下文，this就不是这个实例(组件)了，就找不到data里的数据了
    return {
      value: "",
      searchText: "haorooms",
      items: [],
      items1: [
        { text: "sdf" },
        { text: "sdf" },
        { text: "sdf" },
        { text: "sdf" }
      ],
      newItem: "",
      msg: "qrwtqw",
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
    // 注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted
    this.$set(() => {
      // this.$nextTick 是一个异步函数，修改数据后，确保 整个DOM渲染完毕，再执行的步骤。 用setTimeout(fn,20)也可以
      // 即 vue 中的 数据渲染 是异步的。。需要等 DOM 更新完成后才开始渲染数据，直接操作 DOM 则需要一个异步函数

      this.scroll = new BScroll(this.$refs.wrapper, {
        startY: 20,
        scrollX: true
      });
    });
    // this.$nextTick().then(); 作为一个 Promise使用
    /**
     * 实例方法：
     * Vue.set(target {object | Array}, key(String | number),value)  设置对象的 “属性”
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
    // 所有的生命周期钩子自动绑定 this 上下文 到实例中
    // 实例创建完后就立即调用的方法''
    this.$nextTick(function() {
      // this.$refs.abc.style.color = "red";
    });
    this.onLoad();
    this.crea();
    this.scroll;
    this.$Box(); // 这个是全局的方法， 在 main.js 里定义
  },
  components: {
    num
    //  mumName: num   另一种带有命名的书写方式
  },
  computed: {
    number() {
      return this.$store.state.module.number;
    },
    // 如果使用了  箭头函数，则
    // number: vm=>vm.module.number
    ...mapState(["hide", "num1"])
  },
  // 这里不能用箭头函数，因为=>指的是父级上下文，this就不是这个实例(组件)了, 就找不到data里的数据了
  // 计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算
  methods: {
    sayHi: function() {
      alert("Hi!");
      this.msg = "11111";
      console.log(this.msg);
      this.$nextTick(function() {
        this.$refs.abc.innerHTML = this.msg;
      });
    },
    // this.$nextTick 一是用在 mounted updated 上等挂载的组件及其所有的子组件都渲染完毕  二是用在 更新数据 并操作 DOM时
    toast() {
      // 全局调用toast
      this.$toast("xinxi", 1500);
    },
    crea() {
      console.log("aaaa");
      console.log(this.$route.matched);
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
    ...mapActions([
      "actionAPI" // 映射 this.increment() 为 this.$store.dispatch('increment')
    ]),
    // actionAPI() {
    //   this.$store.dispatch("actionAPI");
    // },
    Async() {
      // this.$store.dispatch("incrementAsync");  // 带参数 和不带参数的提交方式, action里异步提交的时候带参数，这里触发就不带参数，反之亦然！
      this.$store.dispatch("incrementAsync", { number11: 11 });
    },
    tabClik(index) {
      this.tabActive = index;
    },
    psh() {
      this.$router.push({ path: "/part2" });
    },
    incre() {
      this.$store.commit("increment", { number11: 10 }); // 带参数和不带参数的提交方式
    },
    // 获取数据
    onLoad() {
      // 调用api接口，并且提供了两个参数
      apiAddress({
        type: 0,
        sort: 11
      }).then(res => {
        // 获取数据成功后的其他操作
        console.log(res);
      });
      apiAddress1({
        type: 0,
        name: "nk" // 根据传入的字符串获取响应式数据
      }).then(res => {
        // 获取数据成功后的其他操作
        console.log(res);
      });
      addDataToStu({ name: "aa", sex: "bb" }).then(res => {
        console.log("响应式数据", res);
      });
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
