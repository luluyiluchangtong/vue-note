<template>
  <div>
    <div class="item" v-for="(item,index) of list" :key="index">
      <div class="item-title border-bottom"><span class="item-title-icon"></span>{{item.title}}</div>
      <div v-if="item.children">
        <p11 :list="item.children" class="item-children"></p11>
      </div>
    </div>
    <input :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: "p11", // name 属性值就是全局注册的 组件名；使用一个最终会得到 false 的 v-if 调用组件
  props: {
    value: {
      type: String,
      default: "value"
    },
    list: Array
  },
  model: {
    prop: "value",
    event: "input"
  }
};
</script>