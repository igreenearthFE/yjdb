<template>
  <el-steps :active="active" align-center>
    <el-step title="身份验证"></el-step>
    <el-step title="密码重置"></el-step>
    <el-step title="重置成功"></el-step>
  </el-steps>
</template>
<script>
export default {
  props: ['active']
}
</script>
