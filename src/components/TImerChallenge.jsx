import { useRef, useState } from "react";

export default function TImerChallenge({title, targetTime}) {
  const timer = useRef()
  const [timerStarted , setTimerStarted] = useState(false);

  const [timerExpired , setTimerExpired] = useState(false);

  function handleStart(){
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop(){
    clearTimeout(timer);
  }
  return (
    <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>Sorry You Lost</p>}
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ""}
        </p>
        <p>
            <button onClick={timerStarted ? handleStop : handleStart}>
              {timerStarted ? "Stop" : "Start"} Challenge
              </button>
            <p className={timerStarted ? "active" :"undefined"}>
              {timerStarted ? "Time is running..." : "Timer inactive"}
              </p>
        </p>
    </section>
  )
}
