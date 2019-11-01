<!--  -->
<template>
  <div class='main'>
    <div class="productIntroduce">
      <div class="productIntroduce_box">
        <div class="future_img">
          <img src="" alt="">
        </div>
        <div class="future_introduce">

        </div>
      </div>
    </div>
    <div class="productChapter">
      <div class="productChapter_box">
        <div class="productChapter_title">章节列表</div>
        <div class="productChapter_content"></div>
      </div>
    </div>
    <div class="productRecommend">
      <div class="productRecommend_box">
        <div class="productRecommend_title">相关推荐</div>
        <div class="productRecommend_content">
          <div class="recommend" v-for="i in 5" :key="i"></div>
        </div>
      </div>
    </div>
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

    // 作品介绍
    .productIntroduce {
      width: 100%;
      height: 446px;
      // background: rbg(170, 170, 170);
      background: yellow;
      padding: 46px 100px 0px 42px;
      .productIntroduce_box {
        width: 100%;
        height: 100%;
        background: pink;
        .future_img {
          img {
            width: 320px;
            height: 126px;
          }
        }
        .future_introduce {

        }
      }
    }

    // 章节列表
    .productChapter {
      width: 100%;
      height: 730px;
      background: pink;
      padding: 48px 50px 110px;
      .productChapter_box {
        width: 100%;
        height: 100%;
        background: green;
        overflow: hidden;
        .productChapter_title {
          height: 46px;
          width: 100%;
          background: red;
        }
        .productChapter_content {
          height: 100%;
          width: 100%;
          background: yellow;
        }
      }
    }

    // 相关推荐
    .productRecommend {
      height: 358px;
      width: 100%;
      background: goldenrod;
      padding: 0px 30px 48px;
      .productRecommend_box {
        background: 100%;
        height: 100%;
        background: yellow;
        overflow: hidden;
        .productRecommend_title {
          height: 46px;
          width: 100%;
          background: red;
        }
        .productRecommend_content {
          height: 100%;
          width: 100%;
          background: pink;
          .recommend {
            width: 188px;
            height: 251px;
          }
        }
      }
    }
  }
</style>
