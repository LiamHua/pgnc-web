<template>
  <div class="class-menu">
    <div class="class-menu-top-wrapper">
      <div class="class-menu-top">
        <ul>
          <li class="class-menu-top-item" v-for="(item, index) in menu" :key="index" @mouseover="handleShowSecondaryMenu(item)" @mouseout="handleHiddenSecondaryMenu">
            {{item.topMenu.name}}
            <Icon type="md-arrow-dropright" size="18" />
          </li>
        </ul>
      </div>
    </div>
    <div class="class-menu-secondary" v-show="showSecondaryMenu" @mouseover="handleShowSecondaryMenu(null)" @mouseout="handleHiddenSecondaryMenu">
      <h3 class="title">
        <Divider>{{currentMenu.topMenu.name}}</Divider>
      </h3>
      <div class="class-menu-secondary-container">
        <ul v-for="(item, index) in currentMenu.secondaryMenu" :key="index">
          <li class="class-menu-secondary-item">
            <img :src="item.link" alt="">
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      menu: [
        {
          topMenu: {
            id: '1',
            name: '数码产品'
          },
          secondaryMenu: [
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '平板'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '笔记本'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            }
          ]
        },
        {
          topMenu: {
            id: '2',
            name: '书籍教材'
          },
          secondaryMenu: [
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '教科书'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '文学'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '名著'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '小说'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            }
          ]
        },
        {
          topMenu: {
            id: '3',
            name: '衣鞋帽伞'
          },
          secondaryMenu: [
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '裙子'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '裤子'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '衣服'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '鞋'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            }
          ]
        },
        {
          topMenu: {
            id: '1',
            name: '数码产品'
          },
          secondaryMenu: [
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            }
          ]
        },
        {
          topMenu: {
            id: '4',
            name: '代步工具'
          },
          secondaryMenu: [
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '自行车'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '平衡车'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '跑车'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '飞机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '坦克'
            }
          ]
        },
        {
          topMenu: {
            id: '5',
            name: '体育健身'
          },
          secondaryMenu: [
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            }
          ]
        },
        {
          topMenu: {
            id: '1',
            name: '数码产品'
          },
          secondaryMenu: [
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            }
          ]
        },
        {
          topMenu: {
            id: '1',
            name: '数码产品'
          },
          secondaryMenu: [
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            }
          ]
        },
        {
          topMenu: {
            id: '1',
            name: '数码产品'
          },
          secondaryMenu: [
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            }
          ]
        },
        {
          topMenu: {
            id: '1',
            name: '数码产品'
          },
          secondaryMenu: [
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            }
          ]
        },
        {
          topMenu: {
            id: '1',
            name: '数码产品'
          },
          secondaryMenu: [
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            },
            {
              id: '1-1',
              link: 'https://api.youzixy.com/public/uploads/attach/2019/07/16/5d2ca4f919c70.jpg',
              name: '手机'
            }
          ]
        }
      ],
      currentMenu: {
        topMenu: {
          id: '',
          name: ''
        },
        secondaryMenu: [
          {
            id: '',
            link: '',
            name: ''
          }
        ]
      },
      showSecondaryMenu: false
    }
  },
  methods: {
    handleShowSecondaryMenu (item) {
      this.showSecondaryMenu = true
      if (item !== null) {
        this.currentMenu = item
      }
    },
    handleHiddenSecondaryMenu () {
      this.showSecondaryMenu = false
    }
  }
}
</script>

<style lang="scss" scoped>
.class-menu {
  display: flex;
  justify-content: flex-start;
  position: relative;
}

.class-menu-top-wrapper {
  overflow: hidden;
  width: 165px;
}

.class-menu-top {
  height: 440px;
  width: 180px;
  background-color: #2b333b;
  border-radius: 8px;
  color: hsla(0, 0%, 100%, 0.6);
  padding-top: 10px;
  overflow-x: hidden;
  overflow-y: scroll;

  .class-menu-top-item {
    height: 45px;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 15px;
    cursor: pointer;
    user-select: none;
  }

  .class-menu-top-item:hover {
    background-color: #64707c;
  }
}

.class-menu-secondary {
  height: 440px;
  width: 650px;
  text-align: center;
  padding: 15px 15px;
  position: absolute;
  background-color: #fff;
  left: 165px;
  z-index: 100;

  .class-menu-secondary-container {
    padding: 10px 10px;
    display: flex;
    justify-content: flex-start;

    .class-menu-secondary-item {
      height: 100px;
      width: 100px;

      img {
        width: 75px;
      }

      p {
        font-size: 12px;
      }
    }
  }
}
</style>
