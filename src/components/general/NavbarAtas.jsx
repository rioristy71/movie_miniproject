import React from 'react'
import { Navbar ,Nav ,Form ,FormControl} from "react-bootstrap";
import LoginBtn from './small-component/LoginBtn';
import "../Css/Navbar.css";
export default function NavbarAtas() {
    return (
        <div>
           <Navbar bg="transparant" variant="dark" expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
<<<<<<< HEAD
                <Navbar.Brand className="" to={'/'}>Icon</Navbar.Brand>
=======
                <Navbar.Brand className="logo" to={'/'}>C ! N E M A T ! C</Navbar.Brand>
>>>>>>> b5fe3c705353f398ad9e2c0242f7d320b6a4377a
                    <Nav className=" mr-auto ">
                    </Nav>
                   
                    <Form className="search-tengah">
                    <FormControl type="text" placeholder="Search"  />
                    </Form>
                    <Form inline>
                    
                    <Nav.Link href="#link"><LoginBtn/></Nav.Link>
                    </Form>
                </Navbar.Collapse>
                </Navbar> 
        </div>
    )
}
