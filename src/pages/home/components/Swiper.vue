<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgurl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default{
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: true,
        speed: 3000,
        loop: true,
        autoplayDisableOnInteraction: false
      },
      swiperList: [{
        id: '001',
        imgurl: require('../../../assets/images/Swiper1.jpg')}, {
        id: '002',
        imgurl: require('../../../assets/images/Swiper2.jpg')}, {
        id: '003',
        imgurl: require('../../../assets/images/Swiper3.jpg')}, {
        id: '004',
        imgurl: require('../../../assets/images/Swiper4.jpg')}, {
        id: '005',
        imgurl: require('../../../assets/images/Swiper5.jpg')
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    // background: #333
  .swiper-img
    width: 100%
</style>
