

<script>
// 组件1
var EmptyList = {
  template: "<p>Empty list</p>"
};
// 组件2
var TableList = {
  template: `
         <ul>
             <li><slot></slot></li>
         </ul>
        `
};
//
var OrderedList = {
  template: "<span>span</span>"
};
//
var UnorderedList = {
  template: "<h1>h1</h1>"
};
export default {
  functional: true,
  props: {
    todos: {
      type: Array,
      required: true
    },
    isOrdered: Boolean
  },
  render: function(createElement, context) {
    console.log(context);
    function appropriateListComponent() {
      console.log(context.parents);
      var todos = context.props.todos;
      if (todos.length === 0) return EmptyList;
      if (typeof todos[0] === "object") return TableList;
      if (context.props.isOrdered) return OrderedList;

      return UnorderedList;
    }

    return createElement(
      appropriateListComponent(),
      {
        style: { color: "red" }
      },
      ["sfsafaf"]
    );
  }
};
// 函数式组件 没有响应式数据（无状态）
// 没有 this 上下文（无数据），所有特性的使用通过 context
// 由于函数式组件拥有的这两个特性，我们就可以把它用作高阶组件(High order components)，
// 所谓高阶，就是可以生成其它组件的组件

// props：提供所有 prop 的对象
// children: VNode 子节点的数组
// slots: 返回所有插槽的对象的函数
// data：传递给组件的数据对象，作为 createElement 的第二个参数传入组件
// parent：对父组件的引用
// listeners: (2.3.0+) 一个包含了所有在父组件上注册的事件侦听器的对象。这只是一个指向 data.on 的别名。
// injections: (2.3.0+) 如果使用了 inject 选项，则该对象包含了应当被注入的属性。
// 在添加 functional: true 之后，锚点标题组件的 render 函数之间简单更新增加 context 参数，
// this.$slots.default 更新为 context.children，之后this.level 更新为 context.props.level。

// 因为函数式组件只是一个函数，所以渲染开销也低很多。
// 然而，对持久化实例的缺乏也意味着函数式组件不会出现在 Vue devtools 的组件树里。

// 在作为包装组件时它们也同样非常有用，比如，当你需要做这些时：

// 程序化地在多个组件中选择一个
// 在将 children, props, data 传递给子组件之前操作它们。
</script>