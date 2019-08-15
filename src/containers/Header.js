import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
	<div className="header-div" border-color="white">
		<div className="ui secondary menu" id="navbar-header" >
	  	<div className="ui labeled icon menu" id="menu-header" border-color="white">
	      <div className="navbar-icons" border-color="white">
	        <Link to="/">
	        <button className="nav-button">Home</button>
	        

	        </Link>
	      </div>
	      <div className="navbar-icons">
	        <Link to="/about">
	           <button className="nav-button">About</button>


	        </Link>
	      </div>
	      <div className="navbar-icons">
	        <Link to="/projects">
	      		<button className="nav-button">Projects</button>


	        </Link>
	      </div>
	      <div className="navbar-icons">
	        <Link to="/contact">
	         <button className="nav-button">Contact</button>


	        </Link>
	      </div>
	    </div>
	  </div>
	</div>
)

export default Header
