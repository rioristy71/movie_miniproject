
import React, { useState } from "react";
import { Button ,Modal ,Form ,Dropdown ,DropdownButton ,ButtonGroup} from "react-bootstrap";
import "./Small-Css/login.css";
import {Link} from "react-router-dom";


export default function LoginBtn() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [isLogin, isLoginini] = useState(localStorage.getItem('isLogin'))   
// untuk perubahan 
const [inputanAll, setInputAll ] = useState({

  username :'',
  password :'',
});

const [RegisterState , SetRegisterState] = useState({
   username : "",
   password : "",
   name : "",
   image : "",
});

  
  // const LoginIN = () => setLogin(true);
  // const LoginOut = () => setLogin(false);
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);


  const perubahan =(e) => {
    const namasaya = e.target.getAttribute("nama");
    setInputAll({...inputanAll, [namasaya]:e.target.value})
  } 


  const perubahan2 =(e) => {
    const namasaya = e.target.getAttribute("nama");
    SetRegisterState({...RegisterState, [namasaya]:e.target.value})
  } 

  const OnKliklogin = e =>{
    // on clik login    
   console.log({inputanAll});
   fetch('https://gentle-garden-05760.herokuapp.com/users/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputanAll)
      })
      .then(res => res.json())
      .then(result => {
          console.log('Success:', result);
          localStorage.setItem('token', result.access_token);
          localStorage.setItem('isLogin', true);   
           console.log(localStorage);
           console.log(isLogin);
           window.location.reload(false);
      }).catch((err)=>(console.log("error")))

    
  }

  const daftarbaru2 = e =>{
    // on clik daftar    
    e.preventDefault();
    console.log({RegisterState});
    fetch('https://gentle-garden-05760.herokuapp.com/users/register', {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json',
     },
     body: JSON.stringify(RegisterState)
       })
       .then(res => res.json())
       .then(result => {
           console.log('Success:', result);
           localStorage.setItem('token', result.access_token);
           localStorage.setItem('isLogin', true);   
            console.log(localStorage);
            console.log(isLogin);
            window.location.reload(false);
       }).catch((err)=>(console.log("error")))
 


   console.log({RegisterState});
  }


  const Logout = e =>{
    localStorage.setItem('isLogin', false); 
    localStorage.setItem('token', '');
    window.location.reload(false);
  }

    if (isLogin==="false") {
   
      return (
        <div>
       
        <><ButtonGroup aria-label="Basic example">
         <Button variant="outline-light">
           <Link  to={'/'} >Home</Link>
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
                        <Form.Control nama="username" onChange={perubahan} type="email" placeholder="Enter email" />
                        <Form.Text  className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control nama="password" onChange={perubahan}  type="password" placeholder="Password" />
                    </Form.Group>
                 </Form>
    
    
            </Modal.Body>
            <Modal.Footer>
          
              <Button variant="outline-light" onClick={OnKliklogin}>
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
                <Form onSubmit={OnKliklogin}>
                <Form.Group controlId="formBasicInput">
                        <Form.Label>Fullname</Form.Label>
                        <Form.Control  nama ="name" onChange={perubahan2} type="text" placeholder="username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  nama ="username" onChange={perubahan2}  type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                    <Form.File 
                          onChange={perubahan2}
                          nama="image"
                          id="custom-file-translate-scss"
                          label="Custom file input"
                          lang="en"
                          custom
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  nama ="password"  onChange={perubahan2} type="password" placeholder="Password" />
                    </Form.Group>
                 </Form>
    
    
                {/*isi Forom end  */}
            </Modal.Body>
            <Modal.Footer>
             
              <Button variant="outline-light" onClick={daftarbaru2} >
                Sign Up
              </Button>
            </Modal.Footer>
          </Modal>

          {/* sgin in end */}
        </>
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
                        <Form.Control nama="username" onChange={perubahan} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control nama="password" onChange={perubahan} type="password" placeholder="Password" />
                    </Form.Group>
                 </Form>
    
    
            </Modal.Body>
            <Modal.Footer>
            <Link onClick={handleShow2}>Sign Up </Link>
              <Button variant="outline-light" onClick={OnKliklogin}>
                Login
              </Button>

            </Modal.Footer>
          </Modal>
          {/* login modal end */}
    
    
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

            title={` C ! N E M A T ! C  `}

          >
            <Dropdown.Item eventKey="1">Home</Dropdown.Item>
            
              <Button variant="" onClick={handleShow3}>
            Edir Profil
            </Button>
            <Button variant="" onClick={handleShow4}>
            Edit Image
            </Button>
            <Dropdown.Item onClick={Logout } eventKey="4">Log Out</Dropdown.Item>
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
