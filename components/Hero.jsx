"use client";
import { useEffect } from "react";
import BackgroundLines from "./BackgroundLines";

export default function Hero() {
  useEffect(() => {
    import("@dotlottie/player-component");
  }, []);

  return (
    <div className="relative w-full mx-auto flex-grow overflow-hidden">
      <BackgroundLines />
      <dotlottie-player
        src="https://lottie.host/60981fab-182e-4a91-b56d-492bb3da4735/CMKdPkmzMw.lottie"
        background="transparent"
        speed="1"
        loop
        autoplay  
        class="absolute sm:block hidden inset-0 w-full h-full pointer-events-none"
      ></dotlottie-player>

      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h5 className="text-2xl md:text-3xl text-primary font-semibold leading-snug">
          Get Any Kind of Dataset,
          <br className="hidden sm:block"/> or directly use via CDN
        </h5>
        <p className="mt-4 text-gray-500">Also You can upload your own dataset <br className="hidden sm:block"/>  and sahre to anyone</p>
      </div>
    </div>
  );
}
