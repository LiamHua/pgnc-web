<template>
  <div class="index-product">
    <div class="product-image">
      <img :src="product.img" alt="商品图片">
    </div>
    <div class="product-title">
      <h3>{{product.title}}</h3>
    </div>
    <div class="product-time-views">
      <span>更新于{{product.time}}</span>
      <span>{{product.views}}人浏览</span>
    </div>
    <div class="product-tags"></div>
    <div class="product-price-school">
      <span class="price">¥{{product.price}}</span>
      <span class="school">{{product.school}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.index-product {
  width: 230px;
  padding: 8px 8px;
  background-color: #fff;
}

.product-image {
  img {
    width: 214px;
  }
}

.product-title {
  line-height: 35px;
}

.product-time-views {
  display: flex;
  justify-content: space-between;
  line-height: 35px;
}

.product-tags {
  line-height: 35px;
}

.product-price-school {
  display: flex;
  justify-content: space-between;
  line-height: 35px;

  .price {
    color: #f01414;
  }

  .school {
    color: #2d8cf0;
  }
}
</style>
