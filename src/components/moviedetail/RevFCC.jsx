import React, { useState, useEffect } from "react";
import { Tabs, Tab, Form, Button, FormControl, Card } from "react-bootstrap";
import { render } from "react-dom";
import ReactStars from "react-rating-stars-component";
import {useParams } from "react-router-dom";

export default function RevFCC(match) {
  // console.log(useParams().id)
  let params =useParams().id;
  const [detail, setDetail] = useState([]);
  const [detailku, setDetailku] = useState([]);
  const [bintang, setBintang] = useState(0);
  const [AddRivewku, SetAddRiview ] = useState({

    rating :'',
    comment :'mantab gan movienya',
  });
  

  const AddRivew = e =>{
    // on clik daftar    
    e.preventDefault();
    // console.log({});
    fetch(`https://gentle-garden-05760.herokuapp.com/review/movie/${params}`, {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json',
         'access_token': localStorage.getItem('token'),
     },
     body: JSON.stringify(AddRivewku)
       })
       .then(res => res.json())
       .then(result => {
         console.log('data masuk')
       }).catch((err)=>(console.log("error")))
 


  //  console.log({});
  }

  const inputdataonchange =(e) => {
    const comment = e.target.getAttribute("nama");
    SetAddRiview({...AddRivewku, [comment]:e.target.value})

    console.log(AddRivewku)
  } 


  const perubahan = () => {
    const namasaya = localStorage.getItem("token");
    // console.log(namasaya);
    // setInputAll({...inputanAll, [namasaya]:e.target.value})
// console.log('params' + params)
    fetch(
      `https://gentle-garden-05760.herokuapp.com/review/movie=${params}/1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        // console.log("Success:", result);
        //    console.log('isi local storahe ' ,localStorage);
        //    window.location.reload(false);
        setDetail(result);
        setDetailku(result.Comment); 
       // console.log(detailku);
      })
      .catch((err) => console.log("error"));

      // console.log();
  };


  const tesmaping = detailku.map((item, index) => {
    const punyaku = {
      size: 6,
      count: 10,
      color: "none",
      activeColor: "red",
      value: item.rating,
      a11y: true,
      isHalf: true,
      emptyIcon: <i className="far fa-star" />,
      halfIcon: <i className="fa fa-star-half-alt" />,
      filledIcon: <i className="fa fa-star" />,
    
    };

   

    return (
      <Card.Body>
        <Form.Group controlId="formBasicTextarea">
    <Form.Label>{item.User["name"]}</Form.Label>
          <Form> {item.comment}</Form>
          <Form.Text className="text-muted">
            <ReactStars {...punyaku} />
          </Form.Text>
        </Form.Group>
        </Card.Body>
    );



  });



  // const tampilkan =;
  // console.log(tampilkan);
  const secondExample = {
    size: 20,
    count: 10,
    color: "none",
    activeColor: "red",
    value: bintang,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (iniaja) => {
      console.log(`Example 2: new value is ${iniaja}`);
        SetAddRiview({...AddRivewku, rating:iniaja})
        setBintang(iniaja)
   
    },
  };

  // const detail.map((item, index) => {
  //   return (
  //     <li className="list-inline-item" key={index}>
  //       <button
  //         type="button"
  //         className="btn btn-outline-info"
  //       >
  //         {item.comment}
  //       </button>
  //     </li>
  //   );
  // });

  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" onClick={perubahan()} title="Comente">
          {tesmaping}
        </Tab>
        <Tab eventKey="profile" title="Riview">
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicRange">
                <Form.Label>Rating</Form.Label>
                <ReactStars {...secondExample} />
              </Form.Group>
              <Form.Group controlId="formBasicTextarea">
                <Form.Label>Input Komen</Form.Label>
                <FormControl onChange={inputdataonchange} nama="comment" as="textarea" aria-label="With textarea" />
                <Form.Text className="text-muted">nyobak tok</Form.Text>
              </Form.Group>
               
              <Button variant="primary"  onClick={AddRivew} type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Tab>
      </Tabs>
    </div>
  );
}
