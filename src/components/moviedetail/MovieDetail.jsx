import React, { useState, useEffect } from "react";
import {
  fetchMovieDetail,
  fetchMovieVideos,
  fetchCasts,
  fetchSimilarMovie,
} from "../../service";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Footer from "../general/Footer";
import NavbarAtas from "../general/NavbarAtas";
import RevFCC from "./RevFCC";
import "./moviedetail.css";

export function MovieDetail({ match }) {
  let params = match.params;
  let genres = [];
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));
      
      setSimilarMovie(await fetchSimilarMovie(params.id));
    };

    fetchAPI();
  }, [params.id]);

  genres = detail.genres;

  const MoviePalyerModal = (props) => {
 
    return (
    
     

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ color: "#000000", fontWeight: "bolder" }}
          >
            {detail.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#000000" }}>
          <ReactPlayer
            className="container-fluid"
            url={detail.trailer }
            playing
            width="100%"
          ></ReactPlayer>
        </Modal.Body>
      </Modal>
     
    );
  };

  let genresList;
  if (genres) {
    genresList = genres.map((g, i) => {
      return (
        <li className="list-inline-item" key={i}>
          <button type="button" className="btn btn-outline-info">
            {g.name}
          </button>
        </li>
      );
    });
  }

  // const castList = casts.slice(0, 6).map((c, i) => {
  //   return (
  //     <div className="col-md-2 text-center" key={i}>
  //       <img
  //         className="img-fluid rounded mx-auto d-block"
  //         src={c.img}
  //         alt={c.name}
  //       ></img>
  //       <p className="font-weight-bold text-center">{c.name}</p>
  //       <p
  //         className="font-weight-light text-center"
  //         style={{ color: "#5a606b" }}
  //       >
  //         {c.character}
  //       </p>
  //     </div>
  //   );
  // });

  const similarMovieList = similarMovie.slice(0, 4).map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img className="img-fluid" src={item.poster} alt={item.title}></img>
          </Link>
        </div>
        {console.log(item)}
        <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{item.title}</p>
          <p>Release Date: {item.popularity}</p>
          <ReactStars
            count={item.rating}
            size={20}
            color1={"#f4c10f"}
          ></ReactStars>
        </div>
      </div>
    );
  });

  const project = () => {
    console.log(similarMovie);
    switch(detail.genre) {

      case 1:   return <li className="btn btn-danger">Action</li>;
      case 2:   return <li className="btn btn-warning">Animation</li>;
      case 3:   return <li className="btn btn-secondary">Horor</li>;
      case 4:  return <li className="btn btn-light">Thiler</li>;
      case 5:  return <li className="btn btn-danger">Comedy</li>;
    

      default:      return <h1>No project match</h1>
    }
  }

  const Rated = () => {
    switch(detail.rated) {
      case "R":   return <p>Remaja</p>;
      case "D":   return <p>Dewasa</p>;
      case "PG-13":   return <p>Diatas 13 Tahun</p>;
      case "G":   return <p>General</p>;

      default:      return <h1>No project match</h1>
    }
  }



  return (
    <>
    <NavbarAtas/>
    <div className="container ">
    
      <div className="row mt-2 ">
        
        <MoviePalyerModal
          show={isOpen}
          onHide={() => {
            setIsOpen(false);
          }}
        ></MoviePalyerModal>
        <div className="col text-center card-atas" style={{ width: "100%" }}>
          <img
            className="img-fluid"
            src={`${detail.poster}`}
            alt={detail.title}
          ></img>
          <div className="carousel-center">
            <i
              onClick={() => setIsOpen(true)}
              className="far fa-play-circle"
              style={{ fontSize: 95, color: "#f4c10f", cursor: "pointer" }}
            ></i>
          </div>
          <div
            className="carousel-caption"
            style={{ textAlign: "center", fontSize: 35 }}
          >
            {detail.title}
          </div>
        </div>
      </div>
      <br/><br/>
      <div className="warper card-atas">
      <div className="row mt-3 ">
        <div className="col  ">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>GENRE</p>
        </div>
      </div>

      <div className="row mt-3 ">
        <div className="col">
          <ul className="list-inline">{project()}</ul>
        </div>
      </div>

      <div className="row mt-3 ">
        <div className="col ">
          <div className=" mt-3">
            <p style={{ color: "#5a606b", fontWeight: "bolder" }}>OVERVIEW</p>
            {detail.synopsis}
          </div>
        </div>
      </div>

     
      

      <div className="row mt-3">
        <div className="col-md-3 ">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>RELEASE DATE</p>
          <p style={{ color: "#f4c10f" }}>{detail.releaseDate}</p>
        </div>
        <div className="col-md-3 ">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>LANGUAGE</p>
          <p style={{ color: "#f4c10f" }}>{detail.language}</p>
        </div>
        <div className="col-md-3 ">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>FOR</p>
          <p style={{ color: "#f4c10f" }}>{Rated()}</p>
        </div>
        <div className="col-md-3 ">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>VOTE COUNT</p>
          <p style={{ color: "#f4c10f" }}>{detail.voteCount}</p>
        </div>
      </div>
      </div><br/>
      <br/>
      <br/>
      <div> 
        <RevFCC/>
       
      </div>
      <div className="row mt-3">
        <div className="col">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>CASTS</p>
        </div>
      </div>
      {/* <div className="row mt-3">{castList}</div> */}

      <div className="row mt-3">
        <div className="col">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>
            SIMILAR MOVIES
          </p>
        </div>
      </div>

      <div className="row mt-3">{similarMovieList}</div>

      <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>

            <Footer/>
    </div>
    </>
  );
}
