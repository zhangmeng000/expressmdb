var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	category:String,
	title:String,
	content:String
},
{
	timestames:true
}
)







module.exports = mongoose.model('Post',PostSchema)
