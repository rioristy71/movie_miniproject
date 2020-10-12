import React, { useState } from "react";
import {
 
  Card,
  Nav,
  ListGroup,

} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Bygenre() {
  const [show, setShow] = useState("");
  const [detail, setDetail] = useState([]);

  const genre = (id) => {
    var requestOptions = {
      method: "GET",
    };

    fetch(
      `https://gentle-garden-05760.herokuapp.com/movies/genre/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setDetail(result);
        // console.log(result);
        console.log(detail);
      })
      .catch((error) => console.log("error", error));
  };

  const tampil = () =>
    detail.map((g, i) => {
      return (
        <Link to={`/movie/${g.id}`}>
        <ListGroup.Item action  style={{backgroundColor:'transparent', border:'1px solid gray' }} >
      
            {g.title}
        
        </ListGroup.Item>
        </Link>
      );
    });

  return (
    <div>
      <Card  style={{backgroundColor:'transparent' }} >
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#Action"  className="justify-content-center">
            <Nav.Item >
              <Nav.Link 
                onClick={function (event) {
                  genre(1);
                }}
                href="#Action"
              >
                Action
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={function (event) {
                  genre(2);
                }}
                href="#Animation
"
              >
                Animation
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={function (event) {
                  genre(3);
                }}
                href="#Horror
"
              >
                Horror
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={function (event) {
                  genre(4);
                }}
                href="#Thriller
"
              >
                Thriller
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={function (event) {
                  genre(5);
                }}
                href="#Commedy"
              >
                Commedy
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>  <ListGroup horizontal={'l'}>
           {tampil()}
           </ListGroup></Card.Body>
      </Card>
    </div>
  );
}
