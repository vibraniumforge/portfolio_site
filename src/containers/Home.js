import React, { Component } from "react";
import { Link } from 'react-router-dom'


var divStyle = {
	width: '100%',
 	height: '1500px',
 backgroundImage: `url('http://2.bp.blogspot.com/-PEsedSbB8i4/VXAFPTSp3VI/AAAAAAAAAc0/UxEf7dxsIVg/s640/coding%2Bin%2Bschools.jpg')`,
 backgroundPosition: 'center',
 backgroundRepeat: 'no-repeat',
 backgroundSize: 'cover',
	};

class Home extends Component {

	render() {

		return(
			<div id="home-image" style={ divStyle } >
			<br />
			<br />
			<br />
			<h1 className='user-name'>Sofia Jonsson</h1>
			<br />
			<br />
			 <p className="home-p-tag">Keep up with Me</p>
			 <button position="center" class="ui inverted button" id="home-pg-button"><Link to="/projects">Check Out My Projects </Link></button>
			<br />
			<br />

			<br />
			</div>



		)
	}
}



export default Home
