<template>
<div style="height: 100%;">
  <div class="regist">
    <div style="float: left; cursor: pointer;" @click="apply">
      <span class="icon icon-person"></span>
      <p>申请注册</p>
    </div>
    <div style="float: right; cursor: pointer;" @click="invit">
      <span class="icon icon-building"></span>
      <p>邀请注册</p>
    </div>
  </div>
  <div class="change">
    <el-button @click="returnLogin">返回登录</el-button>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      show: 0
    }
  },
  methods: {
    apply: function () {
      this.$emit('registData', 1)
    },
    invit: function () {
      this.$emit('registData', 2)
    },
    returnLogin: function () {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
.regist {
  width: 20rem;
  height: 60%;
  overflow: hidden;
  margin-top: 5rem;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  div {
    width: 8rem;
    margin-top: 5rem;
    border: 1px solid #387c7d;
  }
  span {
    height: 7rem;
    line-height: 7rem;
    font-size: 50px;
    color: #387c7d;
    border: 1px solid;
    display: block;
  }
  p {
    background: #387c7d;
    height: 2rem;
    font-size: 13px;
    line-height: 2rem;
    margin: 0;
  }
}
.change {
  width: 15rem;
  margin: 0 auto;
  margin-top: 5rem;
  .el-button {
    background-color: #387c7d;
    width: 100%;
    color: #fff;
  }
}
</style>
