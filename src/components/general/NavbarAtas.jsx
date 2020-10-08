import React from 'react'
import { Navbar ,Nav ,Form ,FormControl} from "react-bootstrap";
import LoginBtn from './small-component/LoginBtn';
import "../Css/Navbar.css";
export default function NavbarAtas() {
    return (
        <div>
           <Navbar bg="transparant" variant="dark" expand="lg">
<<<<<<< HEAD
                
=======
                <Navbar.Brand href="#home">M 0 V ! E</Navbar.Brand>
>>>>>>> c0b1021d47a3774458829b6d1cdf1a5070ef6986
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand className="" href="#home">Icon</Navbar.Brand>
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
