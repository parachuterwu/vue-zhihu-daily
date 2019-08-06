# vue-zhihu-daily

## 预览
![image](https://raw.githubusercontent.com/wrzkkk/vue-zhihu-daily/master/src/assets/demo/demo.png)

## 技术栈和相关问题
* vue + vue-router + vuex 全家桶
* vue-cli3脚手架
* 使用了cube-ui组件库：Loading用于加载提示, Dialog用于错误提示, Scroll用于滚动加载, Slide用于轮播图
* css预处理器为stylus
* axios请求知乎接口
* moment用于格式化日期时间
* 适配移动端用的是viewport，vw的兼容方案请参阅[如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)
* 使用axios获取的图片url直接放在img的src属性中，出现403的错误，[【前端】解决访问api图片403禁止访问问题](https://segmentfault.com/a/1190000011628835)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 致谢
* [izzyleung](https://github.com/izzyleung) 整理的 [知乎日报 API 分析](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)
* [andefine](https://github.com/andefine) 的 [vue-zhihu-daily](https://github.com/andefine/vue-zhihu-daily)
