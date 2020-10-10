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
     
      <div className="col ">
        <Card  border="primary" >
         <Link to={`/movie/${movies[ind].id}`}>
          <Card.Img  variant="top" src={movies[ind].poster} />
          <Card.Body>
            <Card.Title> <h2>{movies[ind].title}</h2></Card.Title>
            <Card.Text>
            {movies[ind].synopsis.slice(0,60)} ....
            </Card.Text>
            <ReactStars
            count={movies[ind].voteCount}
            size={20}
            color1={"#f4c10f"}
          ></ReactStars>
          </Card.Body>
          </Link>
        </Card>
    
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
