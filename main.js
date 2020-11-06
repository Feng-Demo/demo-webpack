//整个项目的入口文件

import Vue from './vue.js';

import app from './app.js';

/** 单个引入
  import {num1,num2,add} from './app.js';

  console.log(num1);    //2
  console.log(num2);    //3
  console.log(add(num1,num2));    //5
 */

/** 全部引入
  import * as obj from './app';

  console.log(obj);
  console.log(obj.num1);    //2
  console.log(obj.num2);    //3
  console.log(obj.add(obj.num1,obj.num2));    //5
 *
 * */



new Vue({
  el:'#app',
  components:{
    App:app
  },
  template:'<App />'
});
