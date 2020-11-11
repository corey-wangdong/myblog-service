var express = require('express');

var service = express();

service.use((req, res, next)=>{
    console.log('-----------------------')
    res.setHeader("Access-Control-Allow-Origin", "*")
    console.log("通过设置Header解决跨域问题");
    next()
})

service.post('/req', function(req,res) {
    console.log('------------',req.query)
    console.log('------------',req)
    // console.log("++++++++++++++++",res)
})
// service.post('/login', function(req,res) {
//     console.log('+++++++++++',req.query)
//     // console.log(res)
// })


service.listen(5000, () => {
    console.log('服务器启动成功，正在监听5000端口')
})