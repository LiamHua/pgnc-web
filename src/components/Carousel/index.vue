<template>
  <div class="carousel">
    <Carousel autoplay height="440px" autoplay-speed="3000" loop radius-dot>
      <CarouselItem v-for="(item, index) in carouseItem" :key="index">
        <div class="carousel-item">
          <a :href="item.toLink">
            <img :src="item.imgLink" :alt="item.comment">
          </a>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carouseItem: [
        {
          id: '',
          toLink: 'https://www.cnblogs.com/studywithme/',
          imgLink: 'http://cdn.pgnc.huazai.fun/background1.png',
          comment: ''
        },
        {
          id: '',
          toLink: 'https://www.huazai.fun',
          imgLink: 'http://d.zdqx.com/zkds_170112/001.jpg',
          comment: ''
        },
        {
          id: '',
          toLink: 'https://www.huazai.fun',
          imgLink: 'http://www.08lr.cn/uploads/allimg/170513/1-1F513095438.jpg',
          comment: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.ivu-carousel-item {
  display: flex;
  justify-content: center;

  a {
    display: block;
  }

  img {
    height: 440px;
  }
}
</style>
