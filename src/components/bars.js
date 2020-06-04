import React, { Component } from 'react';
import Link from "./link.js";
import Fade from 'react-reveal/Fade';
import { state } from '../data/data';

const { works, about, contacts } = state;

export default class Bars extends Component {

	state = {show: false}
	
	openBars = () => this.setState({show: !this.state.show})			    

	render() {
		
		let directions = [about, works, contacts];		
		directions.splice( directions.indexOf(this.props.name), 1)		
		let buttonClassName =  this.state.show === true ? `${this.props.name}-minimized-modal` : `${this.props.name}-minimized fa fa-bars`; 
		let button = this.state.show === true ? <Fade top><div className={buttonClassName} onClick={this.openBars}>
						  <Link tag="button" direction = {directions[0]} changePage={this.props.changePage}/>
								<Link tag="button" direction = {directions[1]} changePage={this.props.changePage}/>
	   							     	<span className="fa fa-times" onClick={this.openBars}></span>
	   							     	</div> </Fade>  : <div className={buttonClassName} onClick={this.openBars}> </div>
						     	
		return (
			<React.Fragment>
			{button}
			</React.Fragment>
		);
	}
}
