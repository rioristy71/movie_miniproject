import React, { Component } from 'react'
import { Tabs ,Tab ,Form  ,Button ,FormControl} from "react-bootstrap";
export default class Rivew extends Component {
    render() {
        return (
            <div>

        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Comente">
                <h1>Di isi rivew </h1>
            </Tab>
            <Tab eventKey="profile" title="Riview">
            <Form>
            <Form.Group controlId="formBasicRange">
                        <Form.Label>Suka</Form.Label>
                        <Form.Control type="range" />
                    </Form.Group>
                <Form.Group controlId="formBasicTextarea">
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
            </Tab>
            </Tabs>
        </div>
            </div>
        )
        }
}
