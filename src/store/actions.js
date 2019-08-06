import request from "../api/index";

export default {
  getLatestStories({ commit }) {
    request({
      type: "news"
    }).then(res => {
      let topStories = res.data.top_stories;
      let todayStories = res.data.stories;
      let todayDate = res.data.date;
      commit("setTopStories", topStories);
      commit("setTodayStories", todayStories);
      commit("setDate", todayDate);
    });
  },
  getBeforeStories({ commit, state }, payload) {
    let date = "";
    // 如果没有数据，则使用全局的date日期
    if (state.beforeStories.length === 0) {
      date = state.date;
    } else {
      date = state.beforeStories[state.beforeStories.length - 1].date;
    }
    return request({
      type: payload.type,
      param: date
    }).then(res => {
      let beforeStories = res.data;
      commit("addBeforeStories", beforeStories);
    });
  }
};
