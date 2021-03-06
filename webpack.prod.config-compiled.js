var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
var fs = require('fs');

fs.open('./src/config/env.js', 'w', function (err, fd) {
    var buf = 'export default "production";';
    fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer) {});
});

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '/dist/',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].chunk.js'
    },
    plugins: [new ExtractTextPlugin({
        filename: '[name].[hash].css',
        allChunks: true
    }), new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: 'vendors.[hash].js'
    }), new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }), new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }), new HtmlWebpackPlugin({
        filename: '../index_prod.html',
        template: './src/template/index.ejs',
        inject: false
    })],
    //���ÿ������
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8090,
        stats: { colors: true },
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

//# sourceMappingURL=webpack.prod.config-compiled.js.map