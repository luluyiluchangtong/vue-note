<template>
  <div class="bb">
      <ul>
          <li>{{todo.text}}</li>
      </ul>
      <button @click='fc'>按钮</button>
 
  </div>
</template>
<script>
export default {
  props: {
    // props 可以是简单的数组 或 有配置的对象
    todo: {
      type: Object,
      default: ""
    }
  },
  data() {
    return {
      counter: this.todo
    };
  },
  methods: {
    fc() {
      alert("abc");
      this.$emit("update:todo", { id: "2", text: "2sss2" });
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
