
import React, { useState } from "react";
import { Button ,Modal ,Form ,Dropdown ,DropdownButton ,ButtonGroup} from "react-bootstrap";




export default function LoginBtn() {
    const [show, setShow] = useState(false);
    const [login, setLogin] = useState(false);

  const LoginIN = () => setLogin(true);
  const LoginOut = () => setLogin(false);
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    if (setLogin) {
       
      return (
        <div>
       
        <>
          <Button variant="primary" onClick={handleShow}>
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
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                 </Form>
    
    
                {/*isi Forom end  */}
            </Modal.Body>
            <Modal.Footer>
            
              <Button variant="primary" onClick={handleClose}>
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
          <DropdownButton
            as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="secondary"
            title={` Drop ${direction} `}
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
