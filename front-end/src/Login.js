import React,{useState} from "react";
import { Card, Form } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import Sign from "./Sign";

function Login() {
  const [formData, setFormData]=useState({username:'',password:''})
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  }
  const submitLogin=()=>{
    //dispatches action to submit info to the API, and get an auth token back
  }
  
  return (
    <Card className="mb-10">
      <Card.Body>
        <div className="mx-auto">
          <Form>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control type="username" name='username' value={formData.username} onChange={handleChange}placeholder="Enter your Username" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>

          <Form>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control type="password" name='password' value={formData.password}onChange={handleChange} placeholder="Enter Password" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>
          <div className="sign">
            <h6>Don't have an account?</h6>
            <Link to="/Sign" className="btn btn-primary">
              Sign up
            </Link>
          </div>
          <div className="sign">
            <Link to="/" className="btn btn-primary">
              Sign in
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Login;
