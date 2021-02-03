import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
    const history = useHistory();
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState("")
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmitSignIn = (e) => {
        e.preventDefault();
        console.log(formData);
        axios
            .post(
                "https://secret-fam-recipes.herokuapp.com/api/login",
                formData
            )
            .then((res) => {
                console.log(res.data);
                localStorage.setItem("token", res.data.token);
                history.push(`/User-page`);
            })
            .catch((err) => {
                console.log(err);
                setError(err)
                setFormData({ username: "", password: "" })
            });
    };
   

    return (
        <Card className="mb-10">
            <Card.Body>
                {error && <h1>Please reenter username or password, or create a new account</h1>}
                <div className="mx-auto">
                    <Form>
                        <Form.Group>
                            <Form.Label></Form.Label>
                            <Form.Control
                                type="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter your Username"
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                    </Form>

                    <Form>
                        <Form.Group>
                            <Form.Label></Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter Password"
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                    </Form>
                    <div  className="sign">
                        <h6>Don't have an account?</h6>
                        <Link to="/Sign" className="btn btn-primary">
                            Sign up
                        </Link>
                        <button
                            className="btn btn-success"
                            type="submit"
                            onClick={handleSubmitSignIn}
                            style={{marginLeft:20}}
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Login;
