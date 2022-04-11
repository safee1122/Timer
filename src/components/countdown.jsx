import React from "react";
import "../assets/css/countdown.css";
import v7 from "../assets/images/Vector7.png";
import v8 from "../assets/images/Vector8.png";
function CountDown({ timerDays, timerHours, timerMinutes, timerSeconds }) {
  return (
    <div className="count-container">
      <section className="countdown">
        <div className="clock">
          <section>
            <p>{timerDays}</p>
            <small>Days</small>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <small>Hours</small>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <small>Minutes</small>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <small>Seconds</small>
          </section>
        </div>
      </section>
    </div>
  );
}
// CountDown.defaultProps = {
//   timerDays: 10,
//   timerHours: 10,
//   timerMinutes: 10,
//   timerSeconds: 10,
// };

export default CountDown;
