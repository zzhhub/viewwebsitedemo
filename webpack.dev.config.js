const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');

//模拟客户端的server
//express+json-server
const express = require('express');
const app = express();
const appData = require('./db.json');
const seller = appData.seller;
const goods = appData.goods;
const apiRoutes = express.Router();
app.use('/api', apiRoutes);

//express+body-parser
//const express = require('express');
//const app = express();
//const bodyParser = require('body-parser');
////create application/json parser
//app.use(bodyParser.json());
////create application/x-www-form-urlencoded parser
//app.use(bodyParser.urlencoded({ extended:true }));
//const apiRoutes = express.Router();
//apiRoutes.get('/',function(req,res){
//    res.json({message:'welcome to our api!'});
//});
//apiRoutes.route('/:apiName')
//    .all(function(req,res){
//        fs.readFile('./db.json','utf8',function(err,data){
//            if (err) throw err
//            const data = JSON.parse(data);
//            if(data[req.params.apiName]){
//                res.json(data[req.params.apiName])
//            }
//            else{
//                res.send('no such api name')
//            }
//        })
//    });

fs.open('./src/config/env.js', 'w', function (err, fd) {
    const buf = 'export default "development";';
    fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer){});
});

module.exports = merge(webpackBaseConfig, {
    devtool: '#source-map',
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './src/template/index.ejs',
            inject: false
        })
    ],
    //���ÿ������
    devServer: {
        before(app) {
            app.get('/api/goods', (req, res) => {
                res.json({
                    errno: 0,
                    data: goods
                })
            //接口返回json数据，上面配置的数据seller就赋值给data请求后调用
            }),
            app.get('/api/seller', (req, res) => {
                res.json({
                    errno: 0,
                    data: seller
                })
            //接口返回json数据，上面配置的数据seller就赋值给data请求后调用
            }),
            app.post('/api/goods', function (req, res) {
                res.json({
                    errno: 0,
                    data: goods
                });
            })
        },
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
                pathRewrite: {'^/api' : '/'},
                //����
                changeOrigin: true
            }
        }
    }
});