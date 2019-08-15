import React, { Component } from "react";
import { Link } from 'react-router-dom'

class About extends Component {

	render() {

		return(
			<div>

			<h1 className='page-header'>About me</h1>
			<br />
			<br />
			 <p className="general-p-tag">
					Full stack web developer with a passion for travel and languages. With experience in Ruby on Rails, JavaScript, and React and a background in business and hospitality, I discovered my passion for code while searching for something to keep my mind stimulated after University. As a hospitality graduate, I have developed a strong skill set pertaining to organization, communication, and thriving under pressure. I enjoy learning new things in a fast paced environment and wish to move forward on this continuous learning path.
			</p>
			 <button position="center" class="ui inverted button" id="home-pg-button"><Link to="/projects">Check Out My Projects </Link></button>
			<br />
			<br />

			<br />
			</div>



		)
	}
}



export default About
