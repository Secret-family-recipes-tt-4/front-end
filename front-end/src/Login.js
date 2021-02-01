import React from 'react'
import { Form } from 'react-bootstrap'

function Login() {
    return (
        <div>
            <h1>This is my login page</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Create a Username:</Form.Label>
                    <Form.Control type="username" placeholder='Enter a Username' />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group>
                    <Form.Label>Email Adress:</Form.Label>
                    <Form.Control type="email" placeholder='example@email.com' />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="email" placeholder='Enter Password' />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Login
