import React, { useState, useEffect, useParams } from "react";
import axios from "axios";
import {
  fetchMovies2,
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchTopratedMovie,
} from "../../service";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import NavbarAtas from "../general/NavbarAtas";
import Footer from "../general/Footer";
import Homekecil from "./Homekecil";
import { CardColumns } from "react-bootstrap";
import Bygenre from "./Bygenre";

export function Home() {
  const history = useHistory();
  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [page, setPage] = useState(1); //page berapa
  const [totalPages, setTotalPages] = useState(1); //total pages keganti pas ambil pertama kali
  const [halamanBaru, Sethalamanbaru] = useState([]);



  useEffect(() => {
    const fetchAPI = async () => {
      const getMovie = fetchMovieByGenre(28); //ganti untuk dapet totalpages
      getMovie.then((data) => {
        setMovieByGenre(data.result);
        setTotalPages(data.totalPages);
      });

      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setTopRated(await fetchTopratedMovie());
      history.replace({
        search: '',
      })
    };

    fetchAPI();
  }, []);

  useEffect(() => {
    // ngecheck state page keganti atau tidak kalo ganti ambil data berdasarkan page
    const getMovie = fetchMovieByGenre(28, page);
    getMovie.then((data) => {
      setMovieByGenre(data.result);
      setTotalPages(data.totalPages);
    });
  }, [page]);

  const handleGenreClick = async (genre_id) => {
    setPage(1);
    const getMovie = fetchMovieByGenre(28);
    getMovie.then((data) => {
      setMovieByGenre(data.result);
      setTotalPages(data.totalPages);
    });
  };

  const handleNextPage = () => {
    // ganti ke dinamic masih static

    setPage(page + 1);
  };

  const movies = nowPlaying.slice(0, 4).map((item, index) => {
    return (
      <div style={{ height: 500, width: "100%" }} key={index}>
        <div className="carousel-center">
          <img style={{ height: 600 }} src={item.poster} alt={item.title} />
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

  // const movieList = movieByGenre.map((item, index) => {
  //   return (
  //     <div className="col-md-3 col-sm-6" key={index}>
  //       <div className="card">
  //         <Link to={`/movie/${item.id}`}>
  //           <img className="img-fluid" src={item.poster} alt={item.title}></img>
  //         </Link>
  //       </div>
  //       <div className="mt-3">
  //         <p style={{ fontWeight: "bolder" }}>{item.title}</p>
  //         <p>Rated: {item.rating}</p>
  //         <ReactStars
  //           count={item.rating}
  //           size={20}
  //           color1={"#f4c10f"}
  //         ></ReactStars>
  //       </div>
  //     </div>
  //   );
  // });

  const topRatedList = topRated.slice(0, 4).map((item, index) => {
    return (
      <div className="col">
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img className="img-fluid" src={item.poster}></img>
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{item.title}</p>
          {/* <p>Rated: {item.rating}</p> */}
          {/* <ReactStars
            count={item.rating}
            size={20}
            color1={"#f4c10f"}
          ></ReactStars> */}
          <br></br>
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

        <div className="col " style={{ color: "#5a606b" }}>
       <Bygenre/>
       {/* bisa di isi lagi  */}
        </div>

        {/* <div className="row mt-3">
          <div className="col">
            <div className="float-right">
              <i className="far fa-arrow-alt-circle-right" onClick={handleNextPage}></i>
            </div>
          </div>
        </div> */}
        <div className="row mt-3">
          <div className="col">
            <p className="font-weight-bold" style={{ color: "#5a606b" }}>
              LIST MOVIE
            </p>
            <br></br>
            <CardColumns>
              <Homekecil />
            </CardColumns>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <p className="font-weight-bold" style={{ color: "#5a606b" }}>
              TOP RATED MOVIES
            </p>
          </div>
        </div>

        {/* <div className="row mt-3">
          <div className="col">
            <div className="float-right">
              <i className="far fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </div> */}
        <div className="row mt-3">{topRatedList}</div>

        <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>

        <Footer />
      </div>
    </div>
  );
}