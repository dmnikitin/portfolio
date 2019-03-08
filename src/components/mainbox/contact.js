import React, { Component } from 'react';
import Link from "./link.js";
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
                        'X-Requested-With': 'XMLHttpRequest'
                          }
                      };   

   		fetch('/', myInit);
		setTimeout( () => {send = true; this.forceUpdate()} , 1000);
	}

	

	render() {
		
		 let content;

		 if (!send) {
		 	content = 	<div className="contact">
				 

				 	<Fade left>
							<div className="contact-top">
								<div className="contact-text">
								 	 <h1>contact me!</h1>  <Link direction = "works" changePage={this.props.changePage}/> <Link direction = "about" changePage={this.props.changePage}/>
								</div>
							</div>							
						</Fade>	
				
				<div className="contact-main">
					<Flip left>
					<form role="form" onSubmit={this.handleSubmit}>
					
	 					<input type="text" ref={(ref) => {this.name = ref}} name="name" placeholder="your name.." required />
						<input type="text" name="email" ref={(ref) => {this.email = ref}} placeholder="your e-mail.." required />
	  					<textarea id="subject" name="subject" placeholder="Write something.." ></textarea>  				
						<input type="submit" value="Submit"  />
	  				</form>
	  				</Flip>

	  				<Fade bottom>
	  				<div className="contact-info"> 
						<div className="social">
						 <span className="fa fa-envelope-o"></span>
						 <span className="fa fa-linkedin"></span>
						 <span className="fa fa-github"></span>

						</div>
					
					   </div>
	  				</Fade>
			
				</div>
			</div>
		} else { content = <div className="message-sent">Message sent <button onClick={()=> {setTimeout( () => {send = false; this.forceUpdate()} , 500)} }>Return to main</button></div>}

		return content;
	}
}

