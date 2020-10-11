import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./homekecil.css"
import ReactStars from "react-rating-stars-component";
const Homekecil = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const bagas = await axios.get(
        `https://gentle-garden-05760.herokuapp.com/movies/1`
      ,{   params: {
          api_key: 'tesssss',
          language: 'en_US',
          page: 1
      }});
      // console.log(bagas.data[3].title)
      const result = await bagas.data; //hrs pake .data
      setMovies(result); //result tak bisa dibaca diluar, makanya taro di state
    };
    getMovies();
  }, []);

  //bawah ini buat card
  const movieRender = movies.slice(0.9).map((movie, ind) => {
    // console.log(movies[0].title)t

  //   const { data } = await axios.get(nowPlayingUrl, {
  //     params: {
  //         api_key: apiKey,
  //         language: 'en_US',
  //         page: 1
  //     }
  // })
    return (
     
      <div className="col" >
        <div className="card">
          <Link to={`/movie/${movies[ind].id}`}>
            <img className="img-fluid" src={movies[ind].poster}></img>
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{movies[ind].title}</p>
          <p>Rated: {movies[ind].rating}</p>
          <ReactStars
            count={movies[ind].rating}
            size={20}
            color1={"#f4c10f"}
          ></ReactStars>
        </div>
     <br></br>
    
        {/* <img src="https://m.media-amazon.com/images/M/MV5BZmU4NzVkZjEtZmQxMi00ZDY5LWI3ZDYtMWRmZjE5YmYwZjQzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"></img> */}
      </div>
    );
  });

  return (
   
     
        <>
      {movieRender}
      </>
    
     
  
  );
};
export default Homekecil;
