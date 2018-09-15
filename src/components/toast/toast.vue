<template>
  <transition name="fade">
    <div class="toast" v-show="show"></div>
  </transition>
</template>

<script>
// 将 复用度 很高的组件封装成 插件，
// 通过实例方法封装插件。。
export default {
  data() {
    return {
      show: false,
      message: "tstsetse"
    };
  }
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 40%;
  left: 50%;
  margin-left: -15vw;
  padding: 2vw;
  width: 30vw;
  font-size: 4vw;
  color: #fff;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5vw;
  z-index: 999;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease-out;
}
.fade-enter {
  opacity: 0;
  transform: scale(1.2);
}
.fade-leave-active {
  opacity: 0;
  transform: scale(0.8);
}
</style>
