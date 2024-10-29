import React from "react";
import "./SocialBar.css";

const SocialBar: React.FC = () => {
  return (
    <div className="SocialBar">
      <a
        href="https://x.com/Twench_sol"
        target="_blank"
        className="Twitter"
      ></a>
      <a
        href="https://t.me/+CsIy0xZ2nsk3Yzhi"
        target="_blank"
        className="Telegram"
      ></a>
      <a className="Youtube"></a>
      <a className="Instagram"></a>
      <a className="TikTok"></a>
      <a className="Instagram"></a>
      <a className="SoundCloud"></a>
    </div>
  );
};

export default SocialBar;
