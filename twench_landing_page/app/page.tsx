import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <div className="landing flex flex-col">
        <Header />
        <div className="relative">
          <h1 className="text-[128px] large-text-shadow w-full text-center">
            $TWENCH
          </h1>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
