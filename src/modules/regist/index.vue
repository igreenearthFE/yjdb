<template>
  <el-container>
    <el-header style="height: 6rem; background-color: #316D6D; color: #fff;">
      <div style="margin: 0; height:6rem; line-height: 6rem; margin-left: 10rem;">
        <img src="static/log.png" width="64px" style="margin-top: 1rem; float:left;" />
        <h3 style="display: inline; margin-left: 1rem;">陕西省农村涝池生态修复整治工程以奖代补管理系统</h3>
      </div>
    </el-header>
    <el-main style="padding: 0;">
      <div style="width: 50%; margin: 0 auto; height: 80%; position: relative; top: 10%;">
        <regist-account v-show="showData == 0" v-on:registData="show"></regist-account>
        <regist-apply v-show="showData == 1"></regist-apply>
        <regist-invit v-show="showData == 2"></regist-invit>
      </div>
    </el-main>
    <el-footer style="height: 6rem; background-color: #367473; color: #fff; padding: 0;">
      <g-footer></g-footer>
    </el-footer>
  </el-container>
</template>
<script>
import RegistAccount from './RegistAccount'
import RegistApply from './apply/RegistApply'
import RegistInvit from './invit/RegistInvit'
import GFooter from '../../components/GFooter'
export default {
  data: function () {
    return {
      showData: 0
    }
  },
  components: {
    RegistAccount,
    RegistApply,
    RegistInvit,
    GFooter
  },
  methods: {
    show: function (msg) {
      this.showData = msg
    },
    returnLogin: function () {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
