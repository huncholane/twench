import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="landing relative">
        <Header />
        <h1 className="text-[180px] large-text-shadow w-full text-center bottom-[480px] absolute">
          $TWENCH
        </h1>
        <div className="absolute bottom-[-20px] flex justify-center w-full min-w-[1354px]">
          <Image
            src="/images/tank.png"
            width={1354}
            height={656}
            alt="Tank"
            className="max-w-100%"
          />
        </div>
        <div className="absolute bottom-[-20px] z-10 flex justify-center w-full">
          <Image
            src="/images/soldier-large.png"
            width={472}
            height={472}
            alt="Soldier"
          />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
