import React from "react";
import { Card, Form } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import Sign from "./Sign";

function Login() {
  return (
    <Card className="mb-10">
      <Card.Body>
        <div className="mx-auto">
          <Form>
            <Form.Group>
              <Form.Label>Create a Username:</Form.Label>
              <Form.Control type="username" placeholder="Enter a Username" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>

          <Form>
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control type="email" placeholder="Enter Password" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>
          <div className="sign">
            <h6>Don't have an account?</h6>
            <Link to="/Sign" className="btn btn-primary">
              Sign up
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Login;
