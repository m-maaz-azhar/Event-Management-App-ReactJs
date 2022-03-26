import React from "react";
import {Alert, Button , Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    let navigate = useNavigate();

    let attemptLogin = (e) => {
        e.preventDefault();
        if(password === "123" && email === "example@gmail.com") {
            navigate("/admin");
        }
        else{
            setError("Email or Password is incorrect");
        }
    }
  return (
    <Container className="mt-5">
        <h2>LOGIN</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
      {error &&   <Alert variant="danger">{error}</Alert>}
        <Button variant="primary" type="submit" onClick={attemptLogin}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
