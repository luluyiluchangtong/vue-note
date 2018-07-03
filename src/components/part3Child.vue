<template>
  <div class="bb">
      <ul>
          <li>{{todo.text}}</li>
      </ul>

      <p  ref="abc">dsad dsad{{num}}</p>
      <p>{{syncP}}</p>
      <button @click='fc'>按钮11</button>
      <button @click='up'>syncP</button>
   
       <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    // props 可以是简单的数组 或 有配置的对象
    todo: {
      type: Object,
      default: ""
    },
    syncP: {
      type: Number,
      default: 222
    }
  },
  data() {
    return {
      counter: this.todo,
      num: 23
    };
  },
  created() {
    console.log(this.$root);
  },
  methods: {
    fc() {
      // alert("abc");
      this.$emit("update:todo", { id: "2", text: "2d2" });
      this.$emit("fc");
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
