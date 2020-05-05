<template>
  <div class="login-container">
    <div class="login">
      <Form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
        <FormItem prop="tel">
          <Tooltip content="首次登录将自动注册为平台用户" placement="top">
            <Input class="input" type="text" v-model="loginForm.tel" placeholder="Phone" />
          </Tooltip>
        </FormItem>
        <FormItem prop="code">
          <Input type="text" v-model="loginForm.code" placeholder="Code" />
        </FormItem>
        <FormItem class="btn-item">
          <Button id="getCode" type="primary" @click="handleGetCode">
            获取验证码
          </Button>
          <Button type="primary" @click="handleLogin">
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
// import md5 from 'md5'
import { login, getCode } from '@/api/auth'

export default {
  name: 'Login',
  data () {
    return {
      // 登录表单
      loginForm: {
        tel: '',
        code: ''
      },
      // 登录表单格式校验规则
      loginFormRules: {
        tel: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 4, max: 4, message: '请输入正确的验证码', trigger: 'blur' }
        ]
      },
      // 获取验证码间隔时间
      waitTime: 60
    }
  },
  methods: {
    // 登录
    handleLogin () {
      // 登录前校验
      this.$refs.loginFormRef.validate(async status => {
        if (!status) return this.$Message.error('格式错误！')
        // 发起登录请求
        // 深拷贝实现解除双向绑定
        // const loginForm = JSON.parse(JSON.stringify(this.LoginForm))
        // 加密
        // loginForm.password = md5(loginForm.password)
        const { data: res } = await login(this.loginForm).then(() => {
          if (res.code !== 200) return this.$Message.error(res.msg)
          window.sessionStorage.setItem('token', res.data.token)
          this.$Message.success(res.msg)
          this.$router.push('/home')
        }).catch((err) => {
          if (err) {
            console.log(err.stack)
          }
          return this.$Message.error('服务器异常，请联系管理员!')
        })
      })
    },
    // 获取验证码
    async handleGetCode () {
      const codeBtn = document.getElementById('getCode')
      const { data: res } = await getCode(this.loginForm.tel).then(() => {
        if (res.code === 200) {
          this.$Message.success(res.msg)
        } else {
          this.$Message.error(res.msg)
          return
        }
        if (this.waitTime === 0) {
          codeBtn.removeAttribute('disabled')
          codeBtn.innerHTML = '获取验证码'
          this.waitTime = 60
        } else {
          codeBtn.setAttribute('disabled', true)
          codeBtn.innerHTML = this.waitTime + '秒后获取'
          this.waitTime--
          setTimeout(() => {
            this.handleSendCode()
          }, 1000)
        }
      }).catch((err) => {
        if (err) {
          console.log(err)
        }
        return this.$Message.error('服务器异常，请联系管理员!')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  background: no-repeat url("http://cdn.pgnc.huazai.fun/Swiss-winter.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  width: 500px;
  height: 300px;
  text-align: center;

  /deep/ .ivu-input {
    height: 40px;
    width: 150px;
    text-align: center;
    border-radius: 20px;
    transition: 1s;
  }

  /deep/ .ivu-input::placeholder {
    text-align: center;
  }

  /deep/ .ivu-input:focus {
    width: 250px;
  }

  /deep/ .ivu-form-item-error-tip {
    width: 200px;
    top: 16%;
    left: 75%;
  }

  .ivu-btn {
    border-radius: 20px;
    height: 35px;
    width: 100px;
    background-color: #27ae60;
    color: #fff;
    border-color: #2ecc71;
    margin: 10px 15px;
  }

  .btn-item {
    display: flex;
    justify-content: space-between;
  }

  .ivu-btn:hover {
    background-color: #2ecc71;
    color: #fff;
  }
}
</style>
