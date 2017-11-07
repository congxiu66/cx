
/* 地址栏访问 http://localhost:8085/login?user=blue&pass=123456 或者  http://192.168.3.28:8085/login?user=blue&pass=123456*/
const express = require("express");

var  app = express();
app.listen(8085)

/*app.get('./a.html', function(){
	
})*/
var users = {
	'blue':'123456',
	'zhangsan':'654321',
	'lisi': '987987'
}
app.get('/login',function(req, res){
	var user = req.query['user'];
	var pass = req.query['pass'];
	
	if(users[user] == null){
		res.send({ok:false,msg:'用户不存在'})
	}else{
		if(users[user]!=pass){
			res.send({ok:false,msg:'密码错误'});
		}else{
			res.send({ok:true,msg:'登录成功'});
		}
	}
})

app.use(express.static("./www"))
