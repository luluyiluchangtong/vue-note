<template>
  <div>
      <div class='m2 h2 bg-red' @click='back'>返回</div>
      <input type="tel" placeholder="请输入电话" v-model="tel">
      <input type="password" placeholder="请输入密码" v-model="pas">
      <input type="button" value="提交" @click='check'>
  </div>
</template>
<script>
import {mapState} from 'vuex'
    export default{
        data () {
            return {
                tel: '',
                pas: ''
            }
        },
        computed: {
            ...mapState({
                gettel: state => state.gettel,
                getpas: state => state.getpas
            })
        },
        methods: {
            back () {
                this.$router.go('-1')
            },
            check () {
                if(this.tel==='' || this.pas===''){
                    alert('输入框不能为空！')
                }else if(this.tel !== this.gettel || this.pas !== this.getpas){
                    alert('输入不正确！')
                }else{
                    this.$router.replace('/part1')
                }
            }
        }
    }
</script>
