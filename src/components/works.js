import React from 'react';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

import Instance from "./instance/instance.js";
import Link from "./link.js";
import Bars from "./bars.js";

const projectsList = [
	{index: 1, name: "NOTES", features: "markdown, local-storage", technologies: ["React", "Redux"], link: "https://dmnikitin.github.io/notes/" },
	{index: 2, name: "WEATHER", features: "locates weather by user's current location, dayly/weekly weather view", technologies: ["Frontend: vanilla javascript", "Backend: NodeJS"] },
	{index: 3, name: "NEWS", features: "endless scroll, topic-based news search", technologies: ["Frontend: React, React-router, Material-ui", "Backend: NodeJS"]},
	{index: 4, name: "POMODORO", features: "cycles, progress bar", technologies: ["vanilla javascript"], link: "https://dmnikitin.github.io/pomodoro/"},
	{index: 5, name: "TICTAC", features: "computer opponent logic", technologies: ["vanilla javascript"], link: "https://dmnikitin.github.io/tictactoe/index.html"},
];

const Works = (props) =>
		
		<div className="works">
				<Fade left>
					<div className="works-top">
						<div className="works-text">
						    <div className="works-name">
						    	<div>recent works</div>
						     </div> 
						    <div className="works-links">
						     	<Link tag="div" direction = "about" changePage={props.changePage}/>
								<Link tag="div" direction = "contacts" changePage={props.changePage}/>
						    </div>
						    <Bars name="works" changePage={props.changePage}/>

						</div>					
					</div>
				</Fade>
				<div className="works-main">
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

