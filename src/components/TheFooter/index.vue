<template>
  <div class="footer">
    <div class="footer-up-wrapper">
      <div class="footer-up">
        <div class="contact">
          <p class="title">联系我们/Contact us</p>
          <p>QQ:1120601455</p>
          <p>Email:liamhuazai@gmail.com</p>
          <p>地址：武汉工程大学流芳校区</p>
        </div>
        <div class="wechat">
          <img src="../../assets/WeChatCode.jpg" alt="微信公众号二维码">
          <p>关注微信公众平台</p>
        </div>
        <div class="assistant">
          <p class="love-open-source">拥抱开源</p>
          <div class="open-source-wrapper">
            <a class="open-source">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gitee"></use>
              </svg>
            </a>
            <a class="open-source" href="https://github.com/LiamHua/pgnc-web" target="_blank">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-github"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-down-wrapper">
      <div class="footer-down">
        <span class="name">版权所有 @liam , </span><a href="http://beian.miit.gov.cn/" target="_blank" class="record">鄂ICP备19024304号-2</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  color: #999;
  line-height: 35px;
  height: 285px;

  .footer-up-wrapper {
    background-color: #282c36;
    padding: 30px 400px;
  }

  .footer-up {
    display: flex;
    justify-content: space-between;

    .contact {
      width: 200px;
    }

    .wechat {
      width: 200px;
      text-align: center;

      img {
        height: 128px;
      }
    }
    .assistant {
      text-align: center;
      width: 200px;

      .love-open-source {
        font-size: 20px;
        font-family:'jdzhonyuanjian21ba195d8a21b1b';
        margin-bottom: 20px;
      }

      .open-source-wrapper {
        display: flex;
        justify-content: space-around;

        .open-source {
          color: #999;

          .icon {
            font-size: 40px;
          }
        }
      }
    }
  }

  .footer-down-wrapper {
    background-color: #22252e;
    padding: 7px 0;
  }

  .footer-down {
    text-align: center;

    .record {
      color: #999;
    }
  }
}
</style>
