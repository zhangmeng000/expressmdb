import React, { PropTypes } from 'react'
import axios from 'axios'
class App extends React.Component {
	constructor(){
		super();
		this.state = {
			posts:"all posts"
		}
	}
	componentWillMount(){
		console.log(111)
		axios.get('http://localhost:3000/posts',function(res){
			this.setState({
				posts:res.posts
			})
		})
	}
	componentDidMount(){
		console.log(222)
	}
	render () {
		return(
			<div>
			{this.state.posts}
			</div>
		)
	}
}

export default App;
