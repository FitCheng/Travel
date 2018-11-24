<template>
<div>
    <div class="title">热销推荐</div>
    <ul>
      <li v-for="item of recommendList" :key="item.id" class="item" border-bottom>
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgurl">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgurl: require('../../../assets/images/recommend1.jpg'),
        title: '印象西湖',
        desc: '爱，本是彼此心灵的一句承诺，本是两心一次朴素的妙合。只要心神相依。便能在无比美妙的爱之世界里，品得亲密。如鱼得水。天地和欢。'
      }, {
        id: '0002',
        imgurl: require('../../../assets/images/recommend2.jpg'),
        title: '杭州乐园',
        desc: '杭州乐园是长三角地区的综合性主题公园，旨在打造“主题突出、晴雨皆宜、老少同乐”的独特混搭体验。园区分为玛雅部落、失落丛林、冒险岛等主题区域，拥有悬挂过山车、雨神之锤、风神之手、海盗船、穿越云霄、丛林迷旋等数十项惊险刺激的大型游乐项目，虫虫特工队、音乐船、碰碰车等数十项儿童游乐项目。'
      }, {
        id: '0003',
        imgurl: require('../../../assets/images/recommend3.jpg'),
        title: '杭州江和美海洋公园',
        desc: '江和美海洋馆占地8000m²，集海洋生物观赏、科普教育、亲子互动、高科技体验于一体，提升孩子的海洋知识以及对海洋的保护意识。全新的互动惊喜，开创新的社会商业模式。'
      }, {
        id: '0004',
        imgurl: require('../../../assets/images/recommend4.jpg'),
        title: '临安湍口众安氡温泉',
        desc: '临安湍口众安氡温泉不仅能促进血液循环，加速新陈代谢，且温泉本身的矿物质透过表皮渗入身体皮肤时，其美容、美肤效果更为突显。消除疲劳，促进新陈代谢，与日光浴相结合。'
      }, {
        id: '0005',
        imgurl: require('../../../assets/images/recommend5.jpg'),
        title: '杭州云曼温泉',
        desc: '杭州云曼温泉以和式的建筑风格，还原了泡汤文化的精髓，其水质天然、神奇独特，拥有雨林气泡泉、原汤部落、湘居花舍、天竺草堂四大区域33个泡池，让您尽享养生与休闲的完美体验。'
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
    background: #ddd
    text-index: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .54rem
      color: #999
      ellipsis()
    .item-button
      margin-top: .1rem
      margin-left: 4.2rem
      padding: .06rem
      background: #ff9300
      border-radius: .1rem
      color: #fff
      font-size: .25rem
</style>
