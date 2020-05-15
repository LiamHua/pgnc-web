<template>
  <div class="home">
    <the-header></the-header>
    <div class="content-container">
      <div class="content">
        <div class="top-nav">
          <ClassMenu></ClassMenu>
          <Carousel class="carousel"></Carousel>
        </div>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import ClassMenu from '@/components/ClassMenu'
import Carousel from '@/components/Carousel'

export default {
  components: {
    TheHeader,
    TheFooter,
    ClassMenu,
    Carousel
  }
}
</script>

<style lang="scss" scoped>
.top-nav {
  display: flex;
  justify-content: flex-start;

  .carousel {
    width: calc(60vw - 165px);
  }
}
</style>
