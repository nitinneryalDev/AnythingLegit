"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/flip-words";

function Hero() {
  const words = ["Trusted", "Reliable", "anytime", "modern"];

  return (
    <>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="hero  min-h-screen">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className="hero-content text-center">
            <div className="w-fit">
              <h1 className="md:text-5xl  text-3xl sm:text-4xl  font-bold">
                {" "}
                Welcome, ! Click below to Book <FlipWords words={words} />{" "}
                <br /> Services around
              </h1>
              <p className="py-6 text-sm sm:text-base">
                Book Bike-taxi, Laundry, Food, Rentals, Delivery & almost
                Anything Legit!
              </p>
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Get Started
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
