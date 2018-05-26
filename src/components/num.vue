<template>
  <div class=" justify-between">
  <span>{{msg}}</span>
  <span>{{msg1}}</span>
  <span>{{one}} <br/> {{two}}</span>
  </div>
</template>

<script>
export default {
  // props: ["msg", "one", "two"], 最好详细些，如下所示：
  props: {
    // props 验证 开发组件给他人用时有用。
    msg: {
      type: String,
      default: ""
    },
    msg1: {
      type: String,
      default: ""
    },

    one: {
      type: String,
      default: ""
    },
    two: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>