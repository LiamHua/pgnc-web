<template>
  <div class="buy">
    <the-header></the-header>
    <div class="content-container width55vw">
      <buy-msg v-for="(item, index) in buyMsg" :key="index" :msg="item"></buy-msg>
      <div class="msg-page">
          <Page :total="66" show-total />
        </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import BuyMsg from './buy-msg'

export default {
  components: {
    TheHeader,
    TheFooter,
    BuyMsg
  },
  data () {
    return {
      buyMsg: [
        {
          avator: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          nickname: '叫我大哥',
          school: '武汉工程大学',
          time: '2020-07-03',
          title: '大黄蜂鸡架',
          introduce: '重金求购1000架大黄蜂，要活的，最好带着武器',
          contact: {
            wechat: '88888888',
            qq: '66666666',
            tel: '99999999999'
          }
        },
        {
          avator: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          nickname: '叫我大哥',
          school: '武汉工程大学',
          time: '2020-07-03',
          title: '大黄蜂鸡架',
          introduce: '重金求购1000架大黄蜂，要活的，最好带着武器',
          contact: {
            wechat: '88888888',
            qq: '66666666',
            tel: '99999999999'
          }
        },
        {
          avator: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          nickname: '叫我大哥',
          school: '武汉工程大学',
          time: '2020-07-03',
          title: '大黄蜂鸡架',
          introduce: '重金求购1000架大黄蜂，要活的，最好带着武器',
          contact: {
            wechat: '88888888',
            qq: '66666666',
            tel: '99999999999'
          }
        },
        {
          avator: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          nickname: '叫我大哥',
          school: '武汉工程大学',
          time: '2020-07-03',
          title: '大黄蜂鸡架',
          introduce: '重金求购1000架大黄蜂，要活的，最好带着武器',
          contact: {
            wechat: '88888888',
            qq: '66666666',
            tel: '99999999999'
          }
        },
        {
          avator: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          nickname: '叫我大哥',
          school: '武汉工程大学',
          time: '2020-07-03',
          title: '大黄蜂鸡架',
          introduce: '重金求购1000架大黄蜂，要活的，最好带着武器',
          contact: {
            wechat: '88888888',
            qq: '66666666',
            tel: '99999999999'
          }
        },
        {
          avator: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          nickname: '叫我大哥',
          school: '武汉工程大学',
          time: '2020-07-03',
          title: '大黄蜂鸡架',
          introduce: '重金求购1000架大黄蜂，要活的，最好带着武器',
          contact: {
            wechat: '88888888',
            qq: '66666666',
            tel: '99999999999'
          }
        },
        {
          avator: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          nickname: '叫我大哥',
          school: '武汉工程大学',
          time: '2020-07-03',
          title: '大黄蜂鸡架',
          introduce: '重金求购1000架大黄蜂，要活的，最好带着武器',
          contact: {
            wechat: '88888888',
            qq: '66666666',
            tel: '99999999999'
          }
        },
        {
          avator: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          nickname: '叫我大哥',
          school: '武汉工程大学',
          time: '2020-07-03',
          title: '大黄蜂鸡架',
          introduce: '重金求购1000架大黄蜂，要活的，最好带着武器',
          contact: {
            wechat: '88888888',
            qq: '66666666',
            tel: '99999999999'
          }
        },
        {
          avator: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          nickname: '叫我大哥',
          school: '武汉工程大学',
          time: '2020-07-03',
          title: '大黄蜂鸡架',
          introduce: '重金求购1000架大黄蜂，要活的，最好带着武器',
          contact: {
            wechat: '88888888',
            qq: '66666666',
            tel: '99999999999'
          }
        },
        {
          avator: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          nickname: '叫我大哥',
          school: '武汉工程大学',
          time: '2020-07-03',
          title: '大黄蜂鸡架',
          introduce: '重金求购1000架大黄蜂，要活的，最好带着武器',
          contact: {
            wechat: '88888888',
            qq: '66666666',
            tel: '99999999999'
          }
        },
        {
          avator: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          nickname: '叫我大哥',
          school: '武汉工程大学',
          time: '2020-07-03',
          title: '大黄蜂鸡架',
          introduce: '重金求购1000架大黄蜂，要活的，最好带着武器',
          contact: {
            wechat: '88888888',
            qq: '66666666',
            tel: '99999999999'
          }
        },
        {
          avator: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          nickname: '叫我大哥',
          school: '武汉工程大学',
          time: '2020-07-03',
          title: '大黄蜂鸡架',
          introduce: '重金求购1000架大黄蜂，要活的，最好带着武器',
          contact: {
            wechat: '88888888',
            qq: '66666666',
            tel: '99999999999'
          }
        },
        {
          avator: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          nickname: '叫我大哥',
          school: '武汉工程大学',
          time: '2020-07-03',
          title: '大黄蜂鸡架',
          introduce: '重金求购1000架大黄蜂，要活的，最好带着武器',
          contact: {
            wechat: '88888888',
            qq: '66666666',
            tel: '99999999999'
          }
        },
        {
          avator: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          nickname: '叫我大哥',
          school: '武汉工程大学',
          time: '2020-07-03',
          title: '大黄蜂鸡架',
          introduce: '重金求购1000架大黄蜂，要活的，最好带着武器',
          contact: {
            wechat: '88888888',
            qq: '66666666',
            tel: '99999999999'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content-container {
  display: flex;
  flex-direction: column;
}

.buy-msg {
  margin-bottom: 25px;
}

.msg-page {
  display: flex;
  justify-content: center;
}
</style>
