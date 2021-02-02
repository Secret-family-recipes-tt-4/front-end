import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Link, Route, useHistory } from "react-router-dom";
import axios from "axios";
import Sign from "./Sign";

function Login() {
    const history = useHistory();
    const [formData, setFormData] = useState({ username: "", password: "" });
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
                history.push("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Card className="mb-10">
            <Card.Body>
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
                    <div className="sign">
                        <h6>Don't have an account?</h6>
                        <Link to="/Sign" className="btn btn-primary">
                            Sign up
                        </Link>
                    </div>
                    <div className="sign">
                        <button
                            class="btn btn-success"
                            type="submit"
                            onClick={handleSubmitSignIn}
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
