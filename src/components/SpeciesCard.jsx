import React from "react";

const SpeciesCard = ({properties, id}) => {

    const imageUrl = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img"

    return(
        <div className="container d-flex justify-content-center align-items-center " style={{minHeight:"80vh"}}>
            <div className="card single-card w-75" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${imageUrl}/species/${id}.jpg`} className="img-fluid rounded-start" alt="specie image"/>
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
                                        <span className="m-0 property-text">AVERAGE LIFESPAN: </span>
                                        <span className="m-0"> {`${properties.average_lifespan}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">AVERAGE HEIGHT: </span>
                                        <span className="m-0"> {`${properties.average_height}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">LANGUAGE: </span>
                                        <span className="m-0"> {`${properties.language}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">CLASSIFICATION: </span>
                                        <span className="m-0"> {`${properties.classification}`}</span>                                        
                                    </div>


                                </div>
                                <div className="col-6">
                                    <div className="m-3">
                                        <span className="m-0 property-text">DESIGNATION: </span>
                                        <span className="m-0"> {`${properties.designation}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">EYE COLORS: </span>
                                        <span className="m-0"> {`${properties.eye_colors}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">HAIR COLORS: </span>
                                        <span className="m-0"> {`${properties.hair_colors}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">SKIN COLORS: </span>
                                        <span className="m-0"> {`${properties.skin_colors}`}</span>                                        
                                    </div>

                                </div>

                            </div>
                            <div className="w-100 d-flex justify-content-end">
                              <button className="btn single-card-button m-auto">Add to favourites</button>  
                            </div>
                            
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeciesCard