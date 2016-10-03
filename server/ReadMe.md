## express

1. 跑在服务器上，响应客户端发出的ｒｅｑｕｅｓｔ　决定那部分后台代码被执行
2.学会用curl 调试ＡＰＩ
curl --request PUT localhost:3000/posts/id

````js
app.get('/posts:id',function(req,res){
  res.send('GET /id')//前台显示
  console.log('GET /id')
})
app.put('/posts:id',function(req,res){
  res.send('PUT /id')//前台显示
  console.log('PUT /id')//更新
})
app.post('/posts/',function(req,res){
  res.send('POST /posts')//前台显示
  console.log('POST /posts')//上传
})
app.delete('/posts:id',function(req,res){
  res.send('DELETE /id')//前台显示
  console.log('DELETE /id')//删除
})


app.get('/:name', function (req,res) {
	var username = req.params.name;
	var page = "<html>" + "<body>" + "<h2>" + username + "的购物车" + "</h2>" + "</body>" + "</html>"
  res.send(page)
})
```
