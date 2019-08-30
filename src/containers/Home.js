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
			<div class="row">
			  <div class="column">
					<br />
					<br />
					<br />
					<h1 className='user-name'> Sofia Jonsson</h1>
					<p className="home-p-tag">Front-end web developer</p>
					<a class="sm-nav-a" id="home-pg-button"><Link to="/projects">View My Work </Link></a>
				</div>
			  <div class="column-2">
					<img src={require('../components/moab2.png')} className="home-img"/>
				</div>
			</div>





		)
	}
}



export default Home
