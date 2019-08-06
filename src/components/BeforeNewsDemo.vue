<template>
  <div class="scroll" ref="scroll">
    <template v-if="beforeStories.length > 0">
      <div v-for="(dayStories, outIndex) in beforeStories" :key="outIndex">
        <news-item
          v-for="(story, innerIndex) in dayStories.stories"
          :key="innerIndex"
          :story="story"
        ></news-item>
      </div>
    </template>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import NewsItem from "./NewsItem";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    NewsItem
  },
  computed: {
    ...mapState({
      beforeStories: state => state.beforeStories,
      date: state => state.date
    })
  },
  // beforeMount() {
  //   this.loadData();
  // },
  methods: {
    ...mapActions(["getBeforeStories"]),
    loadData() {
      this.getBeforeStories({
        type: "newsbydate",
        param:
          this.beforeStories.length > 0
            ? this.beforeStories[this.beforeStories.length - 1].date
            : this.date
      }).then(() => {
        console.log(this.beforeStories[this.beforeStories.length - 1].date);
        console.log(this.date);
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.scroll, {});
            this.scroll.on("scrollEnd", () => {
              // 下拉动作
              if (this.scroll.y <= this.scroll.maxScrollY + 50) {
                this.loadData();
              }
            });
          } else {
            this.scroll.refresh();
          }
        });
      });
    }
  }
};
</script>

<style></style>
