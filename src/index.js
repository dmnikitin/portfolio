import React, { Component } from 'react';
import { render } from 'react-dom';
import './sass/styles.scss';
import Works from './components/works.js';
import About from './components/about.js';
import Contact from './components/contact.js';

export default class Root extends Component {
	
	componentDidMount() {
		fetch('https://js-weather-2019.herokuapp.com');
		fetch('https://react-news-2019.herokuapp.com');
		fetch('https://stormy-chamber-60382.herokuapp.com');
	}

	state = {displayed: "about"}

	changePage = (value) => this.setState({displayed: value})

	render() {
		let mainbox;
		if (this.state.displayed === "about") {mainbox = <About changePage={this.changePage}/>} else if (this.state.displayed === "works") {mainbox = <Works changePage={this.changePage}/>} else if (this.state.displayed === "contacts") {mainbox = <Contact changePage={this.changePage} />}
		
		return (			
			    	<div className="main">
												
						{mainbox}	
						<div className="footer"> © dmitry nikitin, 2018-2019 </div>	
					</div>		
			);
	}
}


render(<Root />, document.getElementById('app'));