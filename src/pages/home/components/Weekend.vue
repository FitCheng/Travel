<template>
<div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="item of List" :key="item.id" border-bottom>
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
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
    margin-top: .1rem
    line-height: .8rem
    text-index: .2rem
    font-size: .4rem
    color: #00afc7
    background: #ddd
    text-align: left
  .item-img-wrapper
    padding-top: .1rem
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
