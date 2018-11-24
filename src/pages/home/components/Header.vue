<template>
  <div>
   <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点/游玩主题
    </div>
    <div class="header-right">
      {{ city }}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</div>
</template>

<script>
export default{
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    font-size: 0.32rem
    .header-left
      width: .64rem
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      text-align: left
      background: #fff
      margin-top: .12rem
      padding-left: .2rem
      margin-left: .2rem
      border-radius: 5px
      color: #ccc
    .header-right
      width: 1.24rem
      text-align: center
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
