import Vue from "vue";
import { Dialog } from "cube-ui";
import axios from "axios";

Vue.use(Dialog);

const apiZhihu = {
  news: "/api/4/news/latest",
  newsbyid: "/api/4/news/",
  newsbydate: "/api/4/news/before/",
  newsinfo: "/api/4/story-extra/"
};

function errorNoti(error) {
  console.log(error.response);
  const {
    response: { status, statusText }
  } = error;
  let errDialog = Dialog.$create({
    content: `<div>${status}: ${statusText}</div>`
  });
  errDialog.show();
  return Promise.reject(error);
}

function request({ type, param }) {
  if (type === "news" || type === "topics") {
    param = "";
  }
  return axios
    .get(apiZhihu[type] + param)
    .then(response => {
      return response;
    })
    .catch(error => {
      errorNoti(error);
    });
}

export default request;
