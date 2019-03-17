import React from 'react';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

import Instance from "./instance/instance.js";
import Link from "./link.js";
import Bars from "./bars.js";

const projectsList = [
	{index: 1, name: "NOTES", features: "Create/edit/search/delete your notes with this app, edit notes content with text markdown editor, changes synchronized with browser local storage", technologies: ["React, Redux, React Transition Group"], link: "https://dmnikitin.github.io/notes/" },
	{index: 2, name: "NEWS", features: "View the latest news from selected topics, comes with endless scroll feature", technologies: ["Backend: NodeJS", "Frontend: React, React-router, Material-ui"], link : "http://react-news-2019.herokuapp.com/"},
	{index: 3, name: "POMODORO", features: "Pomodoro clock app with progress bar, control buttons, work/rest cycles", technologies: ["vanilla javascript"], link: "https://dmnikitin.github.io/pomodoro/"},
	{index: 4, name: "WEATHER", features: "Shows weather based on user's current location, dayly/weekly weather view", technologies: ["Backend: NodeJS", "Frontend: vanilla javascript"], link: "https://js-weather-2019.herokuapp.com/" },
	{index: 5, name: "TICTAC", features: "Play the classic TicTacToe game against computer, or in hot-seat mode", technologies: ["vanilla javascript"], link: "https://dmnikitin.github.io/tictactoe/index.html"},
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

