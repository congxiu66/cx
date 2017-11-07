var express = require('express');

var server = express();

//server.get('/', function(req, res){
//	console.log('有get')
//})

server.use('/', function(req, res){
	console.log('看源码控制台')
})
server.use('/a.html', function(req, res){
	res.send('abc');
	res.end();
})
server.listen(8080);
