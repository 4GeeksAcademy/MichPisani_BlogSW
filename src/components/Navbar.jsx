import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";

export const Navbar = () => {
	const {store} = useGlobalReducer()

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
				<ul className="dropdown-menu dropdown-menu-dark">
					{store.favourite.length>0 ? (store.favourite.map((item, index)=>{
						return <li className="m-2" key={index}><a className="dropdown-item" href={`/${item.type}/${item.id}`}>{item.name}</a></li>
					})):<li className="m-2">Not favourites yet</li>}
				</ul>
				</div>
			</div>
			<div className="laser-border">

			</div>
		</nav>
	);
};