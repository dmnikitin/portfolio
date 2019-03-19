import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen';

 class Instance extends Component {

	state = {hover: false, clicked: false}

	toggleHover = () => setTimeout ( () =>  !this.props.isMobile() ? this.setState({hover: !this.state.hover}) : null , 0)
	toggleClick = () => setTimeout ( () =>  this.props.isMobile() ? this.setState({hover: !this.state.clicked}) : null , 0)
	render() {	
		
		let image = this.state.hover ? "opened" : "closed";
		let content1 = this.state.hover ? ` enabled hover-content` : `disabled hover-content`;
		let content2 = this.state.hover ? ` enabled-2 instance-buttons` : `disabled-2 instance-buttons`;
		return (		
		
			<div className = {this.props.name} onClick={this.toggleClick} onMouseEnter={this.toggleHover} onMouseLeave ={this.toggleHover}> 
				<div className="bg-image-blur"></div>
				<div className="micro"> 
					<div className={content1}>
						<h3>{this.props.content.name}</h3>
						<h5> {this.props.content.technologies.map(e=> e + "   " ) }</h5>
						<h5> {this.props.content.features}</h5>
					</div>	

					<div className={content2}> 
						<a href ={this.props.content.link} target="_blank"><h5>Try it!</h5></a>
					</div>
				</div>					
				<img className={image}/>		
			</div>
			)
		}
	
}

const options = {mobileLimit: 500}
export default withGetScreen(Instance, options);