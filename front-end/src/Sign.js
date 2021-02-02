import React,{ useState } from "react";
import { connect } from 'react-redux';
import { Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';

function Sign(props) {
  const [formData,setFormData]=useState({username:'',password:''})

  const handleSignUpChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  }
    

  const handleSubmitSignUp=(e)=>{
    console.log(formData)
    axios.post("https://secret-fam-recipes.herokuapp.com/api/register",formData)
      .then((res)=>{
        console.log(res.data)
       
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  
  console.log(formData)
  return (
    <div>
      <Card className="mb-10">
        <Card.Body>
          <h1>Sign Up to See New Recipes</h1>
          <h2>Please choose a username and password</h2>
          <Form >
            <Form.Group>
              <Form.Label>User Name</Form.Label>
              <Form.Control name='username' onChange={handleSignUpChange} value={formData.username} type="username" placeholder="Enter Username" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' onChange={handleSignUpChange} value={formData.password} type="Password" placeholder="Enter Password" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>
          <Link to="/New" className="new" onClick={handleSubmitSignUp}>
            Sign up
          </Link>
          {/* Change link to button */}
        </Card.Body>
      </Card>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return state;
}
export default connect(mapStateToProps,{})(Sign);
