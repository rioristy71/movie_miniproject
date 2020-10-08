
import React, { useState } from "react";
import { Button ,Modal ,Form ,Dropdown ,DropdownButton ,ButtonGroup} from "react-bootstrap";
import "./Small-Css/login.css";



export default function LoginBtn() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [login, setLogin] = useState(false);

  const LoginIN = () => setLogin(true);
  const LoginOut = () => setLogin(false);
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
    if (setLogin) {
       
      return (
        <div>
       
        <><ButtonGroup aria-label="Basic example">
         <Button variant="outline-light">
            Home
          </Button>
          <Button variant="outline-light" onClick={handleShow}>
            Login
          </Button>
          <Button variant="outline-light" onClick={handleShow2}>
            Sign Up
          </Button>
          </ButtonGroup>
        {/* login */}
          <Modal  style={{color:"black"}} show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* isi from */}
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                 </Form>
    
    
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-light" onClick={handleClose}>
                Login
              </Button>

            </Modal.Footer>
          </Modal>
          {/* login modal end */}
          {/* sgin in  */}
          <Modal  style={{color:"black"}} show={show2} onHide={handleClose2} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* isi from */}
                <Form>
                <Form.Group controlId="formBasicInput">
                        <Form.Label>Fullname</Form.Label>
                        <Form.Control type="text" placeholder="username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                 </Form>
    
    
                {/*isi Forom end  */}
            </Modal.Body>
            <Modal.Footer>
            
              <Button variant="outline-light" onClick={handleClose2}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>

          {/* sgin in end */}
        </>
      
    
    
    
            </div>


      )
    } else {
        return (
      <div>
              <div className="mb-2">
          {['left'].map((direction) => (
          <DropdownButton className="btn-kebawah"
            as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="outline-light"
            title={` icon  `}
          >
            <Dropdown.Item eventKey="1">Home</Dropdown.Item>
            
              <Button variant="" onClick={handleShow3}>
            Edir Profil
            </Button>
            <Button variant="" onClick={handleShow4}>
            Edit Image
            </Button>
            <Dropdown.Item eventKey="4">Log Out</Dropdown.Item>
            </DropdownButton>
          ))}
          </div>
            {/* edit profil form  */}
            <Modal  style={{color:"black"}} show={show3} onHide={handleClose3} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* isi from */}
                <Form>
                <Form.Group controlId="formBasicInput">
                        <Form.Label>Fullname</Form.Label>
                        <Form.Control type="text" placeholder="username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                 </Form>
    
    
                {/*isi Forom end  */}
            </Modal.Body>
            <Modal.Footer>
            
              <Button variant="outline-light" onClick={handleClose3}>
                Save Info
              </Button>
            </Modal.Footer>
          </Modal>

            {/* edit profil form end */}


            {/* form edit image */}

            <Modal  style={{color:"black"}} show={show4} onHide={handleClose4} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* isi from */}
                <Form>
                
                        <Form.Group>
                          <Form.File id="exampleFormControlFile1" label="Example file input" />
                        </Form.Group>
                      </Form>
               
            </Modal.Body>
            <Modal.Footer>
            
              <Button variant="outline-light" onClick={handleClose4}>
                Save Image
              </Button>
            </Modal.Footer>
          </Modal>

            {/* edit image */}

      </div>
        )
    }


    
}
