import React, { useState } from "react";
import { Button, Form , Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ref, set } from "firebase/database";
import { database } from "../config/firebase";

function RegisterUser() {
  const [ID, setID] = useState("");
  const [cnic, setCnic] = useState("");
  const [Fname, setFName] = useState("");
  const [Lname, setLName] = useState("");
  const [Fathername, setFatherName] = useState("");
  const [Contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let registerStudent = (e) => {
    e.preventDefault();

    if(ID === "" || cnic === "" || Fname === "" || Lname === "" || Fathername === "" || Contact === "" || email === "" || password === "")
    {
        setError("All fields are required")
    }    
    else{
        set(ref(database, 'students/' + ID), {
            ID,
            cnic,
            Fname,
            Lname,
            Fathername,
            Contact,
            email,
            password
        }).then(() => {
            alert("Student Registered Successfully");
            setID("");
            setCnic("");
            setFName("");
            setLName("");
            setFatherName("");
            setContact("");
            setEmail("");
            setPassword("");
        }).catch(e=>{
            setError("Please Recheck Field Data !");
        })
    }
  }

  return (
    <>
      <h3 className="bg-primary text-center text-white py-3">Register User</h3>
      <div className="container mb-3">
        <Link to="/admin">
          <hr/>
          <svg
            width="30px"
            fill="#2980b9"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM288 360c0 9.531-5.656 18.19-14.41 22C270.5 383.3 267.3 384 264 384c-5.938 0-11.81-2.219-16.34-6.406l-112-104C130.8 269 128 262.7 128 256s2.781-13.03 7.656-17.59l112-104c7.031-6.469 17.22-8.156 25.94-4.406C282.3 133.8 288 142.5 288 152V360z" />
          </svg>
          <span className="mx-2 my-3">GO TO BACK</span>
          <hr/>
        </Link>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter ID"
              required value={ID} onChange={(e) => setID(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCNIC">
            <Form.Label>CNIC</Form.Label>
            <Form.Control
              type="text"
              placeholder="CNIC"
              required value={cnic} onChange={(e) => setCnic(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              required value={Fname} onChange={(e) => setFName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              required value={Lname} onChange={(e) => setLName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFather">
            <Form.Label>Father Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Father Name"
              required value={Fathername} onChange={(e) => setFatherName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              required value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="number"
              placeholder="Contact"
              required value={Contact} onChange={(e) => setContact(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
          <Button variant="primary" type="submit" onClick={registerStudent}>
            Register Student
          </Button>
        </Form>
      </div>
    </>
  );
}

export default RegisterUser;
