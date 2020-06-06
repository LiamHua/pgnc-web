<template>
  <div class="login">
    <!-- 登陆信息表单 -->
    <Form :model="loginFormWithPass" :rules="loginFormRules" ref="loginFormWithPassRef" v-show="loginConfig.currentWay === 'PASSWORD'">
      <!-- 用户账号（手机号） -->
      <FormItem prop="tel">
        <Input class="number" placeholder="手机号" type="number" maxlength="11" v-model="loginFormWithPass.tel" />
      </FormItem>
      <!-- 密码或验证码 -->
      <!-- ！！！prop必须与v-model绑定的值一致，不然会出现值为空的情况 -->
      <FormItem prop="password">
        <Input placeholder="密码" type="password" maxlength="15" v-model="loginFormWithPass.password" />
      </FormItem>
    </Form>
    <Form :model="loginFormWithSMS" :rules="loginFormRules" ref="loginFormWithSMSRef" v-show="loginConfig.currentWay === 'CODE'">
      <!-- 用户账号（手机号） -->
      <FormItem prop="tel">
        <Input class="number" placeholder="手机号" type="number" maxlength="11" v-model="loginFormWithSMS.tel" />
      </FormItem>
      <!-- ！！！prop必须与v-model绑定的值一致，不然会出现值为空的情况 -->
      <FormItem prop="sms">
        <Input class="number" placeholder="验证码" type="number" maxlength="4" v-model="loginFormWithSMS.sms" />
      </FormItem>
    </Form>
    <!-- 切换登陆方式 -->
    <span @click="switchLoginWay" class="switch-login-way">使用{{ loginConfig.way }}登录</span>
    <!-- 获取验证码与提交登陆按钮 -->
    <div class="submit">
      <Button @click="handleGetCode" id="get-code" type="primary" v-show="loginConfig.currentWay === 'CODE'">获取验证码</Button>
      <Button class="animate__animated animate__rollIn" @click="handleLogin" key="login" type="primary">登录</Button>
    </div>
    <!-- 无账号，去注册 -->
    <span @click="switchToRegister" class="switch-to-register">没有账号，立即注册</span>
  </div>
</template>

<script>
import md5 from 'md5'
import { loginWithPassword, loginWithSMS, getCode } from '@/api/auth'
import { telRule, passwordRule, codeRule } from '@/utils/rules.js'
const setting = require('../../settings')

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
      loginFormWithPass: {
        tel: '',
        nickname: 'huhuh',
        password: ''
      },
      loginFormWithSMS: {
        tel: '',
        sms: ''
      },
      // 登录表单格式校验规则
      loginFormRules: {
        tel: telRule,
        code: codeRule,
        password: passwordRule
      },
      // 登陆方式配置
      loginConfig: {
        showGetCode: false,
        way: '',
        currentWay: ''
      },
      // 获取验证码间隔时间
      waitTime: 60
    }
  },
  methods: {
    // 登录
    async handleLogin () {
      // 登录前校验
      if (this.loginConfig.currentWay === 'PASSWORD') {
        this.$refs.loginFormWithPassRef.validate(async status => {
          if (!status) return this.$Message.error('格式错误！')
          // 发起登录请求
          // 深拷贝实现解除双向绑定
          const loginForm = JSON.parse(JSON.stringify(this.loginFormWithPass))
          // 加密
          loginForm.password = md5(loginForm.password)
          const { data: res } = await loginWithPassword(loginForm)
            .then(() => {
              if (res.code !== 200) return this.$Message.error(res.msg)
              // window.sessionStorage.setItem('token', res.data.token)
              this.$Message.success(res.msg)
              this.$router.push('/home')
            })
        })
      } else {
        this.$refs.loginFormWithSMSRef.validate(async status => {
          if (!status) return this.$Message.error('格式错误！')
          // 发起登录请求
          const { data: res } = await loginWithSMS(this.loginFormWithSMS)
            .then(() => {
              if (res.code !== 200) return this.$Message.error(res.msg)
              window.sessionStorage.setItem('token', res.data.token)
              this.$Message.success(res.msg)
              this.$router.push('/home')
            })
        })
      }
    },
    // 获取验证码
    async handleGetCode () {
      const codeBtn = document.getElementById('get-code')
      const { data: res } = await getCode(this.loginForm.tel)
        .then(() => {
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
        })
    },
    // 切换登录方式
    switchLoginWay () {
      this.loginConfig.showGetCode = this.loginConfig.currentWay === 'PASSWORD'
      this.loginConfig.way = this.loginConfig.currentWay === 'PASSWORD' ? '密码' : '验证码'
      this.loginConfig.currentWay = this.loginConfig.currentWay === 'PASSWORD' ? 'CODE' : 'PASSWORD'
      // 重置表单
      this.$refs.loginFormRef.resetFields()
    },
    switchToRegister () {
      this.$store.commit('switchLoginOrRegister')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 500px;
  height: 300px;
  text-align: center;

  .ivu-form {
    display: flex;
    flex-direction: column;
  }

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

  .switch-to-register {
    color: #12cdf7;
    cursor: pointer;
  }
}
</style>
