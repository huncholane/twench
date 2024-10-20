import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="h-32 flex justify-between">
      <div></div>
      <div className="w-[220px] my-auto">
        <Image
          src="/images/logo.png"
          alt="Twench"
          width={64}
          height={64}
          className="m-auto rounded-full border-black border-4"
        />
      </div>
      <div className="flex gap-4 my-auto">
        <a
          href=""
          className="flex h-10 w-10 justify-center bg-white border-black border-2 hover:bg-background"
        >
          <Image
            src="/images/dexscreener.png"
            width={25}
            height={30}
            alt="Dexscreener"
            className="my-auto"
          />
        </a>
        <a
          href=""
          className="flex h-10 w-10 justify-center bg-white border-black border-2 hover:bg-background"
        >
          <Image
            src="/images/dextools.png"
            width={25}
            height={30}
            alt="Dexscreener"
            className="my-auto"
          />
        </a>
      </div>
      <a
        className="p-3 border-black bg-background my-auto rounded-full border-4 text-[28px] leading-[30.52px] cursor-pointer hover:brightness-150"
        href=""
      >
        BUY $TWENCH
      </a>
      <div></div>
    </div>
  );
};

export default Header;
