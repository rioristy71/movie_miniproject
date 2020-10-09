import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';


const [filemnya ,SetFilem ] = useState([]);
const movie =() => {

    useEffect(() => {
        const getMovies = async () => {
        
            const res = await axios.get(
              `https://gentle-garden-05760.herokuapp.com/movies/1`
            );
            const result = await res.data;
            
      
        };
        getMovies();
      }, []);
    
    


return (

    <div>


    </div>
)
}

export default movie ;