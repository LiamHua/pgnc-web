<template>
  <div class="publish-commodity">
    <the-title></the-title>
    <div class="commodity">
      <div class="title-nav">
        <h2>发布商品</h2>
      </div>
      <div class="title">
        <span>标题</span>
        <Input v-model="commodity.title" placeholder="东方不败..." style="width: 500px" />
      </div>
      <div class="introduction">
        <span>简介</span>
        <Input v-model="commodity.introduction" placeholder="东方不败..." style="width: 500px" type="textarea" />
      </div>
      <div class="price">
        <span>价格</span>
        <Input v-model="commodity.price_now" placeholder="东方不败..." style="width: 500px" />
      </div>
      <div class="origin-price">
        <span>原价</span>
        <Input v-model="commodity.price_origin" placeholder="东方不败..." style="width: 500px" />
      </div>
      <div class="tags">
        <span>标签</span>
        <div>
          <Tag type="dot" closable color="primary" v-for="(item, index) in commodity.tags" :key="index" @on-close="handleDelete">{{ item }}</Tag>
          <Button icon="ios-add" type="dashed" size="default" @click="handleAdd">添加标签</Button>
        </div>
      </div>
      <div class="categories">
        <span>分类</span>
        <Select v-model="commodity.classification" style="width:auto" placeholder="合适的分类买家能更好地找到您的商品">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="wechat">
        <span>微信</span>
        <Input v-model="commodity.wechat" placeholder="东方不败..." style="width: 500px" />
      </div>
      <div class="tel">
        <span>手机</span>
        <Input v-model="commodity.tel" placeholder="东方不败..." style="width: 500px" />
      </div>
      <div class="qq">
        <span>QQ</span>
        <Input v-model="commodity.qq" placeholder="东方不败..." style="width: 500px" />
      </div>
      <div class="pictures">
        <span>图片上传</span>
        <Upload class="upload" ref="upload" :show-upload-list="false" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg', 'jpeg', 'png']" :max-size="2048" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" action="//jsonplaceholder.typicode.com/posts/" style="display: inline-block;width:58px;">
          <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="20"></Icon>
          </div>
        </Upload>
      </div>
      <div class="submit">
        <Button type="primary">提交</Button>
      </div>
    </div>
  </div>
</template>

<script>
import TheTitle from '@/components/TheTitle'
import { publishCommodity } from '@/api/commodity.js'

export default {
  components: {
    TheTitle
  },
  data () {
    return {
      commodity: {
        title: '',
        introduction: '',
        price_now: '',
        price_original: '',
        tags: [],
        category_parrent: '',
        category: '',
        wechat: '',
        phone: '',
        qq: '',
        images: []
      }
    }
  },
  methods: {
    handleAdd () {
      if (this.commodity.tags.length <= 5) {
        this.commodity.tags.push()
      } else {
        this.count.push(0)
      }
    },
    handleDelete (event, name) {
      const index = this.commodity.tags.indexOf(name)
      this.count.splice(index, 1)
    },
    async handleSubmit () {
      const { data: res } = await publishCommodity(this.commodity).then(() => {
        if (res.data.code === 200) {
          this.$Message.success('发布成功！')
          this.push('/home')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.publish-commodity {
  .commodity {
    width: 50%;
    min-width: 900px;
    margin: 30px auto;
    padding: 30px 150px;
    display: flex;
    flex-direction: column;
    background-color: #fff;

    div {
      line-height: 70px;
      display: flex;
      align-items: center;
    }
    span {
      width: 70px;
      display: flex;
      justify-content: flex-end;
      margin-right: 20px;
    }

    .title-nav {
      margin: 0 auto;
    }

    .upload div {
      display: block;
    }
    .submit {
      justify-content: center;
    }
  }
}
</style>
