var express = require('express');

var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/express-api');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log(' success!')
});

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
		category:String,
    title: String,
    content: String
  }
);

var Post = mongoose.model('Post', PostSchema);



app.post('/posts', function(req, res){
  console.log('run post.save()');
  var post = new Post({title:"myTitle",category:'String', content: "myConent"})
  post.save(function(err){
    if(err) return console.log(err);
    console.log('saved');
  });
});

app.listen(3000, function(){
  console.log('running on port 3000.....');
});
