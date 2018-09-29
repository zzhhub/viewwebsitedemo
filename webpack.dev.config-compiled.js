var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
var fs = require('fs');

fs.open('./src/config/env.js', 'w', function (err, fd) {
    var buf = 'export default "development";';
    fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer) {});
});

module.exports = merge(webpackBaseConfig, {
    devtool: '#source-map',
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true
    }), new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: 'vendors.js'
    }), new HtmlWebpackPlugin({
        filename: '../index.html',
        template: './src/template/index.ejs',
        inject: false
    })],
    //���ÿ������
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: { colors: true },
        port: 8090,
        proxy: {
            //ƥ������url
            '/api': {
                // Ŀ���������ַ
                target: 'https://api.douban.com',
                //·����д
                pathRewrite: { '^/api': '/' },
                //����
                changeOrigin: true
            }
        }
    }
});

//# sourceMappingURL=webpack.dev.config-compiled.js.map