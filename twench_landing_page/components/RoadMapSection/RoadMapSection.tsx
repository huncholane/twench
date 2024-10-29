import React from "react";
import "./RoadMapSection.css";

const RoadMapSection: React.FC = () => {
  return (
    <div className="RoadMapSection">
      <div className="Container">
        <div className="Title">ROAD MAP</div>
        <div className="Row">
          <div className="Soldier"></div>
          <ul>
            <li>Build Community Website & Social Media Accounts</li>
            <li>Build Twench Run GAME</li>
            <li>Launch On PumpFun</li>
          </ul>
        </div>
        <div className="Row">
          <ul>
            <li>Hard Work In Da Twench</li>
            <li>Migrate to Raydium</li>
            <li>Strategic Partnerships</li>
            <li>Twench Run Expansions</li>
          </ul>
          <div className="Tnt"></div>
        </div>
        <div className="Row">
          <div className="Jetpack"></div>
          <ul>
            <li>Growth & Community Rewards</li>
            <li>Expand Listings</li>
          </ul>
        </div>
        <div className="Row">
          <ul>
            <li>GET OUT DA TWENCH</li>
          </ul>
          <div className="Wallstreet"></div>
        </div>
      </div>
    </div>
  );
};

export default RoadMapSection;
