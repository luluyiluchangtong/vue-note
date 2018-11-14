export const toggle = {
    data() {
        return {
            isShowing: true
        }
    },
    methods: {
        $_toggleShow() {     // 在插件、混入等扩展中始终为自定义的私有属性使用 $_ 前缀
            this.isShowing = !this.isShowing
        }
    }
}
// 数据对象：     以组件数据优先
// 同名钩子函数： 将混合为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用
// 值为对象的选项：例如 methods, components 和 directives，将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对