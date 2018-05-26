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

      <div class=" bb pa2">

    <part3Child  inline-template
    v-on:fc1="fc2" 
    v-for="item in items" 
    :key="item.id" 
    :todo.sync="item">
          <template>
        <div>22222222222</div>
      </template>
    </part3Child>
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
 <p>{{Mnumber}}</p>
 <p>{{ getnum }}</p>
 <p>{{msg | capitalize}}ssss</p>
 <button @click="plusNum()">按钮Module</button>
 <button @click="syncM()">asyM</button>
    <component :is="currentView"></component>
  </div>
</template>
<script>
// import data from "../api/api";
import part3Child from "./part3-child.vue";
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
      msg: "sfafsafsafsaffafasas",
      docState: "edited",
      currentView: p11,
      something: "sffsfafsa",
      items: [
        { id: "1", text: "11" },
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
  created() {
    this._getData();
    // 执行函数 获取数据
  },
  methods: {
    ...mapMutations(["plusNum"]),
    ...mapActions(["syncM"]),
    fc2() {
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
      this.$nextTick(() => {
        return (this.total += 1);
      });
    },
    _getData() {
      this.axios
        .get(
          "https://www.easy-mock.com/mock/5a1fc1c6583969285ab17256/llylct/num1"
        )
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.goods = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
    // _aa() {
    //   this.axios({
    //     method: "get",
    //     url: "https://api.github.com/repos/vmg/redcarpet/issues?state=closed",
    //     responseType: "stream"
    //   }).then(function(response) {
    //     // response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
    //     console.log(response)
    //   });
    // }
  }
};
</script>
<style scoped>
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
