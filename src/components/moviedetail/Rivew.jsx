import React, { Component } from 'react'
import { Tabs ,Tab ,Form  ,Button ,FormControl , Card} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const secondExample = {
    size: 20,
    count: 5,
    color: "black",
    activeColor: "red",
    value: 4.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newValue => {
      console.log(`Example 2: new value is ${newValue}`);
    }
  };

export default class Rivew extends Component {
    render() {
        return (
            <div>

        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
           
            <Tab eventKey="home" title="Comente">
            <Card.Body>
                <h1>Di isi rivew </h1>
            </Card.Body>
            </Tab>
            <Tab eventKey="profile" title="Riview">
            <Card.Body>
            <Form>
            <Form.Group controlId="formBasicRange">

                    </Form.Group>
                <Form.Group controlId="formBasicTextarea">
                <ReactStars {...secondExample} />
                    <Form.Label>Input Komen</Form.Label>
                    <FormControl as="textarea" aria-label="With textarea" />
                    <Form.Text className="text-muted">
                    nyobak tok 
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                </Card.Body>
            </Tab>
           
            </Tabs>
          
        </div>
            </div>
        )
        }
}
