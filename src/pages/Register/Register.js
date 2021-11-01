import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div className="container w-25 mt-5 mb-5">
            <h4>Please Register</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <br /><br />
            <span>Already register?
                <Link style={{ borderBottomColor: "#EE4F15" }} className="btn" to="/login">Please Login</Link>
            </span>
            <br /><br />
            <button onClick={signInUsingGoogle}>Google sign in</button>


        </div>
    );
};

export default Register;