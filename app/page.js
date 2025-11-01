"use client";

import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center min-h-svh">
        <Header />
        <Hero />
      </div>
      <Body />
      <Footer />
    </>
  );
}
