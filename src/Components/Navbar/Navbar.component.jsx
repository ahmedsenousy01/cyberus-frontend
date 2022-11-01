import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.styles.scss'

const Navbar = () => {
  return (
		<nav className="navbar fixed-top navbar-expand-lg">
			<div className="container">
				<Link className="navbar-brand" to="/">
					Photo Gallery
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto d-flex align-items-center">
						<Link className="nav-link active" aria-current="page" to="/">
							Home
						</Link>
						<Link className="nav-link" to="/public">
							Public
						</Link>
						<Link className="nav-link" to="/local">
							Local
						</Link>
						<Link className="nav-link" to="/add-photo">
							<span className="btn btn-primary">+Add</span>
						</Link>
					</div>
				</div>
			</div>
		</nav>
  );
}

export default Navbar