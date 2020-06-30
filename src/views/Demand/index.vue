<template>
  <div class="demand">
    <the-title></the-title>
    <div class="demand-info">
      <div class="title-nav">
        <h2>求购商品</h2>
      </div>
      <div class="title">
        <span>标题</span>
        <Input v-model="commodity.title" placeholder="东方不败..." style="width: 500px" />
      </div>
      <div class="introduction">
        <span>简介</span>
        <Input v-model="commodity.introduction" placeholder="东方不败..." type="textarea" style="width: 500px" />
      </div>
      <div class="price">
        <span>可接受价格</span>
        <Input v-model="commodity.price" placeholder="东方不败..." style="width: 500px" />
      </div>
      <div class="tags">
        <span>标签</span>
        <div>
          <Tag type="dot" closable color="primary" v-for="(item, index) in commodity.tags" :key="index">{{ item }}</Tag>
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

export default {
  components: {
    TheTitle
  },
  data () {
    return {
      commodity: {
        title: '',
        introduction: '',
        price: '',
        tags: [],
        category: '',
        wechat: '',
        phone: '',
        qq: '',
        images: []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.demand {
  .demand-info {
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
