<template>
  <el-form size="mini">
    <div style="width: 100%; overflow: hidden;">
      <div style="float: left; width: 45%; height: 14rem;">
        <p style="font-size: 13px">证明文件：</p>
        <p style="font-size: 12px; color: rgba(0, 0, 0, 0.6); text-indent: 2rem;">请上传相关证明文件，方便管理员核实审批</p>
        <el-form-item style="height: 9rem; background-color: #f2fcf4; border: 1px solid #ccc; text-align: center;">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts">
            <div class="el-upload__text" style="line-height: 9rem; font-size: 12px; color: rgba(0, 0, 0, 0.6)">
              <i class="el-icon-plus"></i>请上传证明文件（如单位介绍信）</div>
          </el-upload>
        </el-form-item>
      </div>
      <div style="float: right; width: 45%;">
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
      </div>
    </div>
  </el-form>
</template>
<script>
export default {
  data () {
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
  width: 40rem;
  margin: 0 auto;
  margin-top: 2rem;
}
</style>
