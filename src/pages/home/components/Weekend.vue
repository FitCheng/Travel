<template>
<div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="item of recommendList" :key="item.id" border-bottom>
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgurl">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgurl: require('../../../assets/images/weekend1.jpg'),
        title: '承载杭城的历史之地',
        desc: '饱经沧桑的地方诉述着这座城的段段衷肠'
      }, {
        id: '0002',
        imgurl: require('../../../assets/images/weekend2.jpg'),
        title: '泡汤好去处',
        desc: '泡在氤氲的温泉中，聆听冬天脚步的声音'
      }, {
        id: '0003',
        imgurl: require('../../../assets/images/weekend3.jpg'),
        title: '温州动人秋色',
        desc: '细数温州那些美到陶醉的赏秋地'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    text-index: .2rem
    font-size: .4rem
    color: #00afc7
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .54rem
      color: #999
      ellipsis()
</style>
