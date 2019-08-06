import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topStories: [], // SlideShow中需要用到的
    todayStories: [], // 今日要闻
    date: "", // 当前日期，格式‘20180819’，表示2018-08-19
    beforeStories: [] // 今天之前的新闻
  },
  mutations,
  actions
});
