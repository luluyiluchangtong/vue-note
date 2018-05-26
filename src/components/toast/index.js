import ToastComponent from "./toast";

const Toast = {};

/**
 * @method 注册插件
 * @param {Function} Vue构造器
 */
Toast.install = Vue => {
  const ToastConstructor = Vue.extend(ToastComponent);
  const instance = new ToastConstructor(); // 创建toast子实例
  instance.$mount(document.createElement("div")); // 挂载实例到我们创建的DOM上
  document.body.appendChild(instance.$el);

  /**
   * @method 提示框
   * @param {String} msg 内容
   * @param {Number} duration 显示时间, 默认2000
   */
  // 添加实例方法，以供全局调用
  Vue.prototype.$toast = (msg, duration = 2000) => {
    instance.message = msg;
    instance.show = true; // 调用$toast()则显示提示
    setTimeout(() => {
      instance.show = false; // duration秒后toast隐藏
    }, duration);
  };
};
//  这里使用的是 Vue.prototype.$myMethod=function(){}  方式
/*    
plugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {...}
  // 2. 添加全局资源
  Vue.directive('my-directive', {...})
  // 3. 通过全局mixin方法添加一些组件选项
  Vue.mixin({...})
  // 4. 添加实例方法
  Vue.prototype.$myMethod = function () {...}
}
*/
export default Toast;
