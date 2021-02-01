import React from "react";
import { Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sign() {
  return (
    <div>
      <Card className="mb-10">
        <Card.Body>
          <h1>Sign Up to See New Recipes</h1>
          <Form>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="name" placeholder="First Name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder="Last Name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter E-mail" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>User Name</Form.Label>
              <Form.Control type="username" placeholder="Enter Username" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" placeholder="Enter Password" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>
          <Link to="/New" className="new">
            Sign up
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Sign;
