<template>
  <div class="my-info">
    <div class="container">
      <div class="avatar-container">
        <span class="label">头像</span>
        <img src="" alt="" />
      </div>
      <div class="nickname-container">
        <span class="label">昵称</span>
        <Input v-model="value" placeholder="东方不败..." style="width: 180px" />
      </div>
      <div class="name-container">
        <span class="label">真实姓名</span>
        <Input
          v-model="value"
          placeholder="独孤求败..."
          style="width: 180px"
          disabled
        />
      </div>
      <div class="school-container">
        <span class="label">学校</span>
        <Input
          v-model="value"
          placeholder="天涯何处无芳草..."
          style="width: 180px"
          disabled
        />
        <Button class="modifyBtn" type="primary" shape="circle" size="small"
          >修改</Button
        >
      </div>
      <div class="sex-container">
        <span class="label">性别</span>
        <RadioGroup v-model="disabledGroup">
          <Radio label="male">男</Radio>
          <Radio label="female">女</Radio>
          <Radio label="secret">保密</Radio>
        </RadioGroup>
      </div>
      <div class="age-container">
        <span class="label">年龄</span>
        <Input
          v-model="value"
          type="number"
          placeholder="你猜猜我多老..."
          style="width: 180px"
        />
      </div>
      <div class="signature-container">
        <span class="label">个性签名</span>
        <Input
          v-model="value"
          placeholder="消除恐惧的唯一办法就是微笑着面对他..."
          style="width: 350px"
          type="textarea"
          rows="2"
        />
      </div>
      <div class="submit-container">
        <Button class="saveBtn" type="primary" @click="save">保存</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo, saveUserInfo } from '@/api/auth.js'

export default {
  data () {
    return {
      user: {
        avatar: {},
        nickname: '',
        name: '',
        school: '',
        sex: '',
        age: '',
        signature: ''
      }
    }
  },
  methods: {
    async get () {
      const { data: res } = await getUserInfo().then(() => {
        this.user = res.data.user
      }).catch(err => {
        if (err) {
          console.log(err)
        }
        return this.$Message.error('服务器异常，请稍后重试！')
      })
    },
    async save () {
      const { data: res } = await saveUserInfo(this.user).then(() => {
        if (res.code === 200) {
          this.$Message.success('保存成功！')
        }
      }).catch(err => {
        if (err) {
          console.log(err)
        }
        this.$Message.error('服务器异常，请稍后重试！')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-info {
  .label {
    margin-right: 15px;
    width: 100px;
    text-align: right;
    display: inline-block;
  }

  div {
    line-height: 70px;
  }

  .modifyBtn {
    margin-left: 20px;
  }

  .submit-container {
    display: flex;
    justify-content: center;
    height: 60px;
    align-items: flex-end;
  }
}
</style>
