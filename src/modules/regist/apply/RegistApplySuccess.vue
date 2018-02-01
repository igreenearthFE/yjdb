<template>
<div style="text-align: center; height: 80%; position: relative; top: 10%;">
<div class="success">
<span class="el-icon-success"></span>
<h5>申请成功！</h5>
<p>你的申请已提交！待直属审核单位审批后，将以短信方式告知您！</p>
</div>
</div>
</template>
<script>
export default {
  data: function () {
    return {
      active: 2
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
.success {
  margin: 5rem auto;
  span {
    color: #67c23a;
    font-size: 40px;
  }
  h5 {
    color: rgb(56, 56, 56);
    margin-bottom: 0;
  }
  p {
    color: rgb(85, 85, 85);
    font-size: 12px;
  }
}
</style>
