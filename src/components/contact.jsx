import React from "react";
import vector5 from "../assets/images/Vector5.png";
import vector6 from "../assets/images/Vector6.png";
import "../assets/css/contact.css";
import Button from "./button";
function Contact() {
  return (
    <div className="contact-container">
      <div className="v5">
        <img src={vector5} />
      </div>
      <div className="faq-box">
        <h1>What Are you Waiting For?</h1>

        <p>
          Join with the special launch discount before registration closes on
          <br />
          Wednesday Wednesday, April 6th @ 11:59 Central Time.
        </p>
        <Button name="Sign Up Now" />
      </div>
      <div className="v6">
        <img src={vector6} />
      </div>
    </div>
  );
}

export default Contact;
