<template>
  <div class="bb">
      <ul class="part3ChildCss">
          <li>{{todo.text}}1221333333</li>
      </ul>
    <div v-bind:class="abcd">sssssssssssssssssssssssssssss</div>
      <p  ref="abc">dsad dsad{{num}}</p>
      <p>{{syncP}}</p>
      <button @click='fc'>按钮11</button>
      <!-- @click="$emit('fc')"   这样直接触发 父组件上的-->
      <button @click='fc1'>按钮1221</button>
      <button @click='up'>syncP</button>

    <input type="checkbox" :checked="checked" @change="$emit('change',$event.target.checked)">
    <input :value="value" @input="$emit('input', $event.target.value)">
    <!--  value 和 input 和 model建立联系 -->
    <!-- prop 下的 value 接受 绑定在 data里的 value数据，监听input 事件所改变的 vlue 值来同步 data里的 value值  -->
       <slot name="footer"></slot>
       <slot name="AV" :shuju="shujuku"></slot>

       <ul>
         <li  v-for="(item,index) in items" :key="index">
         <slot name="ss" :item="item">
          <!-- 回退的内容 -->
          {{ item.text }}
         </slot>
         </li>
       </ul>
       
       <!-- 第一个 shuju 相当于 slot 组件接受的 props 第二个 shuju 是需要传递给父组件的数据 -->
       <!-- slot-scope 父组件 接受 子组件里的数据 -->
  </div>
</template>
<script>
export default {
  props: {
    abc: {
      type: String,
      default: ""
    },
    // props 可以是简单的数组 或 有配置的对象
    value: {
      type: String,
      default: "value"
    },
    checked: {
      type: Boolean,
      default: true
    },
    todo: {
      type: Object,
      default: function() {
        return { message: "hello" };
        // 当type的类型为Array或者Object的时候default必须是一个函数
      }
      // 或者 自定义验证函数 validator: function(){}
    },
    syncP: {
      type: Number,
      default: 222
    }
  },

  // model: {
  //   prop: "checked", // 父组件的值传到这里
  //   event: "change"
  // },
  model: {
    // model 和 组件上的 v-model 建立联系
    prop: "value", // 父组件的值传到这里
    event: "input"
  },
  // 默认情况下，一个 "组件上" 的 v-model 会把 value 用作 prop 且把 input 用作 event
  data() {
    return {
      counter: this.todo,
      num: 23,
      abcd: {
        a: "ss"
      },
      shujuku: ["zhangsan", "lisi", "wanwu", "zhaoliu", "tianqi", "xiaoba"],
      items: [
        { text: 12, name: "li" },
        { text: 122, name: "lt" },
        { text: 123, name: "le" }
      ]
    };
  },

  created() {
    console.log(this.$root);
  },
  methods: {
    fc() {
      debugger;
      this.$emit("fc");
    },
    fc1() {
      // alert("abc");
      this.$emit("update:todo", { id: "2", text: "2d2" });
      // 组件通过  :todo.sync="item"  修饰符 sync 告诉 todo 有机会修改 父组件传过来的 item值
    },
    up() {
      this.$emit("update:syncP", 34);
    }
  }
};
</script>
<style lang="scss">
div {
  color:red ul {
    color: yeloow;
  }
}
</style>
