import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const CharacterCard = ({ properties, id }) => {

    const imageUrl = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img"
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
    const isFavourite = store.favourite.some(item => item.name === properties.name);
    return (
        <div className="container d-flex justify-content-center align-items-center " style={{ minHeight: "80vh" }}>
            <div className="card single-card w-75" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${imageUrl}/characters/${id}.jpg`} className="img-fluid rounded-start" alt="character image" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body h-100">
                            <div className="d-flex justify-content-center">
                                <h3 className="card-title property-text">{`${properties.name}`}</h3>
                            </div>
                            <hr className="m-0" />
                            <div className="row h-75 d-flex align-items-center justify-content-center">
                                <div className="col-6">
                                    <div className="m-3">
                                        <span className="m-0 property-text">BIRTH YEAR: </span>
                                        <span className="m-0"> {`${properties.birth_year}`}</span>
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">GENDER: </span>
                                        <span className="m-0"> {`${properties.gender}`}</span>
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">HEIGHT: </span>
                                        <span className="m-0"> {`${properties.height}`}</span>
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">EYE COLOR: </span>
                                        <span className="m-0"> {`${properties.eye_color}`}</span>
                                    </div>


                                </div>
                                <div className="col-6">
                                    <div className="m-3">
                                        <span className="m-0 property-text">HAIR COLOR: </span>
                                        <span className="m-0"> {`${properties.hair_color}`}</span>
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">SKIN COLOR: </span>
                                        <span className="m-0"> {`${properties.skin_color}`}</span>
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">MASS: </span>
                                        <span className="m-0"> {`${properties.mass}`}</span>
                                    </div>

                                </div>

                            </div>
                            <div className="w-100 d-flex justify-content-center">
                                <button
                                    className="btn favourites-btn"
                                    onClick={() =>
                                        isFavourite
                                            ? removeFavourite({ id, type: "people", name: properties.name })
                                            : addFavourite({ id, type: "people", name:properties.name })
                                    }
                                >
                                    {isFavourite ? "Remove favourite" : "Add to favourites"}
                                </button>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard