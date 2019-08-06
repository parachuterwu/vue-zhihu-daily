export default {
  setTopStories(state, topStories) {
    state.topStories = topStories;
  },
  setTodayStories(state, todayStories) {
    state.todayStories = todayStories;
  },
  setDate(state, todayDate) {
    state.date = todayDate;
  },
  addBeforeStories(state, beforeStories) {
    state.beforeStories.push(beforeStories);
  }
};
