import React, { Component } from 'react';
import { render } from 'react-dom';
import './sass/styles.scss';
import Infobar from './components/infobar/infobar.js';
import Works from './components/mainbox/works.js';
import About from './components/mainbox/about.js';
import Contact from './components/mainbox/contact.js';

export default class Root extends Component {

	state = {displayed: "about"}

	changePage = (value) => this.setState({displayed: value})

	render() {
		let mainbox;
		if (this.state.displayed === "about") {mainbox = <About changePage={this.changePage}/>} else if (this.state.displayed === "works") {mainbox = <Works changePage={this.changePage}/>} else if (this.state.displayed === "contacts") {mainbox = <Contact changePage={this.changePage} />}
		
		return (			
			    	<div className="main">
												
						{mainbox}	
						<div className="footer"> © vasiliy utkin, 2018-2019 </div>	
					</div>		
			);
	}
}


render(<Root />, document.getElementById('app'));