import "./Header.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className="Header">
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
          className="flex h-10 w-10 justify-center bg-white border-black border-2 hover:bg-primary"
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
          className="flex h-10 w-10 justify-center bg-white border-black border-2 hover:bg-primary"
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
      <a className="HeaderBuyButton" href="">
        BUY $TWENCH
      </a>
      <div className="hidden sm:block"></div>
    </div>
  );
};

export default Header;
