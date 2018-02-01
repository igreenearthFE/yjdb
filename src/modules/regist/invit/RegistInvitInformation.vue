<template>
  <div>
    <el-form size="mini">
      <el-form-item>
        <el-input placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="单位类型：">
        <el-radio-group v-model="radio">
          <el-radio :label="0">公众组织</el-radio>
          <el-radio :label="1">职能机关</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-show="radio == 0">
        <el-form-item>
          <el-input placeholder="请输入工作单位"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="unitPublic" placeholder="请选择工作单位所属区划" style="width: 100%">
            <el-option label="单位一"></el-option>
            <el-option label="单位二"></el-option>
            <el-option label="单位三"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div v-show="radio == 1">
        <el-form-item>
          <el-select v-model="unitFunc" placeholder="请选择工作单位" style="width: 100%">
            <el-option label="单位一"></el-option>
            <el-option label="单位二"></el-option>
            <el-option label="单位三"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <el-form-item>
        <el-input placeholder="请输入联系电话"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入验证码">
          <el-button slot="append">获取验证码</el-button>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      radio: 0,
      unitPublic: '',
      unitFunc: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form {
  width: 18rem;
  margin: 0 auto;
  margin-top: 1rem;
  text-align: center;
}
</style>
