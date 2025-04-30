import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar bg-dark">
			<div className="container mb-2">
				<Link to="/">
					<img src="src/assets/img/star wars.png" style={{maxHeight:"5vh"}}/>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
			<div className="laser-border">

			</div>
		</nav>
	);
};