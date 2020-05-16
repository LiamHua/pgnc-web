<template>
  <div class="register">
    <!-- 注册表单 -->
    <Form :model="registerForm" :rules="registerFormRules" ref="registerFormRef">
      <!-- 用户昵称 -->
      <FormItem prop="nickname">
        <Input placeholder="昵称" type="text" maxlength="10" v-model="registerForm.nickname" />
      </FormItem>
      <!-- 用户账号（手机号） -->
      <FormItem prop="tel">
        <Input class="number" placeholder="手机号" type="number" maxlength="11" v-model="registerForm.tel" />
      </FormItem>
      <!-- 密码 -->
      <FormItem prop="password">
        <Input placeholder="密码" type="password" maxlength="15" v-model="registerForm.password" />
      </FormItem>
      <!-- 重复密码 -->
      <FormItem prop="password">
        <Input placeholder="请重复密码" type="password" maxlength="15" v-model="secondPassword" @on-blur="verifyPassword" />
      </FormItem>
      <!-- 验证码 -->
      <FormItem prop="code">
        <Input class="number" placeholder="验证码" type="number" maxlength="4" v-model="registerForm.code" />
      </FormItem>
      <!-- 获取验证码与提交注册按钮 -->
      <div class="submit">
        <Button @click="handleGetCode" id="get-code" type="primary">获取验证码</Button>
        <Button @click="handleRegister" key="login" type="primary">注册</Button>
      </div>
      <!-- 有账号，去登陆 -->
      <span @click="switchToLogin" class="switch-to-login">已有账号，立即登陆</span>
    </Form>
  </div>
</template>

<script>
import md5 from 'md5'
import { register, getCode } from '@/api/auth'
import { nicknameRule, telRule, passwordRule, codeRule } from '@/utils/rules.js'

export default {
  data () {
    return {
      // 注册表单
      registerForm: {
        nickname: '',
        tel: '',
        password: '',
        code: ''
      },
      // 注册表单验证规则
      registerFormRules: {
        nickname: nicknameRule,
        tel: telRule,
        password: passwordRule,
        code: codeRule
      },
      // 第二次输入的密码，用于密码校对
      secondPassword: '',
      // 获取验证码间隔时间
      waitTime: 60
    }
  },
  methods: {
    async handleGetCode () {
      const codeBtn = document.getElementById('get-code')
      const { data: res } = await getCode(this.registerForm.tel)
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
        .catch(err => {
          if (err) {
            console.log(err)
          }
          return this.$Message.error('服务器异常，请联系管理员!')
        })
    },
    handleRegister () {
      if (this.secondPassword !== this.registerForm.password) {
        return this.$Message.error('密码不一致，请重新输入！')
      }
      // 注册前校验
      this.$refs.registerFormRef.validate(async status => {
        if (!status) return this.$Message.error('格式错误！')
        // 发起注册请求
        // 深拷贝实现解除双向绑定
        const registerForm = JSON.parse(JSON.stringify(this.registerForm))
        // 加密
        registerForm.password = md5(registerForm.password)
        const { data: res } = await register(this.registerForm)
          .then(() => {
            if (res.code !== 200) return this.$Message.error(res.msg)
            this.$Message.success(res.msg)
            this.$router.push('/login')
          })
          .catch(err => {
            if (err) {
              console.log(err.stack)
            }
            return this.$Message.error('服务器异常，请联系管理员!')
          })
      })
    },
    verifyPassword () {
      console.log('555')
      if (this.secondPassword !== this.registerForm.password) {
        this.$Message.error('密码不一致，请重新输入！')
      }
    },
    switchToLogin () {
      this.$store.commit('switchLoginOrRegister')
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  width: auto;
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

  .switch-to-login {
    color: #12cdf7;
    cursor: pointer;
    display: inline-block;
  }
}
</style>
