import React, { PropTypes } from 'react'
import axios from 'axios'
class PostList extends React.Component {
	constructor(){
		super();
		this.state = {
			posts:[]
		}
	}
	getStyles() {
    return {
      content: {
        position: 'relative',
        width: '100%',
        height: '60px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.5em',
				color:'#00CCCC',
				textAlign:'center'
      }
    }
  }
	componentWillMount() {
    console.log('hello will axios');
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      console.log('axios');
      this.setState({
        posts: res.data.posts
      });
      console.log(this.state.posts);
    });
  }

	render () {
		let styles = this.getStyles();
		let posts = this.state.posts.map( (item,i) =><div style={styles.content} key={item._id}> <p key={i} style={styles.title}>{item.title}</p> </div>)
		return(
			<div>
				{posts}
			</div>
		)
	}
}

export default PostList;
