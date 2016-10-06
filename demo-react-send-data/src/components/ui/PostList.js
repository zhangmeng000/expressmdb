import React, { PropTypes } from 'react'
import axios from 'axios'
import {Link} from 'react-router';
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
      },
			Link:{
				display:'block',
				width:'80px',
				height:'40px',
				borderRadius:'8px',
				textAlign:'center',
				lineHeight:'40px',
				backgroundColor:'#CC3399',
				color:'#000',
				fontSize:'1.2em',
				textDecoration:'none',
				marginLeft:'85%',
				marginTop:'10px'
			},
			more:{
				fontSize:'0.6em',
				color:'#000',
				textDecoration:'none',
				textIndent:'20px'
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
    });
  }

	render () {
		let styles = this.getStyles();
		let posts = this.state.posts.map( (item,i) =><div style={styles.content} key={item._id}>
		<p key={i} style={styles.title}>
			{item.title}
			<Link to = {`/post/${item._id}`} style = {styles.more}>查看</Link>
		</p>
		</div>)
		return(
			<div>
				<Link to = '/write' style = {styles.Link}>写博客</Link>
				{posts}
			</div>
		)
	}
}

export default PostList;
