import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Contact extends Component {

	render() {

		return(
			<div>

			<h1 className='page-header'>Contact me</h1>
			<br />
			<br />
			 <p className="general-p-tag">
					Call me beep me if ya wanna reach me
			</p>
			 <button position="center" class="ui inverted button" id="home-pg-button"><Link to="/projects">Check Out My Projects </Link></button>
			<br />
			<br />

			<br />
			</div>



		)
	}
}



export default Contact
