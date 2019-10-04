import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Projects extends Component {

	render() {

		return(
			<div >
				<br />
				<br />
				<br />

				<h4> * Note that "Live Site" option  is hosted on a free platform and takes a while to load *</h4>
				<div className='card'>
					<div className='container'>
						<a href="https://github.com/sofiajonsson/front_end_finals" className="projects-header">Pow Tracker</a>
							<p className="projects-paragraph">React.js Front End, Ruby on Rails Back End</p>
							<img
								src="https://github.com/sofiajonsson/front_end_final/raw/master/pow_tracker_front_end.png"
								alt="Avatar"
								style={{ height: '400px', width: '600px'}}
								>
							</img>
							<br/>
							<br/>
							<br/>

						<h4>
							<a href='https://www.youtube.com/watch?v=ZUXU7ZWpqD4' className='projects-link'>
								View Demo
							</a>
						</h4>
					</div>
				</div>

				<div className='card'>
					<div className='container'>
						<a href="https://github.com/sofiajonsson/thrones_tracker" className="projects-header">Thrones Tracker</a>
						<p className="projects-paragraph">Vanilla JavaScript Front End, Ruby on Rails Back End</p>
							<img
								src="https://github.com/sofiajonsson/thrones_tracker/raw/master/lib/art/got.png"
								alt="Avatar"
								style={{ height: '400px', width: '600px'}}
								>
							</img>
							<br/>
							<br/>
							<br/>

						<h4>
							<a href='https://www.youtube.com/watch?v=Rjdswq375Ms' className='projects-link'>
								View Demo
							</a>
						</h4>
					</div>
				</div>

				<div className='card'>
					<div className='container'>
						<a href="https://roam-travel-app.herokuapp.com/" className="projects-header">
							Roam
						</a>
							<p className="projects-paragraph">Ruby on Rails App</p>
								<br/>
								<br/>

							<img
								src="https://github.com/sofiajonsson/roam/raw/master/lib/art/roam_screenshot.png"
								alt="Avatar"
								style={{ height: '400px', width: '600px'}}
								>
							</img>
								<br/>
								<br/>

							<h4>
								<a href='https://roam-travel-app.herokuapp.com/' className='projects-link'>
									View Live Site*
								</a>
							</h4>
					</div>
				</div>

				<div className='card'>
					<div className='container'>
						<a href="https://github.com/sofiajonsson/front_end_finals" className="projects-header">Monthly Lineup Calendar App</a>
							<p className="projects-paragraph">React.js Front End, Ruby on Rails Back End</p>
							<img
								src="https://github.com/sofiajonsson/back-end-calendar-app/raw/master/lib/art/calendar_pic.png"
								alt="Avatar"
								style={{ height: '400px', width: '600px'}}
								>
							</img>
							<br/>
							<br/>
							<br/>

						<h4>
							<a href='https://github.com/sofiajonsson/front-end-calendar-app' className='projects-link'>
								View GitHub
							</a>
						</h4>
					</div>
				</div>

					<br />
					<br />
					 <p className="general-p-tag"> </p>
					 <a position="center" className="sm-nav-a" id="home-pg-a"><Link to="/about" style={{paddingLeft: 13, textDecoration: 'none'}}>Back to About Me </Link></a>
					<br />
					<br />
					<br />
			</div>



		)
	}
}



export default Projects
