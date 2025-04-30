import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-3 d-flex flex-column align-items-center justify-content-around item-box">
					<img src="src/assets/img/Planets.png" className="img-fluid mb-2 custom-img"/>
					<Link to="/planets" className=" btn laser-button">Planets</Link>
				</div>
				<div className="col-md-3 d-flex flex-column align-items-center justify-content-around item-box">
					<img src="src/assets/img/Character.png" className="img-fluid mb-2 custom-img"/>
					<Link to="/people" className=" btn laser-button">Characters</Link>
				</div>

			</div>
			<div className="row justify-content-center">
				<div className="col-md-3 d-flex flex-column align-items-center justify-content-around item-box">
					<img src="src/assets/img/Vehicle.png" className="img-fluid mb-2 custom-img"/>
					<Link to="/vehicles" className=" btn laser-button">Vehicles</Link>
				</div>
				<div className="col-md-3 d-flex flex-column align-items-center justify-content-around item-box">
					<img src="src/assets/img/Species.png" className="img-fluid custom-img"/>
					<Link to="/species" className=" btn laser-button">Species</Link>
				</div>

			</div>


		</div>
	);
}; 