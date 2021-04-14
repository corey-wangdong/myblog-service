var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

let dbCollection = mongoose.model('corey', {
    name:String,
    age:Number,
    sex:String
})

// 引入数据
    // 1. 页面初始化数据
var blogInitData = require('./mock/initState.json')

    // 2、记忆训练数据
let memoryData = require('./mock/memoryData.json')

const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://corey:<password>@cluster0.iiv9h.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


var service = express();

var uE= bodyParser.urlencoded({extended:false});

service.use(bodyParser.json());
service.use(bodyParser.urlencoded({ extended: false }));  

///设置允许跨域访问
service.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

service.post('/req',uE,function(req,res) {
    console.log('------------req',req.body)

    // mongoose.connect('mongodb://localhost:27017/bb', {useNewUrlParser:true}, function(err) {

    // })

    const uri = "mongodb+srv://corey:<corey2020.>@cluster0.iiv9h.mongodb.net/<corey>?retryWrites=true&w=majority";

    res.send('来了老弟')


    // console.log("++++++++++++++++",res)
})

service.get('/login', function(req,res) {
    console.log('++++++login',req.query)

    let username = req.query.username;
    if(username === 'corey') {
        res.send({status:0,data:'登陆成功'})
    }
    
    // console.log(res)
})

// 获取页面初始化数据
service.get('/initData', function(req,res) {
    console.log('++++++initData',req.query)
    res.send({status:0,info:'亲页面数据获取成功',data:blogInitData})
})

// 获取记忆训练的数据
service.get('/memory_data', function(req,res) {
    console.log('++++++xunLian',req.query)
    res.send({status:0,info:'记忆训练数据获取成功',data:memoryData})
})

service.listen(5000, () => {
    console.log('服务器启动成功，正在监听5000端口')
})