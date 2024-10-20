import Image from "next/image";
import React from "react";

const LandingSection = () => {
  return (
    <div className="landing">
      <div className="flex h-32 w-20">
        <Image src="/images/logo.png" alt="Twench" width={68} height={68} />
        <div className="flex gap-4">
          <div>dex</div>
          <div>tools</div>
        </div>
        <a className="buy-button">BUY $TWENCH</a>
      </div>
    </div>
  );
};

export default LandingSection;
