<template>
  <el-container class="bg">
    <!-- 登录框 -->

    <el-card class="login">
      <el-form :model="user" :rules="rules" ref="elform">
        <el-form-item label="Username" prop="username">
          <el-input v-model="user.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="user.password" placeholder="密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('elform')">登录</el-button>
          <el-button @click="resetForm('elform')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-container>
</template>

<script>

export default {
  name: "login",
  data() {
    return {
      user: {
        username: "admin",
        password: "123"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入用户名", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
        let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 进行登录校验，校验成功则跳转到主页面， 记录登录成功标识
          
          that.$ajax.post('/login', {username:that.user.username, password:that.user.password})
            .then(function(resp) {
              if (resp.data.status) {
                // 成功
                that.$message.success('登录成功');
                // 记录成功
                that.$store.commit('loginSucessful');
                // 路由到主页
                that.$router.push('home');
              } else {
                that.$message.error(`${resp.data.reason}`);
              }
            })
            .catch(function(err) {
                that.$message.warning('内部错误'+err)
            });
        } else {
          // 未满足前端校验规则
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.bg {
  height: 100%;
  width: 100%;
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
  justify-content: center;
  align-items: center;
}

.login {
  width: 30%;
  height: 300px;
}
</style>