<template>
  <div class="news-detail">
    <div class="loading" v-if="loading">
      <cube-loading :size="28"></cube-loading>
    </div>
    <link rel="stylesheet" :href="story.css" />
    <div class="detail-cotainer">
      <div class="detail-header" @click="back">
        <i class="cubeic-back"></i>
      </div>
      <div class="top" v-if="story.image">
        <img class="img" :src="modefyImage(story.image)" alt="" />
        <div class="mask"></div>
        <span class="title">{{ story.title }}</span>
        <span class="image-source">{{ story.image_source }}</span>
      </div>
      <div class="body" v-html="modefyImage(story.body)"></div>
    </div>
  </div>
</template>

<script>
import modefyImage from "../utils/image403";
import request from "../api/index";

export default {
  name: "news-detail",
  components: {},
  data() {
    return {
      loading: false,
      story: {},
      id: this.$route.params.id
    };
  },
  methods: {
    modefyImage,
    getNews() {
      this.loading = true;
      request({
        type: "newsbyid",
        param: this.id
      }).then(res => {
        this.story = res.data;
        this.loading = false;
      });
    },
    back() {
      this.$router.go(-1);
    }
  },
  created() {
    this.getNews();
  }
};
</script>

<style lang="stylus" scoped>
.news-detail
  text-align left
  >>>.meta
    font-size 13px
  >>>p
  >>>ul
  >>>li
    font-size 14px
  .loading
    position absolute
    height 100vh
    width 100vw
    .cube-loading
      position absolute
      top 50%
      left 50%
      transform translateX(-50%)
.detail-cotainer
  .top
    height 240px
    overflow hidden
    position relative
    padding-top 50px
    .img
      width 100%
      height auto
      transform translateY(-50%)
      position absolute
      left 0
      top 50%
    .title
      position absolute
      left 5%
      top 83%
      color white
      white-space normal
    .image-source
      position absolute
      right 2%
      top 92%
      color rgba(255,255,255,0.5)
      font-size 12px
  .body
    >>>.headline
      border-bottom none
      .img-place-holder
        display none
.detail-header
  height 50px
  background #0096ff
  color white
  line-height 50px
  padding-left 12px
  position fixed
  width 100%
  z-index 10
</style>
