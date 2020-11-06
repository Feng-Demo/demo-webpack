//webpack ./main.js  ./build.js
module.exports = {
  // entry: './main.js',
  entry: {
    main:'./main.js'
  },
  output: {
    filename:'./build.js'
  },
  watch:true,
  module:{
    loaders:[
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      },
      {
        test:/\.(jpg|jpeg|gif|png|sug)/,
        loader:'url-loader?limit=133,404'
      }
    ]
  }
};