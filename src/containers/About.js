import React, { Component } from "react";
import { Link } from 'react-router-dom'

class About extends Component {

	render() {

		return(
			<div>

			<h1 className='centered'>About me</h1>
			<br />
			<br />
			 <p className="home-p-tag">This is my bio section</p>
			 <button position="center" class="ui inverted button" id="home-pg-button"><Link to="/projects">Check Out My Projects </Link></button>
			<br />
			<br />

			<br />
			</div>



		)
	}
}



export default About
