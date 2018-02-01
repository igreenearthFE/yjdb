<template>
  <div class="login-bg">
    <div class="middle">
      <div class="carousel">
        <el-carousel indicator-position="outside" arrow="never" style="height: 100%;">
          <el-carousel-item>
            <div class="image"><img src="static/c1.png" /></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="image"><img src="static/c2.png" /></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="image"><img src="static/c3.png" /></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="image"><img src="static/c4.png" /></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="image"><img src="static/c5.png" /></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="image"><img src="static/c6.png" /></div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="login-form">
        <h4>用户登录</h4>
        <el-form>
          <el-form-item>
            <el-input v-model="accountName" placeholder="请输入账户" auto-complete="off" prefix-icon="el-icon-search"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="password" type="password" placeholder="请输入密码" auto-complete="off" prefix-icon="el-icon-goods" suffix-icon="el-icon-date"></el-input>
          </el-form-item>
          <el-form-item class="login">
            <span class="reg">
              <a @click="regist()">注册账户</a>
            </span>
            <span class="forget">
              <a @click="reset()">忘记密码</a>
            </span>
            <el-button @click="login()">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    regist: function () {
      this.$router.push('/regist')
    },
    reset: function () {
      this.$router.push('/reset')
    }
  }
}
</script>
<style lang="scss" scoped>
.login-bg {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #387c7d;
  .middle {
    width: 70%;
    height: 70%;
    margin: 0 auto;
    position: relative;
    top: 20%;
    overflow: hidden;

    .carousel {
      width: 35rem;
      height: 100%;
      float: left;
      .image {
        width: 600px;
        height: 100%;
        margin: 0 auto;
        img {
          width: 480px;
          height: 100%;
        }
      }
    }

    .login-form {
      width: 30rem;
      float: right;
      text-align: center;
      opacity: 0.85;
      .el-form {
        height: auto;
        margin: 0 auto;
        padding: 0 100px;
        border-left: 1px solid;
        .el-input__inner {
          background-color: rgba(0, 0, 0, 0);
        }
        .login {
          .reg {
            float: left;
          }
          .forget {
            float: right;
          }
          a {
            color: #fff;
            text-decoration: none;
            cursor: pointer;
          }
          a:hover {
            text-decoration: underline;
          }
          .el-button {
            width: 100%;
            color: white;
            background-color: #387c7d;
          }
        }
      }
    }
  }
}
</style>
