//webpack ./main.js  ./build.js
const path = require('path');   //处理路径
const htmlWebpackPlugin = require('html-webpack-plugin');   //生成html文件
module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname,'./dist'),  //打包文件输出目录
        // publicPath:'./dist/',   //打包之后的文件需要配置访问路径
        filename: 'build.js'    //打包完成输出文件名称
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
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
    ]
};