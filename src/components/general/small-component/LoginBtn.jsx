import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Image,
  Col
} from "react-bootstrap";
import "./Small-Css/login.css";
import { Link } from "react-router-dom";

export default function LoginBtn() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [isLogin, isLoginini] = useState(localStorage.getItem("isLogin"));
  const [imageUpload, setImage] = useState({});
  // untuk perubahan
  const [inputanAll, setInputAll] = useState({
    username: "",
    password: "",
  });

  const [editProfil, setEditProfil] = useState({
    name: "",
  });


  const [RegisterState, SetRegisterState] = useState({
    username: "",
    password: "",
    name: "",
    image: {},
    role: "Member",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);


  const perubahan = (e) => {
    const namasaya = e.target.getAttribute("nama");
    setInputAll({ ...inputanAll, [namasaya]: e.target.value });
  };

  const perubahan2 = (e) => {
    const namasaya = e.target.getAttribute("nama");
    SetRegisterState({ ...RegisterState, [namasaya]: e.target.value });
  };

  const perubahan3 = (e) => {
    const namasaya = e.target.getAttribute("nama");
    setEditProfil({ ...editProfil, [namasaya]: e.target.value });
  };

  
  const uploadImage = async (e) => {
    const files = e.target.files;
    setImage({ ...imageUpload, image: files[0] });
    console.log(imageUpload);
  };

  const OnKliklogin = (e) => {
    // on clik login
    //  console.log({inputanAll});

    fetch("https://gentle-garden-05760.herokuapp.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputanAll),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Success:", result);
        localStorage.setItem("token", result.access_token);
        localStorage.setItem("isLogin", true);
        window.location.reload(false);
      })
      .catch((err) => console.log("error"));

   
  };

  const ambildata = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "access_token",localStorage.getItem('token')
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://gentle-garden-05760.herokuapp.com/users/profile/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("id_user", result.id);
        localStorage.setItem("us_user", result.username);
        localStorage.setItem("nm_user", result.name);
        localStorage.setItem("img_user", result.image);
      })
      .catch((error) => console.log("error", error));
  };

  const daftarbaru2 = (e) => {
    e.preventDefault();
    // register state

    var formdata = new FormData();
    formdata.append("username", `${RegisterState.username}`);
    formdata.append("password", `${RegisterState.password}`);
    formdata.append("name", `${RegisterState.name}`);
    formdata.append("role", "Member");
    formdata.append("image", imageUpload.image, `${imageUpload.image.name}`);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://gentle-garden-05760.herokuapp.com/users/register",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log("Success:", result);
        result = result.replace(/{"access_token":"/gi, "");
        result = result.replace(/"}/gi, "");
        console.log("Success 2:", result);
        localStorage.setItem("token", result);
        localStorage.setItem("isLogin", true);
        window.location.reload(false);
      })
      .catch((err) => console.log("error"));
  };

  const Logout = (e) => {
    localStorage.setItem("isLogin", false);
    localStorage.setItem("token", '');
    localStorage.setItem("id_user", '');
    localStorage.setItem("us_user", '');
    localStorage.setItem("nm_user", '');
    localStorage.setItem("img_user", '');
    window.location.reload(false);
  };

const EditProfil =()=>{
  var myHeaders = new Headers();
  myHeaders.append("access_token", localStorage.getItem('token'));
  
  var formdata = new FormData();
  formdata.append("name", editProfil.name);
  formdata.append("image", imageUpload.image);
  
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };
  
  fetch("https://gentle-garden-05760.herokuapp.com/users/editprofile/", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
     Logout()
    })
    .catch(error => console.log('error', error));
  
}

  // fungsi tampil

  if (isLogin === "false") {
    return (
      <div>
        <>
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-light">
              <Link to={"/"}>Home</Link>
            </Button>
            <Button variant="outline-light" onClick={handleShow}>
              Login
            </Button>
            <Button variant="outline-light" onClick={handleShow2}>
              Sign Up
            </Button>
          </ButtonGroup>
          {/* login */}
          <Modal
            style={{ color: "black" }}
            show={show}
            onHide={handleClose}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* isi from */}
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    nama="username"
                    onChange={perubahan}
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    nama="password"
                    onChange={perubahan}
                    type="password"
                    placeholder="Password"
                  />
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
          <Modal
            style={{ color: "black" }}
            show={show2}
            onHide={handleClose2}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* isi from */}
              <Form onSubmit={OnKliklogin}>
                <Form.Group controlId="formBasicInput">
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control
                    nama="name"
                    onChange={perubahan2}
                    type="text"
                    placeholder="username"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    nama="username"
                    onChange={perubahan2}
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <input
                    type="file"
                    name="file"
                    placeholder="Upload an image"
                    onChange={uploadImage}
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
              <Button variant="outline-light" onClick={daftarbaru2}>
                Sign Up
              </Button>
            </Modal.Footer>
          </Modal>

          {/* sgin in end */}
        </>
        {/* login */}
        <Modal
          style={{ color: "black" }}
          show={show}
          onHide={handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* isi from */}
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  nama="username"
                  onChange={perubahan}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  nama="password"
                  onChange={perubahan}
                  type="password"
                  placeholder="Password"
                />
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
    );
  } else {
    return (
      <div className="col col-sm-12">
        {ambildata()}
        <div className="col">
          {["left"].map((direction) => (
            <DropdownButton
              className="btn-kebawah"
              as={ButtonGroup}
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="outline-light"
              title={"hay : " + localStorage.getItem('nm_user')}
            >
              <Col xs={6} md={4}>
                <Image style={{ maxHeight: '60px' }} src={localStorage.getItem('img_user')} roundedCircle />
              </Col>
              <Dropdown.Item eventKey="1">Home</Dropdown.Item>

              <Button variant="" onClick={handleShow3}>
                Edir Profil
              </Button>
              <Dropdown.Item onClick={Logout} eventKey="4">
                Log Out
              </Dropdown.Item>
            </DropdownButton>
          ))}
        </div>
        {/* edit profil form  */}
        <Modal
          style={{ color: "black" }}
          show={show3}
          onHide={handleClose3}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* isi from */}
            <Form>
              <Form.Group controlId="formBasicInput">
                <Form.Label>Fullname</Form.Label>
                <Form.Control nama="name" type="text" onChange={perubahan3} placeholder={ localStorage.getItem('nm_user')} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
              <input
                    type="file"
                    name="file"
                    placeholder="Upload an image"
                    onChange={uploadImage}
                  />
              </Form.Group>
            </Form>

            {/*isi Forom end  */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-light" onClick={EditProfil}>
              Save Info
            </Button>
          </Modal.Footer>
        </Modal>
        {/* edit profil form end */}

     
      </div>
    );
  }
}
