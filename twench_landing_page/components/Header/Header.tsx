import "./Header.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className="Header">
      <div className="hidden sm:block"></div>
      <a
        href="/"
        className="sm:w-[220px] my-auto pl-3 sm:pl-0 hover:brightness-150 cursor-pointer"
      >
        <Image
          src="/images/logo.png"
          alt="Twench"
          width={64}
          height={64}
          className="m-auto rounded-full border-black border-4"
        />
      </a>
      <div className="flex gap-4 my-auto">
        <a
          href="https://dexscreener.com/solana/9zurn6wcys244khejrnawdezdvdtgpdcmr5skzsr1zf7"
          target="_blank"
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
          href="https://www.dextools.io/app/en/solana/pair-explorer/GuFmsJrhxo9iVX7WpKGQ4kYg6yofMJLpWPypHM44pump?t=1730204765924"
          target="_blank"
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
      <a
        className="HeaderBuyButton"
        href="https://raydium.io/swap/?inputMint=sol&outputMint=GuFmsJrhxo9iVX7WpKGQ4kYg6yofMJLpWPypHM44pump"
        target="_blank"
      >
        BUY $TWENCH
      </a>
      <div className="hidden sm:block"></div>
    </div>
  );
};

export default Header;
