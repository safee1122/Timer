import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../assets/css/timer.css";
import { setStartTimer } from "../features/counter/reducer";
import CountDown from "./countdown";
import Button from "./button";

function Timer() {
  const days = useSelector((state) => state.timer.timerDays);
  const hours = useSelector((state) => state.timer.timerHours);
  const minutes = useSelector((state) => state.timer.timerMinutes);
  const seconds = useSelector((state) => state.timer.timerSeconds);

  const dispatch = useDispatch();
  // const [timerDays, setTimerDays] = useState();
  //  const [timerHours, setTimerHours] = useState();
  //  const [timerMinutes, setTimerMinutes] = useState();
  //  const [timerSeconds, setTimerSeconds] = useState();

  // let interval;
  // const startTimer = () => {
  //   const countDownDate = new Date("April 10,2022").getTime();

  //   interval = setInterval(() => {
  //     const now = new Date().getTime();

  //     const distance = countDownDate - now;

  //     const days = Math.floor(distance / (24 * 60 * 60 * 1000));
  //     const hours = Math.floor(
  //       (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (60 * 1000)) / 1000);

  //     if (distance < 0) {
  //       // Stop Timer

  //       clearInterval(interval.current);
  //     } else {
  //       //       // Update Timer
  //       //       // setTimerDays(days);
  //       //       // setTimerHours(hours);
  //       //       // setTimerMinutes(minutes);
  //       //       // setTimerSeconds(seconds);
  //       const action = {
  //         payload: {
  //           timerDays: days,
  //           timerHours: hours,
  //           timerDays: minutes,
  //           timerDays: seconds,
  //         },
  //       };
  //     }
  //   });
  // };
  useEffect(() => {
    dispatch(setStartTimer());
  });
  return (
    <div className="counter">
      <h1>Hurry, your invitation expires soon!</h1>
      <p>
        Blocksight registration will close onBlocksight registration will close
        on<br></br>
        <span className="highlight">
          Wednesday, April 6th @ 11:59 Central Time.
        </span>
      </p>
      <CountDown
        timerDays={days}
        timerHours={hours}
        timerMinutes={minutes}
        timerSeconds={seconds}
      />
      <p>
        No one will be admitted after registration closes. When it opens
        <br />
        again, we’ll raise the price.
      </p>
      <div className="center">
        <Button name="Hold your spot now" />
      </div>
    </div>
  );
}

export default Timer;
