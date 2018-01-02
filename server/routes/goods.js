var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

// 连接mongodb数据库 mongoose.Promise = global.Promise;
// mongodb://127.0.0.1:27017/db_goods
mongoose.connect('mongodb://root:abc123@ds135747.mlab.com:35747/db_goods', {useMongoClient: true});

// 连接成功
mongoose
    .connection
    .on("connected", function () {
        console.log("MongoDB connected success")
    });

// 连接报错
mongoose
    .connection
    .on("error", function () {
        console.log("MongoDB connected fail")
    });

// 连接断开
mongoose
    .connection
    .on("disconnected", function () {
        console.log("MongoDB connected disconnected")
    });

router.get("/", function (req, res, next) {
    // res.send('商品列表');
    Goods.find({}, function (err, doc) {
        if (err) {
            res.json({status: '1', msg: err.message});
        } else {
            res.json({
                status: '0',
                msg: '',
                result: {
                    count: doc.length,
                    list: doc
                }
            });
        }
    });
});

module.exports = router;