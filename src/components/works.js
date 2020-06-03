import React from 'react';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Instance from "./instance.js";
import Link from "./link.js";
import Bars from "./bars.js";
import { state, projectsList1, projectsList2 } from '../data/data';

const { works, about, contacts } = state;

const Works = ({changePage}) =>
    <div className="works">
		<Fade left>
			<div className="works-top">
				<div className="works-text">
					<div className="works-name">
						<div>recent works</div>
					</div> 
					<div className="works-links">
						<Link tag="button" direction={about} changePage={changePage}/>
						<Link tag="button" direction={contacts} changePage={changePage}/>
					</div>
					<Bars name={works} changePage={changePage}/>
				</div>					
			</div>
		</Fade>
		<div className="works-main">
			<div className="works-main-part">
				<Flip left>
					{projectsList1.map( el => {
						const cName = `instance-${el.index}`
						return <Instance name={cName} content={el} key={el.index}/>						
					})}	       		
				</Flip>

			</div>
			<div className="works-main-part">
				<Flip right>
					{projectsList2.map( el => {
						const cName = `instance-${el.index}`
						return <Instance name={cName} content={el} key={el.index}/>						
					})}	       		
				</Flip>
			</div>
		</div>	
	</div>

export default Works;
