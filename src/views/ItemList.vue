<template>
  <div class="home">
    <v-header />
    <div class="content">
      <cube-scroll
        ref="before"
        :data="beforeStories"
        :options="options"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp"
      >
        <slide-show :top-stories="topStories" @click-enter="enterNewsDetail" />

        <div class="stories">
          <div class="today-stories">
            <div class="today-title">今日热闻</div>
            <template v-if="todayStories">
              <news-item
                v-for="todayStory in todayStories"
                :key="todayStory.id"
                :story="todayStory"
                @click-enter="enterNewsDetail"
              ></news-item>
            </template>
          </div>

          <div class="before-stories">
            <div
              class="one-day-before"
              v-for="(dayStories, outIndex) in beforeStories"
              :key="outIndex"
            >
              <div class="before-title">{{ formatDate(dayStories.date) }}</div>
              <news-item
                v-for="beforeStory in dayStories.stories"
                :key="beforeStory.id"
                :story="beforeStory"
                @click-enter="enterNewsDetail"
              ></news-item>
            </div>
          </div>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import modifyImage from "../utils/image403";
import VHeader from "../components/VHeader";
import SlideShow from "../components/SlideShow";
import NewsItem from "../components/NewsItem";

import moment from "moment";

import { mapState, mapActions } from "vuex";

export default {
  name: "item-list",
  components: {
    VHeader,
    SlideShow,
    NewsItem
  },
  data() {
    return {
      options: {
        pullDownRefresh: true,
        pullUpLoad: true,
        scrollbar: true
      }
    };
  },
  computed: {
    ...mapState({
      topStories: state => state.topStories,
      todayStories: state => state.todayStories,
      beforeStories: state => state.beforeStories
    })
  },
  created() {
    if (this.topStories.length === 0) {
      this.$store.dispatch("getLatestStories");
    }
  },
  methods: {
    modifyImage,
    ...mapActions(["getBeforeStories"]),
    onPullingUp() {
      this.getBeforeStories({
        type: "newsbydate"
      });
    },
    onPullingDown() {},
    formatDate(dateString) {
      moment.locale("zh-cn");
      return moment(dateString, "YYYYMMDD").format("MM月DD日 dddd");
    },
    enterNewsDetail(id) {
      this.$router.push({ name: "newsDetail", params: { id } });
    }
  }
};
</script>

<style lang="stylus" scoped>
.home
  height 100vh
  background #f3f3f3
  overflow scroll
  .content
    padding-top 50px
    height 625px
    .stories
      padding 0 8px
      .today-title
      .before-title
        text-align left
        margin 10px 0
        font-size 13px
        padding-left 6px
</style>
