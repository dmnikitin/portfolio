import React from 'react';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Instance from "./instance/instance.js";
import Link from "./link.js";

const projectsList = [
	{index: 1, name: "NOTES", features: "markdown, local-storage", technologies: ["React", "Redux"] },
	{index: 2, name: "WEATHER", features: "locates weather by user's current location, dayly/weekly weather view", technologies: ["Frontend: vanilla javascript", "Backend: NodeJS"] },
	{index: 3, name: "NEWS", features: "endless scroll, topic-based news search", technologies: ["Frontend: React, React-router, Material-ui", "Backend: NodeJS"]},
	{index: 4, name: "POMODORO", features: "cycles, progress bar", technologies: ["vanilla javascript"]},
	{index: 5, name: "TICTAC", features: "computer opponent logic", technologies: ["vanilla javascript"]},
	// {index: 2, name: "TODO", features: "drag&drop", technologies: ["React"] },
	// {index: 7, name: "more to come"},
	// {index: 8, name: "more to "},
	// {index: 9, name: "more to cme"},
];

const Works = (props) =>
		
		<div className="works-container">
				<Fade left>
					<div className="works-top">
						<div className="works-text">
							<h1>most recent works</h1>
					 		<Link direction = "contacts" changePage={props.changePage}/> <Link direction = "about" changePage={props.changePage}/>
						</div>					
					</div>
				</Fade>
				<div className="works">
			 		<Flip left >
            		 	{projectsList.map( el => {
							let cName = `instance-${el.index}`
							let currentInstance = 					  
			 						<Instance name={cName} content={el} key={el.index}/> 				
							    return currentInstance 
			           		})}	       		
					</Flip>
        		</div>	
		</div>
	 	

export default Works;

