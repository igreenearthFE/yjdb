<template>
  <div style="height: 100%;">
    <regist-invit-step v-bind:active="active"></regist-invit-step>
    <div>
      <regist-invit-verifica v-show="active == 0"></regist-invit-verifica>
      <regist-invit-information v-show="active == 1"></regist-invit-information>
      <regist-invit-setting v-show="active == 2"></regist-invit-setting>
      <regist-invit-success v-show="active == 3"></regist-invit-success>
    </div>
    <div class="change">
      <el-button @click="next" v-text="active < 3 ? '下一步' : '返回登录'"></el-button>
      <a @click="returnLogin" v-show="active == 0">返回登录</a>
      <a @click="last" v-show="active == 1 || active == 2">上一步</a>
    </div>
  </div>
</template>
<script>
import RegistInvitStep from './components/RegistInvitStep'
import RegistInvitVerifica from './RegistInvitVerifica'
import RegistInvitInformation from './RegistInvitInformation'
import RegistInvitSetting from './RegistInvitSetting'
import RegistInvitSuccess from './RegistInvitSuccess'
import GFooter from '../../../components/GFooter'
export default {
  data () {
    return {
      active: 0
    }
  },
  components: {
    RegistInvitStep,
    RegistInvitVerifica,
    RegistInvitInformation,
    RegistInvitSetting,
    RegistInvitSuccess,
    GFooter
  },
  methods: {
    last: function () {
      if (--this.active < 0) this.active = 0
    },
    next: function () {
      var active = ++this.active
      if (active > 3) {
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
