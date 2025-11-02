"use client";
import { useEffect } from "react";
import BackgroundLines from "./BackgroundLines";
import Link from "next/link";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

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

      <div className="absolute w-[70%] sm:w-auto z-10 top-1/3 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h5 className="text-3xl lg:px-28 md:px-22 xl:px-38 w-full sm:w-auto md:text-3xl text-primary font-semibold leading-snug">
          Get Any Kind of Dataset,
           or directly use via CDN
        </h5>
        <p className="mt-4 text-gray-500">
          Also You can upload your own dataset{" "}
          <br className="hidden sm:block" /> and sahre to anyone
        </p>
      </div>
      <Link href="/app/datasets" className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 sm:hidden">
        <Button
          size="lg"
          className="group w-46 h-14 cursor-pointer font-semibold text-lg flex items-center gap-2 transition-all"
        >
          Get DataSet
          <MoveRight
            style={{ width: 28, height: 24 }}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </Button>
      </Link>
    </div>
  );
}
