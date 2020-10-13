import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import LoginBtn from "./small-component/LoginBtn";
import "../Css/Navbar.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function NavbarAtas() {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const submit = (e) => {
    e.preventDefault();
    history.push({
        pathname: '/',
        search: `?search=${search}`
    })
  };

  return (
    <div>
      <Navbar bg="transparant" variant="dark" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand className="logo" to={"/"}>
            C ! N E M A T ! C
          </Navbar.Brand>
     
          <Form className="search-tengah" onSubmit={submit} >
            <FormControl
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
          <Form inline>
            <Nav.Link >
              <LoginBtn />
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}