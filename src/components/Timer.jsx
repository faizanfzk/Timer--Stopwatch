import React, { useState, useEffect } from "react";
import "./Timer.css"

export const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour,setHour]=useState(0)
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSecond(second + 1);
      if (second === 59) {
        setMinutes(minutes + 1);
        setSecond(0);
      }
      if(minutes===59){
          setHour(hour+1)
          setMinutes(0)
      }
      if(hour===24){
        setHour(0)
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  const start = () => {
    setSecond(second + 1);
  };
  const reset = () => {
    setMinutes(0);
    setSecond(0);
  };
  const stop = () => {
    clearInterval(timer);
  };

  return (
    <div className="time">
      <h1>   {hour < 10 ? "0" + hour : hour}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {second < 10 ? "0" + second : second}
      </h1>
      <div className="btn">
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={stop}>Stop</button>
      </div>
    </div>
  );
};
