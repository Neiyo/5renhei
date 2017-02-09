var webpack = require('webpack');

require("babel-core").transform("code", {
  plugins: ["transform-runtime"]
});

module.exports = {
    //页面入口文件配置
    entry: {
        index : './src/index.js'
    },
    //入口文件输出配置
    output: {
        path: './public',
        filename: 'bundle.js'
    },

    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
              test: /\.js/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              query:{
                presets:['es2015', 'react', 'stage-0']
              }
            },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};
