import React, { PropTypes } from 'react'
import axios from 'axios'
class ShowPost extends React.Component {
	constructor(){
		super();
		this.state ={
			data:{}
		}
	}
	componentWillMount() {
  	let id = this.props.params.id
    axios.get(`http://localhost:3000/post/${id}`).then(res => {
			console.log(res.data.post)
      this.setState({
        data: res.data.post
      });
    });
  }
	render () {
		return(
			<div>
				{ this.state.data.category } <br />
        { this.state.data.title } <br />
        { this.state.data.content }
			</div>
		)
	}
}

export default ShowPost;
