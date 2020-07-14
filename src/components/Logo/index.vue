<template>
  <div class="logo">
    <img class="logo-img" src="../../assets/logo.png" alt="logo">
    <div class="logo-site">
      <p class="logo-site-name">飞鸽校园测试</p>
      <p class="logo-site-address">pgnc.huazai.fun</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.logo {
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .logo-img {
    width: 48px;
    height: 48px;
  }

  .logo-site {
    margin-left: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo-site-name {
      font-family:'LiDeBiao-Xing321ba12473821b1b';
      font-size: 15px;
    }

    .logo-site-address {
      font-family: "Malapropism";
      font-size: 12px;
    }
  }

  .logo-site p {
    line-height: 20px;
  }
}
</style>
