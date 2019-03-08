import React from 'react';
import Fade from 'react-reveal/Fade';
import Link from './link.js';

const About = (props) => 
					<div className="about">					
						<Fade left>
							<div className="about-top">
								<div className="about-text">
								 	 <h1>hey there.</h1> <Link direction = "contacts" changePage={props.changePage}/> <Link direction = "works" changePage={props.changePage}/>
								</div>
							</div>							
						</Fade>	
						<Fade bottom>					
						<div className="about-main">
							<div className="about-main-white"></div>
							<div className="about-main-white"></div>
							<div className="about-main-black"></div>
							<div className="about-main-black"></div>
							<div className="about-main-white"></div>
							<div className="about-main-rect">
								<div className="rect-left"></div>
								<div className="rect-right"></div>
								<div className="rect-name"><h2>welcome to my page!</h2></div>
								<Fade left>
								<div className="rect-text">
									<h3> Nick here. I'm a web developer from Minsk, Belarus </h3>										
									<p>	Frontend skills: React, Redux, HTML5, CSS3, JavaScript/ES6, SASS, LESS, frameworks and  more 
									<br/> Backend skills: NodeJs, express, heroku, and  more
							 		<br/> Other: sql, mongoDB, git, AJAX, firebase, etc.
									<br/> currently open for remote opportunities
									 I always try to stay in touch with new technologies
								 	</p>
								</div>	
								</Fade>							
							</div>					
							<div className="about-main-black"></div>
							<div className="about-main-white">  </div>
							<div className="about-main-white about-info">
								<div></div>
								<div></div>
								<div></div> 
								<div className="about-info-txt"> <h4>feel free to check out my works! </h4><h4>and send me a message!</h4>   </div>
								<div></div>
							</div>
							<div className="about-main-black"> </div>
							<div className="about-main-black"></div>
						</div>	
						</Fade>				
					</div>

export default About;