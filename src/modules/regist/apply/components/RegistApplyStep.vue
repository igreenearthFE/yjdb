<template>
  <el-steps :active="active" align-center>
    <el-step title="信息填写"></el-step>
    <el-step title="账户设置"></el-step>
    <el-step title="申请成功"></el-step>
  </el-steps>
</template>
<script>
export default {
  props: ['active']
}
</script>
