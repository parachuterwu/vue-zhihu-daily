<template>
  <div class="slide">
    <cube-slide :auto-play="true" ref="slide" :data="topStories">
      <cube-slide-item
        v-for="(item, index) in topStories"
        :key="index"
        @click.native="$emit('click-enter', item.id)"
      >
        <a>
          <img :src="modifyImage(item.image)" />
          <div class="title">{{ item.title }}</div>
          <div class="mask"></div>
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
import modifyImage from "../utils/image403";

export default {
  name: "slide-show",
  props: {
    topStories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    modifyImage
  }
};
</script>

<style lang="stylus" scoped>
.cube-slide
  >>>.cube-slide-dots
    bottom 6px
  .cube-slide-item
    height 240px
    position relative
    a
      img
        height auto
        width 100%
        position relative
        top -20%
      .title
        position absolute
        color white
        white-space normal
        top 78%
        left 5%
        right 5%
        line-height 20px
        text-align left
        z-index 2
      .mask
        width 100%
        height 100%
        position: absolute
        left 0
        top 0
        background linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
</style>
