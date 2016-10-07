# mongoDB 数据库操作
 ### 用户图形接口GUI 命令行接口CLI

* `mkdir -p data/db`//同时创建父文件和子文件

* `mongod --dbpath=./data/db`//打开数据库

* 对于`mongodb`我们使用mongo shell 这个命令来操作 启动　`mongo`

* 使用数据库/创建数据库　`use name`
数据库是`mongodb` 中的顶级存储单位，之下一级就是`集合`

* 删除数据库　在当前数据库 `db.dropDatabase()`

* 查看有几个数据库　 `show dbs`

* 查看当前使用的数据库　`db`

* 查看集合　`show collections`

* 创建集合　`db.createCollection('posts')`

* 删除集合　`db.name.drop()`

* 插入数据记录　`db.posts.insert({title:'hello'})`

* 删除数据记录　`db.posts.remove({title:'hello'})`

* 删除所有记录　`db.posts.remove({})`

* 更改数据信息 `db.posts.update({title:'hello'},{$set:{title:'world'}})`

* 查找数据　`db.posts.find()`

* 查找共几条　`db.posts.find().count()`


## 世界第一位程序员　Ada
![](https://github.com/happypeter/digicity-express-api/blob/master/doc/img/001-ada.png?raw=true)
