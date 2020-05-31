<template>
  <div class="the-title">
    <div class="title-word">
      <p class="name">飞鸽校园</p>
      <p class="tip">一起来造作吧</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.the-title {
  height: 80px;
  width: 100%;
  padding: 10px 0;
  background-color: #fff;

  .title-word {
    width: 200px;
    margin: 0 auto;
    display: flex;

    flex-direction: column;
    align-items: center;

    .name {
      line-height: 50px;
      font-size: 2em;
    }

    .tip {
    }
  }
}
</style>
