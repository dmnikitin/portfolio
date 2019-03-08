import React from 'react';

const path = "/src/data/"

const InstanceModal = (props) => {	
	let logoClassName = `instance-logo-${props.content.index}`;
	return (
		<div className="instance-modal">

			<div className={logoClassName}><img /></div>

			<div className="instance-name">
				<h2>{props.content.name}</h2>

				<h3> technologies used: {props.content.technologies.map(e=> e + " " ) }</h3>			
				
				<h5>Keyfeatures:  {props.content.keyfeatures}</h5>
				<h5>description: {props.content.description} </h5>
				<div className="instance-buttons"> 
					<a href ="" target="_blank">Try it!</a>
					<a href ="" target="_blank">github repo <span className="fa fa-github"></span></a>
				</div>
			</div>
			
			
		

		</div>
		

			
		)
}

export default InstanceModal;