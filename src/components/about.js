import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Link from './link.js';
import Bars from "./bars.js";

const About = (props) => 
					<div className="about">					
						<Bounce duration={2000} left>
							<div className="about-top">
								<div className="about-text">
								 	 <div className="about-name">
								 	 	<div>hey there.</div> 
								 	 </div> 
								 	 <div className="about-links">
								 	 	<Link tag="div" direction = "works" changePage={props.changePage}/>
										<Link tag="div" direction = "contacts" changePage={props.changePage}/> 
								 	 </div>
								 	 <Bars name="about" changePage={props.changePage}/>
								</div>
							</div>							
						</Bounce>	
						<Zoom left duration={1000} delay={300}>		
						<div className="about-main">
							<div className="about-main-white"></div>
							<div className="about-main-white"></div>						
							<div className="about-main-black"></div>
							<div className="about-main-black"></div>							
							<div className="about-main-white"></div>							
							<div className="about-main-rect">
								<div className="rect-left"></div>								
								<div className="rect-right"></div>								
								<Zoom left duration={2000} delay={1000}><div className="rect-name"><h2>welcome to my page!</h2></div></Zoom>	
								<div className="rect-text">
									<Zoom left duration={2000} delay={2500}><h3> I'm Dima, a web developer from Minsk, Belarus </h3>	</Zoom>									
									<Zoom left duration={2000} delay={4000}><p>	 Here are my skills& competences. <br /> 
									 Frontend: React, Redux, JavaScript/ES6, HTML5, CSS3, jQuery, SASS, JEST, webpack and more;) 
									 <br/>
									 Backend: NodeJs, express, firebase
									 <br/>
							 		 Other: AJAX, git, SQL, mongoDB etc.
							 		 <br/>							 		 
									 I'm currently open for remote opportunities.
									</p></Zoom>	
								</div>														
							</div>					
							<div className="about-main-black"></div>							
							<div className="about-main-white">  </div>
							<div className="about-main-white about-info">
								<div></div>
								<div></div>
								<div></div> 
								<Zoom left duration={2000} delay={5000}>
									<div className="about-info-txt"> 
										<h5>feel free to check out my </h5>
										 <a><u><Link tag="h5" direction = "works" changePage={props.changePage}></Link></u> </a>
										 <h5>and leave me a message!</h5>
										 <a><u><Link tag="h5" direction = "contacts" changePage={props.changePage}></Link></u> </a>

								   </div></Zoom>
								<div></div>
							</div>							
							<div className="about-main-black"> </div>
							<div className="about-main-black"></div>						
						</div>	
						</Zoom>						
					</div>

export default About;

