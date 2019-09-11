import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Contact extends Component {

	render() {

		return(
			<div>
				<h1 className='page-header'>Contact me</h1>
				<br />
				<br />
				<br/>
				<br/>

				<div className="contact-div-tag">
					<Link to="/">
		        <img src={require('../components/github-icon.png')} className="home-icon" alt="home-icon" style={{width: 50, height: 50}}></img>
		        <br />
	      	</Link>
					<Link to="/">
		        <img src={require('../components/gmail-icon.png')} className="home-icon" alt="home-icon" style={{width: 50, height: 50}}></img>
		        <br />
	      	</Link>
					<Link to="/">
		        <img src={require('../components/dev-icon.png')} className="home-icon" alt="home-icon" style={{width: 50, height: 50}}></img>
		        <br />
	      	</Link>
					<Link to="/">
		        <img src={require('../components/linked-in-icon.png')} className="home-icon" alt="home-icon" style={{width: 50, height: 50}}></img>
		        <br />
	      	</Link>
					<br /><br />
				</div>


				<div className="ui labeled icon menu" id="contact-icons" border-color="white">
			 </div>
					<br />
					<br />
					<br />
			</div>

		)
	}
}



export default Contact
