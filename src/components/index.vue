<!--  -->
<template>
  <div class='main'>
    <div class="banner"></div>
    <div class="recommend">
      <div class="recommend_box">
        <div class="recommend_title">
          <span>强档推荐</span>
          <span class="line"></span>
        </div>        
        <div class="recommend_content">
          <div class="content-box"></div>
          <div class="content-box"></div>
        </div>
      </div>
    </div>
    <div class="updateTable">
      <div class="updateTable_box">
        <div class="updateTable_title">
          <span>更新时间表</span>
          <span class="line"></span>  
        </div>
        <div class="updateTable_content"></div>
      </div>
    </div>
    <div class="floatNav"></div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
// import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
  .main {
    width: 1200px;
    margin: 0 auto;

    //banner栏
    .banner {
      width: 100%;
      height: 480px;
      background: rgb(204, 204, 204);
    }

    // 强档推荐 
    .recommend {
      height: 1020px;
      width: 100%;
      background: rgb(170, 170, 170);
      padding: 65px 60px 100px;
      .recommend_box {
        width: 100%;
        height: 100%;
        background: goldenrod;
        .recommend_title {
          height: 55px;
          width: 100%;
          background: red;
        }
        .recommend_content {
          height: 100%;
          width: 100%;
          background: green;
          .content-box {
            display: flex;
            .box {
              flex: 1;
              height: 360;
            }
          }
        }
      }
    }

    // 更新时间表
    .updateTable {
      height: 992px;
      width: 100%;
      background: rgb(170, 170, 170);
      padding: 0px 24px 76px 55px;
      .updateTable_box {
        width: 100%;
        height: 100%;
        background: yellow;
        .updateTable_title {
          height: 55px;
          width: 100%;
          background: red;
        }
        .updateTable_content {
          width: 100%;
          height: 100%;
          background: green;
        }
      }
    }
    .floatNav {

    }
  }
</style>
