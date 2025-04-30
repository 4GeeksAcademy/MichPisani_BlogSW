import React from "react";
import { Link } from "react-router-dom";

const ElementCard  = ({type, id, name}) =>{
    const imageUrl = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img"
    return(
        <div className="card starwars-card m-3" style={{width: "18rem"}}>
            <img src={`${imageUrl}/${type}/${id}.jpg`} className="card-img-top" alt="element image"/>
            <div className="card-body">
                <h5 className="card-title text-center starwars-name">{name}</h5>
                <div className="d-flex">
                    <Link to={`/${type}/${id}`} className="btn info-btn me-2">See more</Link>
                    <button className="btn favourites-btn">Add to favourites</button>                    
                </div>

            </div>

        </div>
    )
}

export default ElementCard