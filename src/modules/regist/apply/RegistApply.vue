<template>
  <div style="height: 100%">
    <regist-apply-step v-bind:active="active"></regist-apply-step>
    <div style="height: 70%; overflow: hidden;">
      <regist-apply-information v-show="active == 0"></regist-apply-information>
      <regist-apply-setting v-show="active == 1"></regist-apply-setting>
      <regist-apply-success v-show="active == 2"></regist-apply-success>
    </div>
    <div class="change">
      <el-button @click="next" v-text="active < 2 ? '下一步' : '返回登录'"></el-button>
      <a @click="returnLogin" v-show="active == 0">返回登录</a>
      <a @click="last" v-show="active == 1">上一步</a>
    </div>
  </div>
</template>
<script>
import RegistApplyStep from './components/RegistApplyStep'
import RegistApplyInformation from './RegistApplyInformation'
import RegistApplySetting from './RegistApplySetting'
import RegistApplySuccess from './RegistApplySuccess'
import GFooter from '../../../components/GFooter'
export default {
  data () {
    return {
      active: 0
    }
  },
  components: {
    RegistApplyStep,
    RegistApplyInformation,
    RegistApplySetting,
    RegistApplySuccess,
    GFooter
  },
  methods: {
    last: function () {
      if (--this.active < 0) this.active = 0
    },
    next: function () {
      var active = ++this.active
      if (active > 2) {
        this.active = 0
        this.returnLogin()
      }
    },
    returnLogin: function () {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
.change {
  width: 15rem;
  margin: 0 auto;
  .el-button {
    background-color: #387c7d;
    width: 100%;
    color: #fff;
  }
  a {
    color: #387c7d;
    font-size: 13px;
    text-align: right;
    display: block;
  }
}
</style>
