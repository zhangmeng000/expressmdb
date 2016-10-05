import React, { PropTypes } from 'react'
import axios from 'axios'
import Form from './Form'
class NewPost extends React.Component {
	getStyles() {
    return {
      content: {
        width: '100%',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em',
        textAlign: 'center',
        paddingTop: '20px'
      }
    };
  }
	newPost(data){
		console.log(data)
		axios.post('http://localhost:3000/posts', data).then(res => {
    console.log(res.data.message);
    this.context.router.push('/')
    })
	}
	render () {
		let styles = this.getStyles();
			return(
				<div style={styles.content}>
        	<div style={styles.title}>
						<Form newPost= {this.newPost.bind(this)} />
					</div>
      	</div>
			)
	}
}
NewPost.contextTypes = {
  router:React.PropTypes.object
}
export default NewPost;
