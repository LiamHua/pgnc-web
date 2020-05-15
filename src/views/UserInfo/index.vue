<template>
  <div class="user-info">
    <the-header></the-header>
    <div class="content-container">
      <div class="menu">
        <p class="title">个人中心</p>
        <Menu mode="vertical" replace active-name="" width="150px">
          <MenuItem name="1" to="/user/my-info">
            <Icon type="md-person" />
            我的资料
          </MenuItem>
          <MenuItem name="2" to="/user/my-commodities">
            <Icon type="ios-basket" />
            我的商品</MenuItem
          >
          <MenuItem name="3" to="/user/shopping-cart">
            <Icon type="ios-cart" />
            我的求购
          </MenuItem>
          <MenuItem name="4" to="/user/my-collections">
            <Icon type="ios-pricetags" />
            我的收藏
          </MenuItem>
          <MenuItem name="5" to="/user/my-authentication">
            <Icon type="md-eye" />
            身份认证
          </MenuItem>
        </Menu>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss" scoped>
.user-info {
  background-color: #f8f8f9;
}

.menu {
  border-right: 1px solid #eee;

  .title {
    height: 35px;
    line-height: 35px;
    margin-left: 20px;
  }

  .ivu-menu {
    // 修复 header菜单与此处的菜单发生冲突，被遮挡
    position: static;
  }
}
</style>
