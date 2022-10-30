import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.styles.scss'

const Navbar = () => {
  return (
		<nav className='py-2 bg-white'>
			<div className="container d-flex justify-content-between">
				<h2 className="logo">
					<Link to="/">Photo Gallery</Link>
				</h2>
				<button className='add-photo-btn'>
					<Link to="/add-photo">Add Photo</Link>
				</button>
			</div>
		</nav>
  );
}

export default Navbar