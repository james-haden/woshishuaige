/*
 * @FilePath: /l2/http.js
 * @Author: Florence
 * @Date: 2020-10-20 08:50:31
 * @Last Modified By: Florence
 * @LastEditTime: 2020-10-20 09:43:15
 */

const http = require('http');

// 创建服务
http.createServer((req, res) => {
	if (req.url == '/api/list') {
		res.end(JSON.stringify({name: "zs"}));
	} else if (req.url == '/api/add') {
		res.end('add-------');
	} else {
		res.end('{}');
	}
}).listen(3000);

// let buf = new Buffer('dfghj');
// let str = buf.toString();
// console.log(buf, '--------')
// console.log(str, '++++++++++')

let opt = {
	port: 3000, // 端口号
	host: "localhost", // 请求域名
	method: "get", // 请求类型
	path: '/api/add'
};

let body = '';

// 发起请求
let req = http.request(opt, (req, res) => {
	req.on('data', (data) => {
		body += data.toString();
		console.log(body);
	})
	req.on('end', (data) => {
		console.log('end------', data);
	})
	req.on('error', (err) => {
		console.log('error:' + err);
	})
})

// 结束响应
req.end();
// $ git 
// $ git init (初始化git环境)
// $ git clone ssh-url(git仓库地址)
// $ git add  (添加要提交的代码)
// $ git commit -m '提交信息'	(添加提交信息说明)
// $ git branch -M main	(在本地新建一个main分支)
// $ git checkout -b ljj	(新建并切换到XXX分支)
// $ git pull origin main(拉取远程最新代码)
// $ git push origin main	(提交本地代码到github仓库)；