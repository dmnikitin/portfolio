import React, { Component } from 'react';
import Link from "./link.js";
import Bars from "./bars.js";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
let send = false;

export default class Contact extends Component {

	handleSubmit = (e) => { 
		e.preventDefault();	
	    const form = e.target;
   		const subject = form.elements['subject'].value;
		
		 const myInit = {  method: "POST",
                        body: `name=${this.name.value}&email=${this.email.value}&message=${subject}`,                          headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'X-Requested-With': 'XMLHttpRequest',
                        'mode': 'no-cors',
                        'Access-Control-Allow-Headers': 'x-requested-with'
                          }
                      };   

   		fetch('https://stormy-chamber-60382.herokuapp.com/message', myInit);
		setTimeout( () => {send = true; this.forceUpdate()} , 1000);
	}	

	render() {
		
		 let content;
		 if (!send) {
		 	content = 	<div className="contacts">
				 

				 	<Fade left>
							<div className="contacts-top">
								<div className="contacts-text">
									<div className="contacts-name">
										<div>contact me!</div> 
									</div> 
									<div className="contacts-links">
										<Link tag="div" direction = "about" changePage={this.props.changePage}/>
										<Link tag="div" direction = "works" changePage={this.props.changePage}/>
									</div>
									 <Bars name="contacts" changePage={this.props.changePage}/>
								</div>
							</div>							
						</Fade>	
				
				<div className="contacts-main">				
					<form role="form" onSubmit={this.handleSubmit}>
					
	 					<input type="text" ref={(ref) => {this.name = ref}} name="name" placeholder="your name.." required />
						<input type="text" name="email" ref={(ref) => {this.email = ref}} placeholder="your e-mail.." required />
	  					<textarea id="subject" name="subject" placeholder="Write something.." ></textarea>  				
						<input type="submit" value="Submit"  />
	  				</form>
	  				<Fade bottom>
	  				<div className="contacts-info"> 
						<div className="social">
						 <a target="_blank" href = "mailto:ndsverified@yandex.ru?subject = Feedback&body = Message"><span  className="fa fa-envelope-o"></span></a>
						 <a target="_blank" href = "https://www.linkedin.com/in/dmitry-nikitin-460642178/"><span  className="fa fa-linkedin"></span></a>
						 <a target="_blank" href = "https://github.com/dmnikitin"><span className="fa fa-github"></span></a>
						</div>					
					   </div>
	  				</Fade>			
				</div>
			</div>
		} else { 
			content = <div className="message-sent">Message sent <button onClick={()=> {setTimeout( () => {send = false; this.forceUpdate()} , 500)} }>Return to main</button></div>
		}

		return content;
	}
}


