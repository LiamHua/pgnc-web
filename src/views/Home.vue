<template>
  <div class="home">
    <the-header></the-header>
    <div class="content-container">
      <div class="content">
        <div class="top-nav">
          <ClassMenu></ClassMenu>
          <Carousel class="carousel"></Carousel>
        </div>
        <div class="products">
          <index-product v-for="(item, index) in indexProducts" :key="index" :product="item" @click.native="handleToProductInfo"></index-product>
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
import IndexProduct from '@/views/IndexProduct'

export default {
  components: {
    TheHeader,
    TheFooter,
    ClassMenu,
    Carousel,
    IndexProduct
  },
  data () {
    return {
      indexProducts: [
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        },
        {
          img: 'http://suo.im/6psCww',
          title: '网红卸妆水',
          time: '2020-06-30',
          views: '666',
          tags: [],
          price: '66.66',
          school: '武汉工程大学'
        }
      ]
    }
  },
  methods: {
    handleToProductInfo () {
      console.log('huhuhuhuhuh')
      this.$router.push('product-info')
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  min-width: 1230px;
  background-color: #f8f8f8;
}

.top-nav {
  display: flex;
  justify-content: flex-start;

  .carousel {
    min-width: calc(1230px - 165px);
    width: calc(70vw - 165px);
  }
}

.products {
  margin-top: 35px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  gap: 20px;
}
</style>
