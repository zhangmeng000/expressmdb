var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(cors());//关闭同源策略．开放cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/express-api');
var Post = require('./models/post');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});


app.get('/',function(req,res){
  var page = "<form action = '/posts' method = 'post'>" +"<input type='text' name='title'/>"+"<input type = 'submit'>"+"</form>"
  res.send(page)//前台显示
  console.log('GET /posts')//查找
})
app.get('/posts',function(req,res){
  Post.find().sort({'createdAt': -1}).exec(function(err, posts) {
      res.json({posts:posts})
  })//前台显示后台数据
  console.log('GET /id')
})
app.put('/posts:id',function(req,res){
  res.send('PUT /id')//前台显示
  console.log('PUT /id')//更新
})
app.post('/posts/',function(req,res){
  // res.send('the post require is :' + req.body.title)//前台显示
  var post = new Post({title: req.body.title});
  post.save(function(err){
    if(err) console.log(err);
    console.log('saved!');
  })
  res.redirect('/posts')
  console.log('POST /posts')//上传
})
app.delete('/posts:id',function(req,res){
  res.send('DELETE /id')//前台显示
  console.log('DELETE /id')//删除
})
// app.get('/:name', function (req,res) {
// 	var username = req.params.name;
// 	var page = "<html>" + "<body>" + "<h2>" + username + "的购物车" + "</h2>" + "</body>" + "</html>"
//   res.send(page)
// })
// app.post('/:name', function (req,res) {
//   res.send('a Post Require revisize'+req.params.na8me)
// })
// app.get('/aaa', function (req, res) {
// 	var page = "<html>" + "<body>" + "<h2>aaa.html</h2>" + "</body>" + "</html>"
//   console.log('hello aaa')
// })
app.listen(3000,function(){
	console.log('running on port 3000...please visit localhost:3000')
})
//跟数据库链接
// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;//垃圾过期文件不上传
// mongoose.connect('mongodb://localhost:27017/express-api');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('success')
// 	var userName = mongoose.Schema({
//     name: String,
// 		age:Number,
//     key:String
// 	})
	// var person = mongoose.model('person', userName);
	// var zhang = new person({name:'zhangm',age:15,key:'123456'})
	// zhang.save();
	// var Cat = mongoose.model('cats', userName);
	// var kitty = new Cat({name:'kitty',age:1,key:'123456'})
  // kitty.age=2;
	// kitty.save();
	// var dog = mongoose.model('dogs', userName);
	// var lim = new dog({name:'lim',age:1,key:'1234567'})
	// lim.save();
	// console.log(kitty.age)
  // Cat.findById({ "_id" : "57ecbc3ccd055a0a3e5f49f3"},function(err,cat){
  //   cat.name = 'hahaoo'
  //   cat.save(function(err){
  //     console.log('更新')
  //     Cat.find().exec(function(err,cats){
  //       console.log(cats)//异步执行
  //     })
  //   });
  //   })
  // })
  // Cat.findById({_id :"57ecc3f74834890b1a05a5ee"},function(err,cat){
  //   cat.remove(function(err){
  //     console.log('删除')
  //     Cat.find().exec(function(err,cats){
  //       console.log(cats)//异步执行
  //     })
  //   });
  //   })
  // })
  // console.log('我先')
//   var resule = cat.find();
//   cat.find().exec(function(err,cats){
//     console.log(cats)//异步执行
//   })
// });
