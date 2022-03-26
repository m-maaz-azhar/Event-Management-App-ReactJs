import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { database } from "../config/firebase";
import { ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";

function Home() {
  const [eventsData, seteventsData] = useState([]);

  useEffect(() => {
    const events_path = ref(database, "events/");
    onValue(events_path, (snapshot) => {
      const data = snapshot.val();
      let my_array = [];
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          my_array.push(data[key]);
        }
      }
      seteventsData(my_array);
    });
  }, []);

  console.log(eventsData);
  return (
    <div>
      <div>
        <h2 className="text-center bg-success text-white py-3">EVENTS</h2>
        <div className="d-flex justify-content-end px-2"><Link className="btn btn-primary" to="/login">LOGIN</Link></div>
      </div>
      <Container className="d-flex">
          {eventsData && eventsData.map((event) => {
              return (<Card style={{ width: "18rem" }}>
               <Card.Body className="text-center">
                 <Card.Title className="text-success">{event.title?.toUpperCase()}</Card.Title>
                 <Card.Subtitle className="mb-2 text-muted">
                   DATE: {event.date} TIME: {event.time}
                 </Card.Subtitle>
                 <Card.Text>
                  <i>{event.description}</i>
                 </Card.Text>
                 <Card.Text href="#"><b>VENUE:</b> {event.venue}</Card.Text>
                 <Card.Text href="#"><b>TYPE:</b> {event.type}</Card.Text>
               </Card.Body>
             </Card>)
          })}
       
      </Container>
    </div>
  );
}

export default Home;
