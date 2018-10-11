<template>
  <div>
    <h3>part3</h3>
<input :value='something' @input="something=$event.target.value">
  <p>{{something}}</p>
 
    <div class=" bb pa2">
    <div :class="{active: isActive}">:class对象</div>
    <div :class="isActive1">:class对象</div>
    <div :class="[cc,dd]">:class数组</div>
    <div :class="classMap[0]">
      classMap
    </div>
    </div>

    <div class=" bb pa2">
      <h3>筛选数字的方式</h3>
    <span>方式一：写在 computed 里</span>
    <div class="dib pa2" v-for='n in even' :key='n'>{{n}}</div>
    <span>方式二：写在 methods 里</span>
    <div class="dib pa2" v-for='n in evenNumbers()' :key='n'>{{n}}</div>
    </div>
     
     <div class=" bb pa2">
     <div ref='div1' @click='refDOM'>ref直接操作dom</div>
      <div @click="ttal">{{total}} this.$nextTick</div>
     </div>

      <div class=" fatherCss bb pa2">
        <!-- 当使用 inline-template 特性时， 则组件标签内的内容作为模板，而不是 slot分发内容 -->
        <!-- 另一个是 通过在 script 标签上定义  type="text/x-template" id="hello-world-template", 然后通过这个 id 来引用模板  -->
        <!-- vue 定义 模板的几种方式：字符串模板， x-template,  inline-template, render函数， JSX， 单文件组件 -->
    <part3Child    data="abc" 
    v-model="value" 
    v-on:fc="fc2" 
    v-for="item in items" 
    :key="item.id" 
    :todo.sync="items.item"   
    :syncP.sync="syncProps">
    </part3Child>
    <!--第一次使用：用flex展示数据-->
    <part3Child>
      <template slot-scope="user">
        <div class="tmpl bg-green">
          <span v-for="item in user.shuju" :key="item">{{item}}</span>
        </div>
      </template>

    </part3Child>

    <!--第二次使用：用列表展示数据-->
    <part3Child>
      <template slot-scope="user">  
        <ul class="bg-red"> 
          <li v-for="item in user.shuju" :key="item">{{item}}</li>
        </ul>
      </template>
      
  <!-- slot-scope 可以用在插槽内的任何元素或组件上 -->
    </part3Child>

    <!--第三次使用：直接显示数据-->
    <part3Child>
      <template  slot-scope="user">
        <div class="bg-yellow">
       {{user.shuju}}
        </div>
      </template>

    </part3Child>

    <!--第四次使用：不使用其提供的数据, 作用域插槽退变成匿名插槽-->
    <part3Child>
      <div class="bg-blue">
      我就是模板
      </div>
    </part3Child>
    <part3Child>
       <div slot-scope="usedata">
         {{usedata.item.name}}
       </div>
    </part3Child>
    <!-- 
  1.非 props 特性，data="abc" 即组件可以接受任意特性。和静态 props特性一样，特性值都是加载在组件的根元素上 
  2.组件上的 class style 特性会和模板内的 class style合并，而 type 特性则会覆盖！！
  3.如果 不希望 模板内的根元素继承 组件传来的 特性: 在组件的选项中 定义 inheritAttrs:true; 配合组件模板中想要接受传递过来的元素上加上特性 $attrs，即自主决定特性被赋予哪个元素上
  4. sync修饰符，子组件修改父组件的 数据 
     这里子组件的 todo 通过 sync 修改父组件里的 items.item，然后在子组件里修改
         子组件的 syncP 通过 sync 修改父组件的  syncProps， 然后在子组件里修改
  5. :todo.sync="{item:34}" 里面放表达式是不允许的！！
     -->
      </div>
      <div class=" bb pa2">
     <ul>
       <li v-for=" item in goods.base" :key="item">{{item}}</li>
     </ul>
     <span>{{goods.base}}</span>
      </div>
<transition>
  <button v-bind:key="docState">
    {{ buttonMessage }}
  </button>
</transition>
 <p>{{Mnumber}}1213</p>
 <p>{{ getnum }}</p>
 <p>{{msg | capitalize}}ssss</p>
 <button @click="plusNum()">按钮Module</button>
 <button @click="syncM()">asyM</button>
    <component :is="currentView"></component>
    <p11  :list="list"/>
    <div v-text="value"></div>
    <div v-pre>{{value}}</div>  
    <!-- v-pre 跳过编译，直接输出原始值 -->
    <!-- v-cloak 这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。 -->
  </div>
</template>
<script>
// import data from "../api/api";
import part3Child from "./part3Child.vue";
import p11 from "./p11.vue";
// 一般 默认是文件名称，，但这里 import 进来是可以 改命名的
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: {
    part3Child,
    p11
  },
  // beforeRouteEnter(to, from, next) {
  //   alert("fsaf");
  // },     组件里的导航守卫
  data() {
    return {
      value: "123",
      list: [
        {
          title: "成人票",
          part3Children: [
            {
              title: "成人三馆联票"
            },
            {
              title: "成人五馆联票"
            }
          ]
        },
        {
          title: "学生票"
        },
        {
          title: "儿童票"
        },
        {
          title: "特惠票"
        }
      ],
      syncProps: 1111,
      msg: "sfafsafsafsaffafasas",
      docState: "edited",
      currentView: p11,
      something: "sffsfafsa",
      items: [
        { id: "1", text: "11qq" },
        { id: "2", text: "22" },
        { id: "3", text: "33" },
        { id: "4", text: "44" }
      ],
      goods: {},
      classMap: ["ab", "cd"],
      numbers: [1, 2, 3, 4, 5, 6],
      numbers1: [7, 8, 9, 10, 11, 12],
      total: 0,
      isActive: true,
      cc: "c",
      dd: "d",
      isActive1: {
        a: true,
        b: true
      },
      cdNum: {
        num1: 11,
        num2: 22
      }
    };
  },
  beforeRouteLeave(to, from, next) {
    console.log(to);
    console.log(from);
    console.log(this); // VueComponent
    next({});
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },

  computed: {
    even() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    },
    ...mapState({
      Mnumber: state => state.module.number
    }),
    ...mapGetters(["getnum"]),
    buttonMessage: function() {
      switch (this.docState) {
        case "saved":
          return "Edit";
        case "edited":
          return "Save";
        case "editing":
          return "Cancel";
      }
    }
  },
  created() {},
  methods: {
    aa() {
      console.log(this.$part3Children);
    },
    ...mapMutations(["plusNum"]),
    ...mapActions(["syncM"]),
    fc2() {
      this.aa();
      alert("edf");
    },
    box(event) {
      alert(event.target);
    },
    ctrlc() {
      alert("s");
    },
    evenNumbers() {
      return this.numbers1.filter(function(number) {
        return number % 2 === 0;
      });
    },
    refDOM() {
      return (this.$refs.div1.style.color = "yellow");
    },
    ttal() {
      return (this.total += 1);
    }
  }
};
</script>
<style scoped>
.fatherCss >>> .part3ChildCss {
  border: solid 10px;
}
.active {
  color: red;
}

.a {
  font-size: 20px;
}

.b {
  font-weight: bold;
}

.c {
  color: #fff;
}

.d {
  background: green;
}
.ab {
  color: green;
  font-weight: bold;
  font-size: 30px;
}
.cd {
  color: blue;
}
</style>
