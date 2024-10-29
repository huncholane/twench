"use client";
import React from "react";
import "./BuySection.css";
import { toast } from "react-toastify";

const BuySection: React.FC = () => {
  const ca = "GuFmsJrhxo9iVX7WpKGQ4kYg6yofMJLpWPypHM44pump";
  return (
    <div className="BuySection">
      <div className="Content">
        <div className="Title">HOW TO BUY $TWENCH</div>
        <div className="Bulletin">
          <div className="Text">
            <div className="Section">
              <p>01. CREATE WALLET</p>
              <p>
                Download Phantom or your wallet choice from the app store or
                Google Play for free. Desktop users download the Google Chrome
                extension by going to Phantom.
              </p>
            </div>
            <div className="Section">
              <p>02. GET SOME SOL</p>
              <p>
                Have SOL in your wallet to switch to $TWENCH. If you don't have
                any SOL, you can buy directly on Phantom, transfer from another
                wallet, or buy on another exchange and send it to your wallet.
              </p>
            </div>
            <div className="Section">
              <p>03. GO TO JUPITER</p>
              <p>
                Connect to Jupiter. Connect your wallet in chrome. Paste the
                $TWENCH token address, select $TWENCH, and confirm. When Phantom
                prompts you for a wallet signature, sign.
              </p>
            </div>
            <div className="Section">
              <p>04. SWAP FOR TWENCH</p>
              <p>
                Switch SOL for $TWENCH. We have Zero taxes so you don't need to
                worry about buying with a specific slippage.
              </p>
            </div>
          </div>
        </div>
        <div className="BackpackSoldier"></div>
        <div
          className="CopyBtn"
          onClick={() => {
            navigator.clipboard
              .writeText(ca)
              .then(() => {
                toast.success(`${ca} copied to clipboard!`);
              })
              .catch((err) => {
                toast.error("Failed to copy text to clipboard.");
              });
          }}
        >
          Click To Copy CA
        </div>
      </div>
    </div>
  );
};

export default BuySection;
