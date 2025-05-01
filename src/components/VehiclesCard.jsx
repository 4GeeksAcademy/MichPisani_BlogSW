import React from "react";

const VehiclesCard = ({properties, id}) => {

    const imageUrl = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img"

    return(
        <div className="container d-flex justify-content-center align-items-center " style={{minHeight:"80vh"}}>
            <div className="card single-card w-75" >
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center">
                        <img src={`${imageUrl}/vehicles/${id}.jpg`} className="img-fluid rounded-start" alt="vehicle image"/>
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
                                        <span className="m-0 property-text">MANUFACTURER: </span>
                                        <span className="m-0"> {`${properties.manufacturer}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">MODEL: </span>
                                        <span className="m-0"> {`${properties.model}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">CARGO CAPACITY: </span>
                                        <span className="m-0"> {`${properties.cargo_capacity}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">CREW: </span>
                                        <span className="m-0"> {`${properties.crew}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">PASSENGERS: </span>
                                        <span className="m-0"> {`${properties.passengers}`}</span>                                        
                                    </div>

                                </div>
                                <div className="col-6">
                                    <div className="m-3">
                                        <span className="m-0 property-text">LENGTH: </span>
                                        <span className="m-0"> {`${properties.length}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">CONSUMABLES: </span>
                                        <span className="m-0"> {`${properties.consumables}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">VEHICLE CLASS: </span>
                                        <span className="m-0"> {`${properties.vehicle_class}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">MAX ATMOSPHERING SPEED: </span>
                                        <span className="m-0"> {`${properties.max_atmosphering_speed}`}</span>                                        
                                    </div>
                                    <div className="m-3">
                                        <span className="m-0 property-text">COST IN CREDITS: </span>
                                        <span className="m-0"> {`${properties.cost_in_credits}`}</span>                                        
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

export default VehiclesCard