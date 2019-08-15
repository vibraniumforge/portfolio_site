import React, { Component } from "react";
import { Link } from 'react-router-dom'


var divStyle = {
	width: '100%',
 	height: '100%',
 backgroundImage: `url('http://papers.co/wallpaper/papers.co-nz64-snow-winter-moon-mountain-nature-pink-29-wallpaper.jpg')`,
 backgroundPosition: 'center',
 backgroundRepeat: 'no-repeat',
 backgroundSize: '100%',
	};

class Home extends Component {

	render() {

		return(
			<div id="home-image" style={ divStyle } >
			<br />
			<br />
			<br />
			<h1 className='user-name'>Hello, I'm Sofia Jonsson</h1>
			<br />
			<br />
			 <p className="home-p-tag">I'm a front-end web developer</p>
			 <button position="center" class="nav-button" id="home-pg-button"><Link to="/projects">View My Work </Link></button>
			<br />
			<br />

			<br />
			</div>



		)
	}
}



export default Home
