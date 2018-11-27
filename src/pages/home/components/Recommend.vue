<template>
<div>
    <div class="title">热门推荐</div>
    <ul>
      <router-link
        tag="li"
        v-for="item of List"
        :key="item.id"
        class="item"
        border-bottom
        :to="'/detail/' + item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    List: Array
  },
  data () {
    return {
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
    color: #00afc7
    font-size: .4rem
    text-align: left
  .item
    text-align: left
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
      padding: .06rem
      background: #ff9300
      border-radius: .1rem
      color: #fff
      font-size: .25rem
</style>
