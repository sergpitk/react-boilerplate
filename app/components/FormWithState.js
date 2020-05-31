import React, { Component , useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function FormWithState() {
    const [showForm, setShowForm] = useState(true);
    return (
      <>
        <div hidden={showForm}>
          <Form>
          <Form.Group controlId="formVisitorName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formQuestion">
              <Form.Label>Question</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Your Question" />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="outline-primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
  
        {/* {!show && <Button onClick={() => setShow(false)}>Have Question ?</Button>} */}
        <Button variant="outline-primary" hidden={!showForm} onClick={() => setShowForm(false)}>Have Question ?</Button>
      </>
    );
  }  
