<template>
  <!-- 顶部菜单 -->
  <div class="header">
    <Menu mode="horizontal" active-name="1">
      <!-- 左侧菜单 -->
      <div class="left-menu-item">
        <router-link to="home" style="color: #3a3a3a">
          <Logo></Logo>
        </router-link>
        <MenuItem name="1">
        <Icon type="ios-paper" />
        二手交易
        </MenuItem>
        <MenuItem name="2">
        <Icon type="ios-people" />
        物品求购
        </MenuItem>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-stats" />
            杂七乱八
          </template>
          <MenuItem name="3-1">空教室</MenuItem>
          <MenuItem name="3-2">查成绩</MenuItem>
          <MenuItem name="3-3">一起玩</MenuItem>
        </Submenu>
      </div>
      <!-- 右侧菜单 -->
      <div class="right-menu-item">
        <Submenu name="4">
          <template slot="title">
            <Icon type="ios-stats" />
            发布
          </template>
          <div class="publish-item">
            <MenuItem name="4-1">
            <div class="publish-item-sell">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sell"></use>
              </svg>
              <p>二手寄卖</p>
            </div>
            </MenuItem>
            <MenuItem name="4-2">
            <div class="publish-item-buy">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-buy"></use>
              </svg>
              <p>求购商品</p>
            </div>
            </MenuItem>
          </div>
        </Submenu>
        <!-- 学校选择器 -->
        <Select v-model="school" :style="selectWidth" filterable not-found-text="当前没有学校">
          <Option v-for="item in schoolList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <!-- 登录 -->
        <div class="login-menu">
          <Avatar icon="ios-person" />
          <router-link to="login">登录</router-link>
        </div>
      </div>
    </Menu>
  </div>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheHeader',
  components: {
    Logo
  },
  created () {
    this.school = '武汉工程大学'
  },
  data () {
    return {
      school: '',
      schoolList: [
        {
          value: '武汉工程大学',
          label: '武汉工程大学'
        },
        {
          value: '中南财经政法大学',
          label: '中南财经政法大学'
        }
      ],
      selectWidth: ''
    }
  },
  watch: {
    // 根据学校名字长度动态计算学校选择器的长度
    school: function (newVal, oldVal) {
      // TODO: 这里可能会有性能问题,const
      const length = newVal.length
      this.selectWidth = 'width:' + (15 * length + 30) + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
}
.ivu-menu {
  display: flex;
  justify-content: space-between;
  padding: 0 25px;

  .left-menu-item {
    display: flex;

    .logo {
      margin-right: 15px;
    }
  }

  .right-menu-item {
    display: flex;
    align-items: center;

    .publish-item {
      width: 300px;
      display: flex;
      justify-content: space-between;
      padding: 0 25px;

      // TODO: 这里可能会有性能问题,标签选择器
      p {
        line-height: 30px;
        margin-top: 7px;
      }

      .icon {
        font-size: 40px;
        // margin-bottom: -25px;
        width: 50px;
        margin: 0 auto;
        margin-top: 5px;
      }

      .publish-item-sell {
        width: 60px;
      }

      .publish-item-buy {
        width: 60px;
      }
    }

    .ivu-select {
      margin-right: 25px;

      /deep/ .ivu-select-selection {
        border: none;
      }
    }

    .login-menu {
      margin-right: 25px;

      .ivu-avatar {
        margin-right: 10px;
      }
    }
  }
}
</style>
