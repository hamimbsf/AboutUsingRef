import "./watch.css";
import { useRef, useState } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  const intervalRef = useRef(null);

  const handleStart = () => {
    // Prevent starting if already running
    if (intervalRef.current !== null) return;

    //start counting
    setStartTime(Date.now());
    setNow(Date.now());

    intervalRef.current = setInterval(() => {
      // Update the current time every 10ms.

      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // Reset interval
  };

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <>
      <div className="stopwatch-wrapper">
        <div className="stopwatch-card">
          <h2 className="stopwatch-title">Stopwatch</h2>
          <div className="stopwatch-display">
            {secondsPassed.toFixed(3)} <span className="unit">seconds</span>
          </div>
          <div className="stopwatch-controls">
            <button className="btn btn-start" onClick={handleStart}>
              Start
            </button>
            <button className="btn btn-stop" onClick={handleStop}>
              Stop
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
