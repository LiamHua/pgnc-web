<template>
  <div class="home">
    <Header></Header>
    <div class="content">
      <div class="top-nav">
        <ClassMenu></ClassMenu>
        <Carousel class="tcarousel"></Carousel>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClassMenu from '@/components/ClassMenu'
import Carousel from '@/components/Carousel'

export default {
  components: {
    Header,
    Footer,
    ClassMenu,
    Carousel
  }
}
</script>

<style lang="scss" scoped>
.content {
  min-height: calc(100vh - 285px - 60px);
  width: 60vw;
  margin: 30px auto;
}

.top-nav {
  display: flex;
  justify-content: flex-start;

  .tcarousel {
    width: calc(60vw - 165px);
  }
}
</style>
