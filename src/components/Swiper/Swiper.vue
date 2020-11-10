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
  mounted () {
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
      pagination: {
        el: '.swiper-pagination',
      }
    })
    /* eslint-enable */
  }
}
</script>

//  我现在想要重新写小圆点，引入swiper，浏览器就会加载出小圆点的样式，不能放在scoped(只会合并或者是权重相同没有效果)，想要实现全局改变，就要放在全局，而不是局部
<style lang="scss">
   .swiper-container{
        width: 100%;
        height: 170px;
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
  }
</style>
