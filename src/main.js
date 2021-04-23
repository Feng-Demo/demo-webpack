//整个项目的入口文件
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

import "./style/normalize.css";     //初始化样式文件
import "./style/index.less";        //样式文件


Vue.use(VueRouter);

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
// var temp = {
//     components:{
//         App:app,
//         Img:img,
//     },
//     template:'<div><App/><Img/></div>'
// };

/**
 * 新版本编译时不支持这种写法
 * */
// new Vue({
//     el:'#app',
//     components:{
//         Temp:temp
//     },
//     template:'<Temp />'
// });

/**
 * 小坑1  加上{} 后需要 return
 * render: h => h(App) 等同于 render: h => { return h(App) }
 * render: h => { h(App) }  =（正确写法）=>  render: h => { return h(App) }
 * 如果箭头函数的函数体只有一句代码，就是简单返回某个变量或者返回一个简单的JS表达式，可以省去函数体的大括号{ }。
 *
 * 小坑2 new Vue({}) 中的 router 不可以随意命名
 * */
// const Foo = { template: '<div>foo</div>' };
// const Bar = { template: '<div>bar</div>' };
//
// const routes = [
//     { path: '/', component:Foo },
//     { path: '/bar', component: Bar }
// ];


//IE 不识别箭头函数报错
import routes from './router/index';

const router = new VueRouter({
    routes
});

new Vue({
    el:'#app',
    router: router,
    render: h => h(App)
});
