<template>
  <el-steps :active="active" align-center>
    <el-step title="邀请验证"></el-step>
    <el-step title="身份验证"></el-step>
    <el-step title="账户设置"></el-step>
    <el-step title="申请成功"></el-step>
  </el-steps>
</template>
<script>
export default {
  props: ['active']
}
</script>
