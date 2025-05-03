import { element } from "prop-types";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ElementCard from "../components/ElementCard";

const StarWarsGrid = () => {
    const {type} = useParams()
    const swapi = "https://www.swapi.tech/api"
    const [elements, setElements] = useState([])
    useEffect(()=>{
        const getElements = async () => {
            try {
                const response = await fetch(`${swapi}/${type}`,
                    {
                        method: 'GET'
                    }
                )

                if(!response.ok){
                    throw new Error("Error al obtener los datos")
                }
                
                const data = await response.json()

                setElements(data.results)

            } catch (error) {
                console.log(error.message)
            }
           
        }
        getElements()
    }    
    ,[])

    return(
        <div className=" m-5">
            <div className="row justify-content-center w-100">
                {elements.map((element)=>{
                    return(
                        <div className=" col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4" key={element.uid} >
                            <ElementCard 
                                type={type} 
                                name={element.name} 
                                id={element.uid}
                            />                            
                        </div>                              
                    )
                })}                
            </div>
 
        </div>
    )

}

export default StarWarsGrid