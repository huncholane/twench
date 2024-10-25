import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="h-32 flex justify-between">
      <div className="hidden sm:block"></div>
      <div className="sm:w-[220px] my-auto pl-3 sm:pl-0">
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
        className="p-1 sm:p-3 border-black bg-background my-auto rounded-full border-4 text-[12px] leading-[30.52px] cursor-pointer hover:brightness-150 sm:text-[28px] mr-3 sm:mr-0"
        href=""
      >
        BUY $TWENCH
      </a>
      <div className="hidden sm:block"></div>
    </div>
  );
};

export default Header;
