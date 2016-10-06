import React, { PropTypes } from 'react'
import axios from 'axios'
class App extends React.Component {
	constructor(){
		super();
	}
	handleSubmit(e){
		e.preventDefault();
		var data = {};
		data.title = this.refs.title.value;
		data.content = this.refs.content.value;
    console.log(data);
  }
	render () {
		return(
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="title"/>
          <input type="text" ref="content"/>
					<input type = 'submit'  />
        </form>
			</div>
		)
	}
}

export default App;
