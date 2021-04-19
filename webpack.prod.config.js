//webpack ./main.js  ./build.js
const path = require('path');   //处理路径
const htmlWebpackPlugin = require('html-webpack-plugin');   //生成html文件
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'./dist'),  //打包文件输出目录
        // publicPath:'./dist/',   //打包之后的文件需要配置访问路径
        filename: 'build.js'    //打包完成输出文件名称
    },
    module: {
        loaders: [
            {
                test: /\.vue/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(jpg|jpeg|gif|png|sug)/,
                loader: 'url-loader?limit=5000'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({ //生成html文件
            template: './index.html'
        })
    ],
    /**
     * vue有两种形式的代码 compiler（模板）模式和runtime模式（运行时），vue模块的package.json的main字段默认为runtime模式， 指向了"dist/vue.runtime.common.js"位置。
     * alias 重定向vue引入文件目录
     * */
    resolve: {  //解决
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
        }
    }
};