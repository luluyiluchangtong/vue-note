<template>
  <div>
    <h3>part2</h3>
     <div class=" bb pa2">
    <input type="text" v-model="newItem">
    <input @click='addItem' type="button" value="add">
    <ul>
      <li v-for='(item, index) in items' :key='index'>
       <span :class='item.isFinished ? "del" : ""'>{{item.label}}</span>
       <span @click="toggle(item)">{{!item.isFinished ? "todo":"done"}}</span>
       <span @click='dele'>delete</span>
        </li>
    </ul>
    <div @click='deleAll' v-show='hasData'>deleAll</div>
     </div>
    <div class="bb pa2">
      <div v-if="isShowing">
    混合选项：即将所有可复用的 vue 组件中的功能通过 混合对象组合在一起
      </div>
     <input @click="toggleShow" type="button" value="Mixins按鈕">
   </div>

  </div>
</template>
<script>
import { toggle } from "../components/mixins/toggle";
export default {
  mixins: [toggle],
  data() {
    return {
      items: [],
      newItem: "",
      hasData: false
    };
  },
  computed: {},
  methods: {
    addItem() {
      if (this.newItem.trim() == "") {
        return;
      }
      if (!this.items) {
        this.items = [];
      }
      this.items.push({ label: this.newItem, isFinished: false });
      this.newItem = "";
      this.hasData = true;
    },

    dele(index) {
      this.items.splice(index, 1);
      this.hasData = this.items && this.items.length ? true : false;
    },

    toggle(item) {
      item.isFinished = !item.isFinished;
    },

    deleAll() {
      this.items = null;
      this.hasData = false;
    }
  }
};
</script>
<style>
.del {
  text-decoration: line-through;
}
</style>
