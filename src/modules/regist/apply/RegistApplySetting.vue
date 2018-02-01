<template>
  <el-form>
    <el-form-item>
      <el-input placeholder="请输入账户名"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input placeholder="请再输入密码"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data: function () {
    return {
      active: 1
    }
  },
  methods: {
    next: function () {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form {
  width: 15rem;
  margin: 3rem auto;
  text-align: center;
}
</style>
