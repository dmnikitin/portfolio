import React, { Component } from 'react';

export default class Link extends Component {

	setPage = (value) => this.props.changePage(value)

	render() {

		return 	<h1 onClick={()=>this.setPage(this.props.direction)}>{this.props.direction}</h1>
		
	}
}


