import React, { PropTypes } from 'react'
import axios from 'axios'
import PostList from './PostList'
class App extends React.Component {
	constructor(){
		super();
	}
	getStyles() {
    return {
      header: {
        height: '64px',
        width: '100%',
        backgroundColor: '#00bcd4',
        textAlign: 'center',
        lineHeight: '64px',
      },
      link: {
        fontSize: '2em',
        color: '#fff',
        textDecoration: 'none'
      }
    };
  }
	render () {
		let styles = this.getStyles();
		return(
			<div>
				<header style={styles.header}>
	          <div style={styles.link}>BORN TO CODE</div>
        </header>
        { this.props.children }
			</div>
		)
	}
}

export default App;
