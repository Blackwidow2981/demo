import React from "react";
import "./style.scss";
import Logo from "../../images/logo.svg";
import AnimationBtn from "../../images/animation_btn.gif";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={Logo} alt="Botcart-logo" style={{ marginLeft: "4rem" }} />
      </div>
      <div className="header__heading-box">
        <h2 className="heading">
          Start <span className="bg-purple">Conversations. Foster</span>{" "}
          Relationships.
        </h2>
        <button className="signupBtn btn">SIGN ME UP</button>
        <img src={AnimationBtn} alt="animation" style={{ width: "13%" }} />
      </div>
    </header>
  );
};

export default Header;
