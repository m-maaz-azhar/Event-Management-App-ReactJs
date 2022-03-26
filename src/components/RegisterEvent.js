import React, { useState } from "react";
import { Button, Form , Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ref, set } from "firebase/database";
import { database } from "../config/firebase";

function RegisterEvent() {
  const [ID, setID] = useState("");
  const [title, settitle] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [description, setdescription] = useState("");
  const [venue, setvenue] = useState("");
  const [type, settype] = useState("");
  const [limit, setlimit] = useState("");
  const [error, setError] = useState("");

  let registerEvent = (e) => {
    e.preventDefault();

    if(ID === "" || title === "" || date === "" || time === "" || description === "" || venue === "" || type === "" || limit === "")
    {
        setError("All fields are required")
    }    
    else{
        set(ref(database, 'events/' + ID), {
            ID,
            title,
            date,
            time,
            description,
            venue,
            type,
            limit
        }).then(() => {
            alert("Event Registered Successfully");
            setID("");
            settitle("");
            setdate("");
            settime("");
            setdescription("");
            setvenue("");
            settype("");
            setlimit("");
        }).catch(e=>{
            setError("Please Recheck Field Data !");
        })
    }
  }

  return (
    <>
      <h3 className="bg-success text-center text-white py-3">Register Event</h3>
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
          <Form.Group className="mb-3" controlId="formBasictype">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter ID"
              required value={ID} onChange={(e) => setID(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasictitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="title"
              required value={title} onChange={(e) => settitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicdate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="date"
              required value={date} onChange={(e) => setdate(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasictime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              placeholder="time"
              required value={time} onChange={(e) => settime(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFather">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="description"
              required value={description} onChange={(e) => setdescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasictype">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type"
              required value={type} onChange={(e) => settype(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicvenue">
            <Form.Label>Venue</Form.Label>
            <Form.Control
              type="text"
              placeholder="venue"
              required value={venue} onChange={(e) => setvenue(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLimit">
            <Form.Label>Limit</Form.Label>
            <Form.Control
              type="limit"
              placeholder="limit"
              required value={limit} onChange={(e) => setlimit(e.target.value)}
            />
          </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
          <Button variant="success" type="submit" onClick={registerEvent}>
            Register Event
          </Button>
        </Form>
      </div>
    </>
  );
}

export default RegisterEvent;
