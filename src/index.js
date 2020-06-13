import React, { Component } from 'react';
import { render } from 'react-dom';
import './sass/styles.scss';
import Works from './components/works.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import { state } from './data/data';

const { works, about, contacts } = state;

export default class Root extends Component {
	
	componentDidMount() {
		fetch('https://young-anchorage-74520.herokuapp.com/');
		fetch('https://react-news-2019.herokuapp.com/loadserver');
		fetch('https://cryptic-sierra-45688.herokuapp.com/');
	}

	state = {displayed: about}

	changePage = (value) => this.setState({displayed: value})

	render() {
		let mainbox;
		switch (this.state.displayed) {
			case about: {
				mainbox = <About changePage = {this.changePage}/>
				break;
			}
			case works: {
				mainbox = <Works changePage = {this.changePage}/>
				break;
			}
			case contacts: {
				mainbox = <Contact changePage = {this.changePage}/>
				break;
			}
			default: {
				mainbox = <About changePage = {this.changePage}/>
			}
		}
			
		return (
			<div className="main">												
				{mainbox}	
				<div className="footer"> © dmitrij nikitin, 2018-2020 </div>	
			</div>		
		);
	}
}


render(<Root />, document.getElementById('app'));