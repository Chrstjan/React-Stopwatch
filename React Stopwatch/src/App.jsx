import {useEffect, useState} from "react";

import { Button } from "./components/Button/Button";
import "./App.scss";

function App() {
  const [isCounting, setIsCounting] = useState(false);
  const [seconds, setSeconds] = useState(0);


  const handleStartTimer = () => {
    setIsCounting(true)
  }

  const handleStopTimer = () => {
    setIsCounting(false);
  }

  useEffect(() => {
    let time = 0;
    if (isCounting == true) {
       time = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1)
        console.log("Hello");
        
      }, 1000)
    }
    else {
      clearInterval(time);
    }
    return () => {
      if (time) {
        clearInterval(time)
      }
    }
  }, [isCounting])

  console.log(isCounting);
  
  return (
    <>
      <h1>React Stopwatch</h1>
      <p>{seconds}</p>
      <section className="btn-container">
        <Button action={() => handleStartTimer()} text='Start' type='start'/>
        <Button action={() => handleStopTimer()} text='Stop' type={'stop'}/>
      </section>
    </>
  );
}

export default App;
