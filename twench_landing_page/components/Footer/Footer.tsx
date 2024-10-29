import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="Footer">
      <div className="my-auto w-[20%] text-center text-[10px] text-primary hover:brightness-150">
        <a href="">Privacy Policy</a>
      </div>
      <div className="w-[60%] text-center text-[10px] text-shadow-none">
        <p>Battling Everday To Gett Out Of The Twench.</p>
        <p>$TWENCH {currentYear} - All Rights Reserved</p>
      </div>
      <div className="my-auto w-[20%]"></div>
    </div>
  );
};

export default Footer;
