<template>
  <div class="my-authentication">
    <div class="tip-container">
      <p>身份认证的好处：</p>
      <p>1. 发布商品后，获得更快的审核速度</p>
      <p>2. 在商品列表和详情页显示明显认证标识，让他人对您的商品更放心</p>
      <p>3. 获得推荐机会等更多好处</p>
    </div>
    <div class="name-container">
      <span class="label">真实姓名</span>
      <Input
        v-model="value"
        placeholder="独孤求败..."
        style="width: 180px"
      />
    </div>
    <div class="type-container">
      <span class="label">证件类型</span>
      <RadioGroup v-model="disabledGroup">
        <Radio label="male">学生证</Radio>
        <Radio label="female">校园卡</Radio>
        <Radio label="secret">身份证</Radio>
      </RadioGroup>
    </div>
    <div class="card-number-container">
      <span class="label"> 证件号码</span>
      <Input
        v-model="value"
        type="number"
        placeholder="1433223...1433223..."
        style="width: 180px"
      />
    </div>
    <div class="picture-container">
      <span class="label">证件上传</span>
      <Upload
        ref="upload"
        :show-upload-list="false"
        :default-file-list="defaultList"
        :on-success="handleSuccess"
        :format="['jpg', 'jpeg', 'png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/"
        style="display: inline-block;width:58px;"
      >
        <div style="width: 58px;height:58px;line-height: 58px;">
          <Icon type="ios-camera" size="20"></Icon>
        </div>
      </Upload>
    </div>
    <div class="submit-container">
       <Button class="saveBtn" type="primary">提交</Button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.my-authentication {
  padding-top: 50px;
  padding-left: 50px;
  line-height: 70px;
}

.label {
  margin-right: 15px;
    // width: 100px;
    // text-align: right;
    // display: inline-block;
}

.tip-container {
  line-height: 30px;
  color: #93999f;
  font-size: 13px;
}

.picture-container {
  display: flex;
  height: 80px;
  line-height: 80px;
  align-items: center;
}

  .submit-container {
    display: flex;
    justify-content: center;
    height: 60px;
    align-items: flex-end;
  }
</style>
