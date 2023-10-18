import bgImagePhone from "../../assets/game-bg-phone.webp";
import cyperImgPhone from "../../assets/Cyber-img-phone.webp";

function Home() {
  return (
    <div className="relative h-screen w-screen">
      <img
        src={bgImagePhone}
        alt="bg image of a game scene"
        className="w-full object-cover h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      />
      <div className="overlay"></div>
      <div className="absolute top-12 left-6 bg-gamePur px-6 py-7 rounded-3xl">
        <p className="text-white text-xl pb-3">Now available on all devices</p>
        <p className="text-white text-5xl font-bold w-[16rem]">
          CYBER KID INFINITE
        </p>
        <p className="text-white text-xl pb-4">Time to level up</p>
        <button className="px-5 py-2 font-semibold text-gamePur bg-white text-lg rounded-3xl">
          Buy now
        </button>
      </div>
      <div className="">
        <img
          src={cyperImgPhone}
          alt="cyber game img"
          className="absolute rounded-3xl object-cover top-[375px] left-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        />
      </div>
      <div>hey</div>
    </div>
  );
}

export default Home;
