import Vue from "vue";

// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  /* eslint-disable no-unused-vars */
  Style,
  // basic
  Loading,
  // popup
  Dialog,
  // scroll
  Scroll,
  Slide
} from "cube-ui";

Vue.use(Loading);
Vue.use(Dialog);
Vue.use(Scroll);
Vue.use(Slide);
