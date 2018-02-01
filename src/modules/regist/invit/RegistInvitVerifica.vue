<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input placeholder="请输入邀请码"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      active: 0
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
  margin: 0 auto;
  margin: 5rem auto;
  text-align: center;
}
</style>
