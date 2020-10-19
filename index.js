const http = require('http');


//创建端口号为3000的服务
http.createServer((rep,res) =>{
    //
    res.end('hello world');

}).listen(8080);