<template>
  <div class="product-info-container">
    <the-header></the-header>
    <div class="content-container">
      <div class="product-info backgroundWhite">
        <div class="images">
          <div class="images-big">
            <img :src="bigImage" alt="商品图片">
          </div>
          <div class="images-smart">
            <img :src="item" alt="商品图片" v-for="(item, index) in product.images" :key="index" @click="changeBigImage(item)">
          </div>
        </div>
        <div class="content">
          <div class="persion">
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            <span class="tel">13666666666</span>
          </div>
          <div class="title">
            <h3>{{product.title}}</h3>
          </div>
          <div class="price">
            <Icon type="md-card" size=25 />
            <span class="price-now">{{product.price}}元</span>
            <span>原价{{product.originalPrice}}元</span>
          </div>
          <div class="tags">
            <Icon type="md-pricetags" size=25 />
            <Tag color="blue" v-for="(item, index) in product.tags" :key="index">{{item}}</Tag>
          </div>
          <div class="school">
            <Icon type="md-school" size=25 />
            <span>{{product.school}}</span>
          </div>
          <div class="time">
            <Icon type="md-calendar" size=25 />
            <span>{{product.time}}</span>
          </div>
          <div class="contact">
            <div class="qq">
              <Icon type="md-chatboxes" size=25 />
              <span>QQ：{{product.qq}}</span>
            </div>
          </div>
          <div class="introduce">
            <span>{{product.introduce}}</span>
          </div>
        </div>
        <div>
          <router-link to="">举报</router-link>
        </div>
      </div>
      <div class="comment-wrapper backgroundWhite">
        <div class="comment-header">
          <strong>商品讨论</strong>
          <Button type="primary" shape="circle" icon="md-text" size="small">发表评论</Button>
        </div>
        <Divider />
        <div class="comment-info-container">
          <div class="comment-info-class">
            <RadioGroup v-model="button1">
              <Radio label="全部"></Radio>
              <Radio label="好评"></Radio>
              <Radio label="中评"></Radio>
              <Radio label="差评"></Radio>
            </RadioGroup>
          </div>
          <div class="comment-info">
            <Comment v-for="(item, index) in comments" :key="index" :comment="item"></Comment>
          </div>
        </div>
        <div class="comment-page">
          <Page :total="66" show-total />
        </div>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import Comment from '@/components/Comment'

export default {
  components: {
    TheHeader,
    TheFooter,
    Comment
  },
  data () {
    return {
      product: {
        title: '花里胡哨的衣服',
        images: ['http://suo.im/6qfmAU', 'http://suo.im/6xLCIX', 'http://suo.im/5HOxoY'],
        price: '66.66',
        originalPrice: '299.99',
        tags: ['原装正品', '非诚勿扰', '欢迎来撩'],
        school: '武汉工程大学',
        time: '2020-06-30',
        qq: '1120601455',
        introduce: '刚入手不久，全新'
      },
      bigImage: '',
      comments: [
        {
          id: '',
          avator: '',
          nickname: '大哥',
          time: '2020-06-30',
          comment: '我才是大哥，你当老二去吧'
        }
      ]
    }
  },
  mounted () {
    this.bigImage = this.product.images[0]
  },
  methods: {
    changeBigImage (item) {
      this.bigImage = item
    }
  }
}
</script>

<style lang="scss" scoped>
.content-container {
  display: flex;
  flex-direction: column;
}

.product-info {
  display: flex;
  padding: 25px 25px;

  .images-big {
    margin-bottom: 12px;
    img {
      width: 360px;
      height: 420px;
    }
  }

  .images-smart img {
    width: 64px;
    height: 64px;
    margin-right: 10px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    margin-left: 50px;
    line-height: 45px;
    width: 300px;

    .ivu-icon {
      margin-right: 20px;
    }

    .tel {
      margin-left: 10px;
    }

    .price-now {
      margin-right: 20px;
      color: #f01414;
    }
  }
}

.comment-wrapper {
  margin-top: 30px;

  .comment-header {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  }

  .comment-info-class {
    line-height: 60px;
    padding: 0 20px;
  }

  .comment-info {
    padding: 10px 20px;
    line-height: 35px;
  }

  .comment-page {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    line-height: 50px;
  }
}
</style>
