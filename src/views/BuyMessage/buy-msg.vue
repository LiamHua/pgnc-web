<template>
  <div class="buy-msg backgroundWhite">
    <div class="user-info">
      <Avatar :src="msg.avator" size=35 />
      <span class="nickname">{{msg.nickname}}</span>
      <span class="school">{{msg.school}}</span>
      <span>发布于{{msg.time}}</span>
    </div>
    <div class="msg-info">
      <div class="title">
        <h3>{{msg.title}}</h3>
      </div>
      <div class="introduce">
        <p>{{msg.introduce}}</p>
      </div>
      <div class="contact">
        <span>微信：{{msg.contact.wechat}}</span>
        <span>QQ：{{msg.contact.qq}}</span>
        <span>电话：{{msg.contact.tel}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: Object
  }
}
</script>

<style lang="scss" scoped>
.buy-msg {
  padding: 10px 20px;
  min-width: 100%;
  height: 180px;
  line-height: 40px;
}

.nickname {
  margin-left: 10px;
  margin-right: 25px;
}

.school {
  margin-right: 20px;
}

.contact span {
  margin-right: 20px;
}
</style>
