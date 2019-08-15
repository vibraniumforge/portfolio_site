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
			<div className="ui labeled icon menu" id="contact-icons" border-color="white">
		 <div className="navbar-icons" border-color="white">
			 <Link to="/">
			 <img src="https://www.shareicon.net/download/2015/11/06/667813_sport_512x512.png" alt="home-icon" style={{width: 50, height: 50}}></img>
			 <br />
			 Home
			 </Link>
		 </div>
		 <div className="navbar-icons">
			 <Link to="/resorts">
				 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFOk5vc9-lCR2j2l_YwRNqGo3gHAMBIjdz5u01VCzTfE9UyK4D" alt="home-icon" style={{width: 50, height: 50}}></img>
				 <br />
				 Resorts
			 </Link>
		 </div>
		 <div className="navbar-icons">
			 <Link to="/forecasts">
				 <img src="https://cdn1.vectorstock.com/i/1000x1000/34/25/thermometer-snow-cold-temperature-icon-vector-22773425.jpg" alt="home-icon" style={{width: 50, height: 50}}></img>
				 <br />
				 Forecasts
			 </Link>
		 </div>
		 <div className="navbar-icons">
			 <Link to="/snowreports">
				 <img src="http://cdn.onlinewebfonts.com/svg/img_540726.png" alt="home-icon" style={{width: 50, height: 50}}></img>
				 <br />
				 SnowReport
			 </Link>
		 </div>
		 <div className="navbar-icons">
			 <Link to="/user">
				 <i><img src="https://icons-for-free.com/iconfiles/png/512/love+one+one+like+icon-1320184042027897906.png" alt="" style={{width: 50, height: 50}}></img></i>
				 <br />
				 Favorites
			 </Link>
		 </div>
		 <div className="navbar-icons">
			 <Link to="/login">
				 <i><img src="http://cdn.onlinewebfonts.com/svg/img_22726.png" alt="" style={{width: 50, height: 50}}></img></i>
				 <br />
				 Account
			 </Link>
	 </div>
	 </div>
			<br />
			<br />

			<br />
			</div>



		)
	}
}



export default Contact
