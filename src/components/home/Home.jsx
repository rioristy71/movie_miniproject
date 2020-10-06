import React, { useState, useEffect } from "react";
import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchTopratedMovie,
} from "../../service";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import NavbarAtas from "../general/NavbarAtas";
import Footer from "../general/Footer";
import { Accordion, Card, Carousel } from "react-bootstrap";
export function Home() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(28));

      setTopRated(await fetchTopratedMovie());
    };

    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
  };
  const movies = nowPlaying.slice(0, 5).map((item, index) => {
    return (
      <div style={{ height: 500, width: "100%" }} key={index}>
        <div className="carousel-center">
          <img style={{ height: 600 }} src={item.backPoster} alt={item.title} />
        </div>
        <div className="carousel-center"></div>
        <div
          className="carousel-caption"
          style={{ textAlign: "center", fontSize: 35 }}
        >
          {item.title}
        </div>
      </div>
    );
  });

  const genreList = genres.map((item, index) => {
    return (
      <li className="list-inline-item" key={index}>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            handleGenreClick(item.id);
          }}
        >
          {item.name}
        </button>
      </li>
    );
  });

  const movieList = movieByGenre.slice(0, 12).map((item, index) => {
    return (
      // pertama
      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 " key={index}>
        <Carousel interval={100000}>
          <Carousel.Item>
            <Link to={`/movie/${item.id}`}>
          
              <img
              
                className="img-fluid"
                src={item.poster}
                alt={item.title}
              ></img>
            </Link>
            <Carousel.Caption>
              
            </Carousel.Caption>
            <div className="mt-1 "
>                 <ReactStars
                  count={item.rating}
                  size={20}
                  color1={"#f4c10f"}
                ></ReactStars>
                {/* <h3 style={{ fontWeight: "bolder" }}>{item.title}</h3> */}
                <p>Rated: {item.rating}</p>
              </div>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={`/movie/${item.id}`}>
              {/* <img
                className="img-fluid"
                src={item.poster}
                alt={item.title}
              ></img> */}
                </Link>       <p   className="">{item.overview.slice(0, 1000)}</p>
            <Carousel.Caption  color1={"#f4c10f"}>
     
        </Carousel.Caption>
        <div className="mb-4 "
>                 <ReactStars
                  count={item.rating}
                  size={20}
                  color1={"#f4c10f"}
                ></ReactStars>
                {/* <h3 style={{ fontWeight: "bolder" }}>{item.title}</h3> */}
                <p>Rated: {item.rating}</p>
              </div>
          </Carousel.Item>
        </Carousel>

        {/* end div */}

        <div className="mt-3">
         
        </div>
      </div>
      // kedua
    );
  });

  const topRatedList = topRated.slice(0, 4).map((item, index) => {
    return (
      <div className="col-md-3" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img className="img-fluid" src={item.poster} alt={item.title}></img>
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{item.title}</p>
          <p>Rated: {item.rating}</p>
          <ReactStars
            count={item.rating}
            size={20}
            color1={"#f4c10f"}
          ></ReactStars>
        </div>
      </div>
    );
  });

  return (
    <div>
      <NavbarAtas />
      <div className="container">
        <div className="row mt-2">
          <div className="col">
            <RBCarousel
              autoplay={true}
              pauseOnVisibility={true}
              slidesshowSpeed={5000}
              version={4}
              indicators={false}
            >
              {movies}
            </RBCarousel>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <ul className="list-inline">{genreList}</ul>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <div className="float-right">
              <i className="far fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </div>
        <div className="row mt-3">{movieList}</div>

        <div className="row mt-3">
          <div className="col">
            <p className="font-weight-bold" style={{ color: "#5a606b" }}>
              TOP RATED MOVIES
            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <div className="float-right">
              <i className="far fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </div>
        <div className="row mt-3">{topRatedList}</div>

        <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>

        <Footer />
      </div>
    </div>
  );
}
