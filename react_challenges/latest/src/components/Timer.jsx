import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  //Empty array = function only runs at initial render
  //No array = function  runs at initial render and updates
  //Components in array, initial render and updates of those components
  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => {
          const newSeconds = seconds + 1;
          if (newSeconds === 60) {
            setMinutes((minutes) => minutes + 1);
            return 0;
          } else {
            return newSeconds;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div>
      <h2>Timer</h2>
      <p>
        {minutes} minutes {seconds} seconds
      </p>
      <div>
        <button
          className="startBtn"
          onClick={() => {
            setIsActive(true);
          }}
        >
          Start
        </button>
        <button
          className="stopBtn"
          onClick={() => {
            setIsActive(false);
          }}
        >
          Stop
        </button>
        <button
          className="resetBtn"
          onClick={() => {
            setIsActive(false);
            setSeconds(0);
            setMinutes(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
