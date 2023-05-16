import React, { useState } from "react";
import appointment from "../../assets/images/appointment.png";
import emailjs from "@emailjs/browser";
// import PrimaryButton from "../Shared/PrimaryButton";

const ContactHome = () => {
  const [successMs, setSuccessMs] = useState("");
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "doctors_portal",
        "doctors_portal",
        e.target,
        "88Bf6JxBkMIfhS7GP"
      )
      .then((res) => {})
      .catch((err) => console.log(err));
    // sucessMessage = "I received your message, Thanks.";
    setSuccessMs("I received your message, Thanks.");
    e.target.reset();
  };
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className="bg-primary px-10 py-14 "
    >
      <div className="text-center pb-14 text-white">
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary">
          Contact Us
        </p>
        <h1 className="text-4xl">Stay connected with us</h1>
      </div>
      <form onSubmit={sendMail}>
        <div className="grid grid-cols-1 justify-items-center gap-5">
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email Address"
            className="input w-full max-w-md"
          />
          <input
            name="subject"
            id="subject"
            type="text"
            placeholder="Subject"
            className="input w-full max-w-md"
          />
          <textarea
            id="message"
            name="message"
            className="textarea w-full max-w-md"
            placeholder="Your message"
            rows={6}
          ></textarea>
          <input
            className="btn btn-primary uppercase bg-gradient-to-r from-secondary to-primary text-white font-bold"
            type="submit"
            value="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactHome;
