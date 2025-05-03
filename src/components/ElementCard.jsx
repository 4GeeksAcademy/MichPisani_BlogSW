import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const ElementCard = ({ type, id, name }) => {
    
    const imageUrl = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img"
    const auxType = type === "people" ? "characters" : type
    const { store, dispatch } = useGlobalReducer()
    const addFavourite = ({ id, type, name }) => {
        dispatch({
            type: "add_favourite",
            payload: { id: id, type: type, name: name }
        })
    }
    const removeFavourite = ({ id, type, name }) => {
        dispatch({
            type: "remove_favourite",
            payload: { id: id, type: type, name: name }
        })
    }
    const isFavourite = store.favourite.some(item => item.name === name);
    return (
        <div className="card starwars-card m-3" style={{ width: "19rem" }}>
            <img src={`${imageUrl}/${auxType}/${id}.jpg`} className="card-img-top" alt={`${type} image`} />
            <div className="card-body">
                <h5 className="card-title text-center starwars-name">{name}</h5>
                <div className="d-flex">
                    <Link to={`/${type}/${id}`} className="btn info-btn me-2">See more</Link>
                    <button
                        className="btn favourites-btn"
                        onClick={() =>
                            isFavourite
                                ? removeFavourite({ id, type, name })
                                : addFavourite({ id, type, name })
                        }
                    >
                        {isFavourite ? "Remove favourite" : "Add to favourites"}
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ElementCard