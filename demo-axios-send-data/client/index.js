var axios = require('axios')


var data = {
	title:'mytitle',
	content:'mycontent'
}
axios.post('http://localhost:3000/posts',data).then(
	console.log(111)
)
