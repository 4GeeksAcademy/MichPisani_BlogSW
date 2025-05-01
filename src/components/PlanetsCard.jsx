import React from "react";

const PlanetsCard = ({properties, id}) => {

    const imageUrl = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img"

    return(
        <div className="container d-flex justify-content-center align-items-center " style={{minHeight:"80vh"}}>
            <div className="card single-card w-75" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${imageUrl}/planets/${id}.jpg`} className="img-fluid rounded-start" alt="planet image"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body h-100">
                            <div className="d-flex justify-content-center">
                              <h3 className="card-title property-text">{`${properties.name}`}</h3>  
                            </div>
                            <hr className="m-0"/>
                            <div className="row h-75 d-flex align-items-center justify-content-center">
                                <div className="col-6">
                                    <div className="m-3">
                                        <span className="m-0 property-text">CLIMATE: </span>
                                        <span className="m-0"> {`${properties.climate}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">POPULATION: </span>
                                        <span className="m-0"> {`${properties.population}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">TERRAIN: </span>
                                        <span className="m-0"> {`${properties.terrain}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">DIAMETER: </span>
                                        <span className="m-0"> {`${properties.diameter}`}</span>                                        
                                    </div>

                                </div>
                                <div className="col-6">
                                    <div className="m-3">
                                        <span className="m-0 property-text">GRAVITY: </span>
                                        <span className="m-0"> {`${properties.gravity}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">ORBITAL PERIOD: </span>
                                        <span className="m-0"> {`${properties.orbital_period}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">ROTATION PERIOD: </span>
                                        <span className="m-0"> {`${properties.rotation_period}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">SURFACE WATER: </span>
                                        <span className="m-0"> {`${properties.surface_water}`}</span>                                        
                                    </div>
                                </div>

                            </div>
                            <div className="w-100 d-flex justify-content-center mb-2">
                              <button className="btn single-card-button ">Add to favourites</button>  
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanetsCard