<template>
<div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page,index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgurl">
        </div>
        <p class="icon-desc">{{ item.desc }}</p>
      </div>
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconsList: [{
        id: '0001',
        imgurl: require('../../../assets/images/icons1.png'),
        desc: '景点门票'
      }, {id: '0002',
        imgurl: require('../../../assets/images/icons2.png'),
        desc: '一1日游'
      }, {id: '0003',
        imgurl: require('../../../assets/images/icons3.png'),
        desc: '杭州必游'
      }, {id: '0004',
        imgurl: require('../../../assets/images/icons4.png'),
        desc: '打卡圣地'
      }, {id: '0005',
        imgurl: require('../../../assets/images/icons5.png'),
        desc: '旅游清单'
      }, {id: '0006',
        imgurl: require('../../../assets/images/icons6.png'),
        desc: '西湖'
      }, {id: '0007',
        imgurl: require('../../../assets/images/icons7.png'),
        desc: '泡温泉'
      }, {id: '0008',
        imgurl: require('../../../assets/images/icons8.png'),
        desc: '西溪湿地'
      }, {id: '0009',
        imgurl: require('../../../assets/images/icons9.png'),
        desc: '千岛湖'}]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: -.3rem
    .icon
      overflow: hidden
      float: left
      width: 25%
      padding-bottom: 25%
      position: relative
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
        text-align: center
        ellipsis()
</style>
