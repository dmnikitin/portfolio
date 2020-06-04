import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Link from './link.js';
import Bars from "./bars.js";
import { withGetScreen } from 'react-getscreen';

const About = ({ changePage, isMobile }) => { 
	let delayedEntrance = isMobile() ? 1000 : 5000;
	return	<div className="about">					
		<Bounce duration={2000} left>
			<div className="about-top">
				<div className="about-text">
					<div className="about-name">
					<div>hey there.</div> 
					</div> 
					<div className="about-links">
					<Link tag="div" direction = "works" changePage={changePage}/>
					<Link tag="div" direction = "contacts" changePage={changePage}/> 
					</div>
					<Bars name="about" changePage={changePage}/>
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
						<Zoom left duration={2000} delay={2500}><h3> I'm Dima, web developer from Minsk, Belarus </h3>	</Zoom>									
						<Zoom left duration={2000} delay={4000}><p>	 <b>Here are my skills & competences.</b> <br /> 
							Javascript/Typescript, Angular, React, Redux, NodeJs, Express, HTML5, CSS3, SASS 
							<br/>
							webpack, AJAX, git, MongoDB 
							</p></Zoom>	
					</div>														
				</div>					
				<div className="about-main-black"></div>							
				<div className="about-main-white">  </div>
				<div className="about-main-white about-info">
					<div></div>
					<div></div>
					<div></div> 
					<Zoom left duration={2000} delay={delayedEntrance}>
						<div className="about-info-txt"> 
							<h5>feel free to check out my <a><u><Link tag="button" direction = "works" changePage={changePage}></Link></u> </a> </h5>
							<h5>and leave me a message!  <a><u><Link tag="button" direction = "contacts" changePage={changePage}></Link></u> </a></h5>								
						</div></Zoom>
					<div></div>
				</div>							
				<div className="about-main-black"> </div>
				<div className="about-main-black"></div>						
			</div>	
		</Zoom>						
	</div>
}

const options = {mobileLimit: 500}
export default withGetScreen(About, options);
