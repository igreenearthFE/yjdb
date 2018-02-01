<template>
  <el-form>
    <el-form-item>
      <el-input placeholder="请输入在册电话号码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input placeholder="请输入验证码">
        <el-button slot="append">获取验证码</el-button>
      </el-input>
    </el-form-item>
  </el-form>
</template>
<script>
</script>
<style lang="scss" scoped>
.el-form {
  width: 15rem;
  margin: 0 auto;
  text-align: center;
  margin-top: 5rem;
}
</style>
