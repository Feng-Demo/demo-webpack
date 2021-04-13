`终端命令  main:入口文件  build:输出文件`
webpack ./main.js ./build.js
可以直接生成打包文件

##### 项目目录

````
src： 主文件
  > assets：静态资源
    >> img：图片资源
  > style: 样式文件
    >> index.css：样式主文件
  > app.vue：vue主文件
  > main.js：主入口文件
.gitignore：git不提交目录
index.html：主html文件
package.josn：组件集合
package-lock.json：锁定安装时的包的版本号
README.md：备注文件
webpack.dev.config.js：本地项目编译
webpack.prod.config.js：线上项目编译
````

##### package.json


````
name: 项目名称
version：项目版本
description：项目描述
main：指定项目的入口文件
script:运行环境脚本
  > dev：本地项目启动命令
  > prod：线上项目启动命令
keywords:关键次
author：作者
license：许可证
devDependencies：用于本地环境开发时候
  > css-loader：编译css文件
  > html-webpack-plugin：编译生成html文件
  > style-loader：编译样式文件
  > url-loader：编译图片，可以把图片编译成base64
  > vue：构建用户界面的渐进式框架
  > vue-template-compiler：vue-loader引用，将 Vue 2.0 模板预编译为渲染函数（template => ast => render）
  > webpack：打包编译工具,把浏览器不能识别的预演编译成能识别的，例：ES6=>ES5
  > webpack-dev-server：启动本地服务器，实时更新代码
dependencies：生产环境
````
