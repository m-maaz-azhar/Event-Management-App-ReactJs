import { useEffect, useState } from 'react';
import {database} from'./config/firebase';
import { ref, onValue} from "firebase/database";
import Router from './config/Router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // const [Data, setData] = useState([])

  // const db_ref = ref(database, '/');

  // useEffect(() => {
  //   onValue(db_ref, (snapshot) => {
  //     const data = snapshot.val();
  //     setData(data);
  //   });
  // }, [])
  
  // console.log(Data)
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;