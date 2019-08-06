<template>
  <div class="news-item" @click="$emit('click-enter', story.id)">
    <p class="title">{{ story.title }}</p>
    <img class="image" :src="modifyImage(story.images[0])" />
  </div>
</template>

<script>
import modifyImage from "../utils/image403";
export default {
  name: "news-item",
  props: {
    story: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    modifyImage
  }
};
</script>

<style lang="stylus">
.news-item
  display flex
  justify-content space-between
  height 90px
  padding 10px 12px
  background-color white
  border-radius 3px
  box-shadow 0 4px 10px 0 #ddd
  margin-bottom 8px
  .image
    height 90px
    padding-left 8px
  .title
    text-align left
    line-height 24px
    font-size 14px
</style>
