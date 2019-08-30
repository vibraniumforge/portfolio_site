import React, { Component } from "react";
import { Link } from 'react-router-dom'

// var divStyle = {
// 	width: '100%',
//  	height: '100%',
//  backgroundImage: `url('http://papers.co/wallpaper/papers.co-nz64-snow-winter-moon-mountain-nature-pink-29-wallpaper.jpg')`,
//  backgroundPosition: 'center',
//  backgroundRepeat: 'no-repeat',
//  backgroundSize: '100%',
// 	};

class Home extends Component {

	render() {

		return(
			<div id="home-image">
			<br />
			<br />
			<br />
			<h1 className='user-name'> Sofia Jonsson</h1>
			<br />
			<br />
			 <p className="home-p-tag">Front-end web developer</p>
			 <a position="center" class="sm-nav-a" id="home-pg-button"><Link to="/projects">View My Work </Link></a>
			<br />
			<br />

			<br />
			</div>



		)
	}
}



export default Home
