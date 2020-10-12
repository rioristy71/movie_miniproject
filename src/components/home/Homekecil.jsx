import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./homekecil.css";
import qs from "querystring";

// import ReactStars from "react-rating-stars-component";
const Homekecil = ({pagination}) => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [Next, setNext] = useState([]);
  const [Prev, setPrev] = useState([]);

  const movieSearchUrl =
    "https://gentle-garden-05760.herokuapp.com/movies/search"; //post
    const movieListUrl = `https://gentle-garden-05760.herokuapp.com/movies/${pagination}`; //get
  const search = async (param) => {
    const fetch = await axios.post(
      movieSearchUrl,
      qs.stringify({ title: param }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return fetch;
  };

  // useEffect(() => {

    



  // }, [pagination]);


  useEffect(() => {
    const movieListUrl = `https://gentle-garden-05760.herokuapp.com/movies/${pagination}`; //get
    const movie1 = async () => {
      const fetch = await axios.get(movieListUrl, {
        params: {
          api_key: "tesssss",
          language: "en_US",
          page: 1,
        },
      });
  
      return fetch;
    };
  
    const query = qs.parse(location.search);
    console.log("query", query);
    const getMovies = async () => {
      let result;
      if (location.search) {
        result = await search(query['?search']);
      } else {
        result = await movie1();
      }
      // console.log(bagas.data[3].title)
      // const result = await bagas.data; //hrs pake .data
      setMovies(result.data); //result tak bisa dibaca diluar, makanya taro di state
    };
    getMovies();
  }, [location.search, pagination]);

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
      <>
      <div className="col">
        <div className="card">
          <Link to={`/movie/${movies[ind].id}`}>
            <img className="img-fluid" src={movies[ind].poster}></img>
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{movies[ind].title}</p>
          {/* <p>Rated: {movies[ind].rating}</p> */}
          {/* <ReactStars
          count={movies[ind].rating}
          size={20}
          color1={"#f4c10f"}
        ></ReactStars> */}
          <br></br>
        </div>
      </div>
      </>
    );
  });
  return <>{movieRender}</>;
};
export default Homekecil;