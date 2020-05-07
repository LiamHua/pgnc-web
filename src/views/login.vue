<template>
  <div class="login-container">
    <div class="login">
      <Form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
        <FormItem prop="tel">
          <Tooltip content="首次登录将自动注册为平台用户" placement="top" :delay="2000">
            <Input class="input" type="text" v-model="loginForm.tel" placeholder="Phone" />
          </Tooltip>
        </FormItem>
        <FormItem :prop="loginConfig.currentWay === 'PASSWORD' ? 'password' : 'code' ">
          <Input type="text" v-model="loginForm.code" :placeholder="loginConfig.currentWay === 'PASSWORD' ? 'Password' : 'Code' " />
        </FormItem>
        <p class="switch-login-way" v-if="!registerConfig.showLoginOrRegister" @click="switchLoginWay">
          使用{{loginConfig.way}}登录
        </p>
        <FormItem class="btn-item">
          <transition enter-active-class="fadeInDownBig" leave-active-class="fadeOutDownBig">
            <Button id="getCode" class="animated" type="primary" @click="handleGetCode" v-if="loginConfig.showGetCode&&!registerConfig.showLoginOrRegister">
              获取验证码
            </Button>
          </transition>
          <transition enter-active-class="rotateIn" leave-active-class="rotateOut" appear appear-active-class="flip" mode="out-in">
            <Button class="animated" type="primary" v-if="!registerConfig.showLoginOrRegister" @click="handleLogin" key="login">
              登录
            </Button>
            <Button class="animated" type="primary" v-if="registerConfig.showLoginOrRegister" @click="handleRegister" key="register">
              注册
            </Button>
          </transition>
        </FormItem>
        <p class="switch-login-register" @click="switchLoginOrRegister" v-if="!registerConfig.showLoginOrRegister">没有账号，立即注册</p>
        <p class="switch-login-register" @click="switchLoginOrRegister" v-if="registerConfig.showLoginOrRegister">已有账号，立即登录</p>
      </Form>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import { login, getCode } from '@/api/auth'
const setting = require('../settings')

export default {
  name: 'Login',
  created () {
    // 初始化登录方式
    this.loginConfig.way = setting.defaultLoginWay === 'PASSWORD' ? '验证码' : '密码'
    this.loginConfig.currentWay = setting.defaultLoginWay
    this.loginConfig.showGetCode = setting.defaultLoginWay !== 'PASSWORD'
  },
  data () {
    return {
      // 登录表单
      loginForm: {
        tel: '',
        // 可以是验证码，也可以是密码
        code: '',
        way: ''
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
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '请输入正确的密码', trigger: 'blur' }
        ]
      },
      loginConfig: {
        showGetCode: false,
        way: '',
        currentWay: ''
      },
      registerConfig: {
        // false表示当前为登录，true表示为注册
        showLoginOrRegister: false
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
        // 确定登录方式
        this.loginForm.way = this.loginConfig.currentWay
        // 发起登录请求
        if (this.loginConfig.currentWay === 'PASSWORD') {
          // 深拷贝实现解除双向绑定
          const loginForm = JSON.parse(JSON.stringify(this.LoginForm))
          // 加密
          loginForm.password = md5(loginForm.password)
        }
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
    },
    handleRegister () {

    },
    // 切换登录方式
    switchLoginWay () {
      this.loginConfig.showGetCode = this.loginConfig.currentWay === 'PASSWORD'
      this.loginConfig.way = this.loginConfig.currentWay === 'PASSWORD' ? '密码' : '验证码'
      this.loginConfig.currentWay = this.loginConfig.currentWay === 'PASSWORD' ? 'CODE' : 'PASSWORD'
      // 重置表单
      this.$refs.loginFormRef.resetFields()
    },
    // 切换登录与注册
    switchLoginOrRegister () {
      this.registerConfig.showLoginOrRegister = !this.registerConfig.showLoginOrRegister
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  overflow: hidden;
  background: no-repeat url("http://cdn.pgnc.huazai.fun/Swiss-winter.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

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

    .switch-login-way {
      cursor: pointer;
      color: #2b719e;
      // color: #2c9a50;
      user-select: none;
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
      justify-content: center;
    }

    .ivu-btn:hover {
      background-color: #2ecc71;
      color: #fff;
    }

    .switch-login-register {
      color: #12cdf7;
      cursor: pointer;
    }
  }
}
</style>
