import { useEffect, useState } from "react";

import { Button } from "./components/Button/Button";
import "./App.scss";

function App() {
  const [isCounting, setIsCounting] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const handleStartTimer = () => {
    setIsCounting(true);
  };

  const handleStopTimer = () => {
    setIsCounting(false);
  };

  const handleResetTimer = () => {
    setSeconds(0);
    setIsCounting(false);
  };

  useEffect(() => {
    let time = 1;
    if (isCounting == true) {
      time = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
        console.log("Hello");
      }, 1000);
    }
    return () => {
      if (time) {
        clearInterval(time);
      }
    };
  }, [isCounting]);

  console.log(isCounting);

  return (
    <>
    <div className="stop-watch">
      <h1>React Stopwatch</h1>
      <span className="timer-container">
        <p>{seconds}s</p>
      </span>
      <section className="btn-container">
        <Button action={() => handleStartTimer()} text="Start" theme="start" />
        <Button action={() => handleStopTimer()} text="Stop" theme="stop" />
        <Button action={() => handleResetTimer()} text="Reset" theme="reset" />
      </section>
    </div>
    </>
  );
}

export default App;
