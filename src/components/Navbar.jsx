import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar bg-dark">
			<div className="container mb-2">
				<Link to="/">
					<img src="src/assets/img/star wars.png" style={{maxHeight:"5vh"}}/>
				</Link>
				<div className="dropdown">
				<button className="btn dropdown-toggle laser-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favourites
				</button>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
				</div>
			</div>
			<div className="laser-border">

			</div>
		</nav>
	);
};