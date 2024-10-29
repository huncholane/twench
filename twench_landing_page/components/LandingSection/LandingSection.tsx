import Image from "next/image";
import React from "react";
import "./LandingSection.css";

const LandingSection = () => {
  return (
    <div className="LandingSection">
      <div className="Title">$TWENCH</div>
      <div className="Tank"></div>
      <div className="Soldier"></div>
      <a
        href="https://twench.itch.io/twench-run"
        target="_blank"
        className="OpenGameButton"
      >
        OPEN GAME
      </a>
    </div>
  );
};

export default LandingSection;
