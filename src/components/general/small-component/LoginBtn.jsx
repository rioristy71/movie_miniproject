
import React, { useState } from "react";
import { Button ,Modal ,Form ,Dropdown ,DropdownButton ,ButtonGroup} from "react-bootstrap";
import "./Small-Css/login.css";



export default function LoginBtn() {
    const [show, setShow] = useState(false);
    const [login, setLogin] = useState(false);

  const LoginIN = () => setLogin(true);
  const LoginOut = () => setLogin(false);
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    if (!setLogin) {
       
      return (
        <div>
       
        <>
          <Button variant="outline-light" onClick={handleShow}>
            Login
          </Button>
    
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
    
    
                {/*isi Forom end  */}
            </Modal.Body>
            <Modal.Footer>
            
              <Button variant="outline-light" onClick={handleClose}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>
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
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          ))}
          </div>


      </div>
        )
    }


    
}
