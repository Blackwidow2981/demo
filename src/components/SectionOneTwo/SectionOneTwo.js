import React from "react";
import "./style.scss";

const SectionOneTwo = () => {
  return (
    <>
      <section className="about">
        <h2 className="about__heading heading">
          Hello! <br /> We are{" "}
          <span
            className="bg-purple"
            style={{ fontFamily: "'Spartan', sans-serif" }}
          >
            BotCart
          </span>
        </h2>
        <p className="about__para">
          A chat-based platform that can help you start meaningful
          conversations. Talk to your website visitors in{" "}
          <span className="bg-purple">real-time</span>, right when they need
          you.
        </p>
      </section>
      <section className="live-chat">
        <h2 className="heading">Live Chat</h2>
        <p className="about__para live-para">
          Talk to your website visitors. Offer them real-time assistance.
        </p>
      </section>
    </>
  );
};

export default SectionOneTwo;
