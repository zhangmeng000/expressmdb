import React, { PropTypes } from 'react'
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
	render () {
		let styles = this.getStyles();
			return(
				<div style={styles.content}>
        	<div style={styles.title}><Form /></div>
      	</div>
			)
	}
}

export default NewPost;