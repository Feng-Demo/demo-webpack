//整个项目的入口文件

import Vue from './vue.js';

import app from './app.js';

new Vue({
  el:'#app',
  components:{
    App:app
  },
  template:'<App />'
});
