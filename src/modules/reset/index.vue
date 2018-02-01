<template>
  <el-container>
    <el-header style="height: 6rem; background-color: #316D6D; color: #fff;">
      <div style="margin: 0; height:6rem; line-height: 6rem; margin-left: 10rem;">
        <img src="static/log.png" width="64px" style="margin-top: 1rem; float:left;" />
        <h3 style="display: inline; margin-left: 1rem;">陕西省农村涝池生态修复整治工程以奖代补管理系统</h3>
      </div>
    </el-header>
    <el-main style="padding: 0;">
      <div style="height: 80%; position: relative; top: 10%;">
        <reset-step v-bind:active="active"></reset-step>
        <div style="height: 70%; overflow: hidden;">
          <reset-key-verifica v-show="active == 0"></reset-key-verifica>
          <reset-key-reset v-show="active == 1"></reset-key-reset>
          <reset-key-success v-show="active == 2"></reset-key-success>
        </div>
        <div class="change">
          <el-button @click="next" v-text="active < 2 ? '下一步' : '返回登录'"></el-button>
          <a @click="returnLogin" v-show="active == 0">返回登录</a>
          <a @click="last" v-show="active == 1">上一步</a>
        </div>
      </div>
    </el-main>
    <el-footer style="height: 6rem; background-color: #367473; color: #fff; padding: 0;">
      <g-footer></g-footer>
  </el-footer>
  </el-container>
</template>
<script>
import GFooter from '../../components/GFooter'
import ResetStep from './components/ResetStep'
import ResetKeyVerifica from './ResetKeyVerifica'
import ResetKeyReset from './ResetKeyReset'
import ResetKeySuccess from './ResetKeySuccess'
export default {
  data () {
    return {
      active: 0
    }
  },
  components: {
    GFooter,
    ResetStep,
    ResetKeyVerifica,
    ResetKeyReset,
    ResetKeySuccess
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
.el-main .change {
  width: 15rem;
  margin: 0 auto;
  .el-button {
    background-color: #387c7d;
    width: 100%;
    color: #fff;
  }
}
a {
  color: #387c7d;
  font-size: 13px;
  text-align: right;
  display: block;
}
</style>
