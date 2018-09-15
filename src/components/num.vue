<template>
  <div class=" justify-between">
  <span>{{msg}}</span>
  <span>{{msg1}}</span>
  <span>{{one}} <br/> {{two}}</span>
  <ul>
    <li>{{todo.text}}</li>
  </ul>
  <button @click="$emit('welcome')">welcome</button>
 <input
      :value="value"
      @input="$emit('input', $event.target.value)"
>
<p>{{value}}</p>
<a name="liankie" @click="lianjie($event)" href="http://www.baidu.com">链接</a>
  </div>
</template>

<script>
// $emit(eventName, [...args])
export default {
  // props: ["msg", "one", "two"], 最好详细些，如下所示：
  props: {
    value: {
      type: String,
      default: "value"
    },
    // props 验证 开发组件给他人用时有用。
    todo: {
      type: Object,
      default: function() {
        return { text: "abc" };
      }
    },
    PropA: {
      validator: function(value) {
        // 自定义验证函数
        return ["a", "ba", "v"].indexOf(value) !== -1;
      }
    },
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
  },
  methods: {
    welcome() {
      alert("welcome");
    },
    lianjie(event) {
      const a = event.target.name;
      alert(a);
      if (event) event.preventDefault();
    }
  },
  components: {}
};
</script>