import React, { Component } from "react";
import { Link } from 'react-router-dom'


var divStyle = {
	width: '100%',
 	height: '1000px',
 backgroundImage: `url('https://miro.medium.com/max/4800/1*8acs5y4LSiOW3woxp5m7CQ.png')`,
 backgroundPosition: 'center',
 backgroundRepeat: 'no-repeat',
 backgroundSize: 'cover',
	};

class Projects extends Component {

	render() {

		return(
			<div id="home-image" style={ divStyle } >
			<br />
			<br />
			<br />
			<h1 className='centered'>Sofia Jonsson</h1>
			<br />
			<br />
			 <p className="home-p-tag">Keep up with Me</p>
			 <button position="center" class="ui inverted button" id="home-pg-button"><Link to="/">Back to About Me </Link></button>
			<br />
			<br />

			<br />
			</div>



		)
	}
}



export default Projects
