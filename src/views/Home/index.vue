<template>
  <div class = 'page-home'>
    <header class="index-header">
      <a href="mine.html?cpid=0">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>
      <div class="header-logo"></div>
      <a href="search.html?cpid=0">
        <div class="header-search"></div>
      </a>
    </header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.css'
export default {
  name: 'Home',
  mounted () {
    // 要在获取到真实BOM节点才可以，故写在mounted
    /* eslint-disable */ 
    new Swiper('.swiper-container', {
      loop:true,
      pagination: {
        el: '.swiper-pagination',
      }
    })
    /* eslint-enable */
  }
}

</script>

<style lang='scss' scoped>
.page-home{
  display: flex;
  flex-direction: column;
  height: 100%;
  .index-header {
    display: flex;
    height: 44px;
    //三者等分平铺
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    .user-btn{
      width: 25px;
      height: 25px;
      background: url(~@/assets/icon/user-btn.png);
      background-size: 100%;
    }
    .header-logo{
      width: 92px;
      height: 28px;
      background: url(~@/assets/logo.png) no-repeat;
      background-size: 100%;
    }
    .header-search{
       width: 25px;
      height: 25px;
      background: url(~@/assets/icon/header-search.png);
      background-size: 100%;
    }
  }
  .swiper-container{
    width: 100%;
    height: 170px;
  }
}
</style>
