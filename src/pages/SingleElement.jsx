import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import VehiclesCard from "../components/VehiclesCard";
import SpeciesCard from "../components/SpeciesCard";
import PlanetsCard from "../components/PlanetsCard";


const SingleElement  = () =>{
    const [element, setElement] = useState({})
    const {type, id} = useParams()
    const swapi = "https://www.swapi.tech/api"
    let cardComponent 
    
    switch (type) {
        case "people":
            cardComponent = <CharacterCard properties={element} id={id}/>;
        break;
        case "vehicles":
            cardComponent = <VehiclesCard properties = {element} id={id}/>;
        break;
        case "species":
            cardComponent = <SpeciesCard properties = {element} id={id}/>;
        break;
        case "planets":
            cardComponent = <PlanetsCard properties = {element} id={id}/>;
        break;
    }

    useEffect(()=>{
        const getElements = async () => {
            try {
                const response = await fetch(`${swapi}/${type}/${id}`,
                    {
                        method: 'GET'
                    }
                )

                if(!response.ok){
                    throw new Error("Error al obtener los datos")
                }
                
                const data = await response.json()
                
                setElement(data.result.properties)

            } catch (error) {
                console.log(error.message)
            }
            
        }
        getElements()
    }    
    ,[])

    return(
        <>
           {
            cardComponent
           }
        </>
    )
}

export default SingleElement