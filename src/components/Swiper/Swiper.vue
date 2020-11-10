<template>
  <div class="swiper-container" ref="Swiper">
      <!-- 轮播图片 -->
       <div class="swiper-wrapper">
         <slot></slot>
       </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>
// 引入 Swiper 核心js文件 和  Swiper样式
import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.css'

export default {
  name: 'Swiper',
  props: {
    autoplay: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    var that = this
    // 要在获取到真实BOM节点才可以，故写在mounted
    /*
      解决组件间复用的关键是：实例化当前这个DOM节点
      解决方案：
        1 this.$refs.XXX (官方推荐)
        2 this.$el
    */
    /* eslint-disable */ 
    new Swiper(this.$refs.Swiper, {
      loop:true,
      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true
      } : false,
      pagination: {
        el: '.swiper-pagination',
      },
      on : {
        slideChangeTransitionEnd: function () {
          // console.log(this.activeIndex)
          // console.log(this.realIndex)
          // 触发一个自定义事件
          /*
            这里涉及一个问题：子到父传值，此时应该调用Vue组件的$emit,但当前的this是new Swiper实例中的this
          */ 
          that.$emit('change', this.realIndex)
        }
      }
    })
    /* eslint-enable */
  }
}
</script>
<style lang="scss" scoped>
  .swiper-container{
    width: 100%;
    height: 180px;
    font-size: 20px;
  }
</style>
<style lang="scss">
    .swiper-pagination-bullet {
      opacity: 1;
      vertical-align: middle;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: hsla(0, 0%, 100%, 0.7);
    }

    .swiper-pagination-bullet-active {
      width: 20px;
      height: 10px;
      background: url("../../assets/icon/dot.png") no-repeat;
      background-size: 100%;
    }
</style>
