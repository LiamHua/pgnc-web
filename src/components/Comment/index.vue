<template>
  <div class="comment">
    <div class="avator">
      <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size=50 />
    </div>
    <div class="comment-name-time">
      <strong>{{comment.nickname}}</strong>
      <span>{{comment.time}}</span>
    </div>
    <div class="comment-word">
      <p>{{comment.comment}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: Object
  }
}
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  align-items: center;
}

.comment-name-time {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
}

.comment-word {
  margin-left: 25px;
}
</style>
