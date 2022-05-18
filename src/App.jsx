import React, { useState } from "react";
import "./App.css";
import { Stop } from "./components/StopWatch";
import "./components/Timer.css"

// import { ContactList } from "./components/ContactList";
import { Timer } from "./components/Timer";


function App() {
  const [istrue, setIsTrue] = useState(false);
  return (
    <div className="App">
      {/* <ContactList/> */}
      {/* <Timer/>
     <h2>StopWatch</h2>
      <Stop/> */}
      {istrue ? <h1>STOPWATCH</h1> : <h1>TIMER</h1>}
      {istrue ? <Stop /> : <Timer />}
      <div className="btn1">
      <button onClick={() => setIsTrue(!istrue)}>TOGGLE</button>
      </div>
    </div>
  );
}

export default App;
