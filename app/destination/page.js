"use client";
import React from "react";
import destinations from "../components/Destination";
import { useState } from "react";

export default function page() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="h-screen w-full relative z-0 flex flex-col justify-center items-center gap-24 bg-[url(/destination.png)] bg-cover pt-30">
      <div className="flex condensed gap-6 text-lg font-medium w-full justify-center items-center md:justify-start md:items-start md:pl-30 sm:text-[24px] md:text-[32px]">
        <p className="text-[#53555F]">01</p>
        <p>PICK YOUR DESTINATION</p>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row p-8">
        <img
          src={destinations[activeIndex].image}
          alt={destinations[activeIndex].planet}
          className="w-full max-w-[150px] h-fit md:max-w-[576px] flex justify-center items-center md:justify-start md:items-start mb-10"
        />

        <div className="flex flex-col justify-center items-center px-12 w-full md:max-w-[540px] md:justify-start md:items-start">
          <ul className="flex gap-8 text-lg my-2">
            {destinations.map((destination, index) => (
              <li
                key={index}
                className={`text-[#D0D6F9] hover:text-white transition-colors text-[20px] ${
                  activeIndex == index
                    ? "border-b-[0.5px] border-[#D0D6F9]"
                    : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <button>{destination.planet}</button>
              </li>
            ))}
          </ul>
          <h1 className="belle text-[62px]">
            {destinations[activeIndex].planet}
          </h1>
          <p className="text-[#D0D6F9] text-center text-[20px] pb-4 border-b-[0.5px] border-opacity-20 border-white md:text-left">
            {destinations[activeIndex].description}
          </p>

          <div className="flex flex-col gap-5 md:flex-row justify-between items-center w-full mt-8">
            <div className="pt-4">
              <p className="condensed text-[24px] w-full text-center text-[#D0D6F9] flex justify-center items-center md:justify-start md:items-start">
                AVG. DISTANCE
              </p>
              <p className="belle text-[36px] w-full text-center flex justify-center items-center md:justify-start md:items-start">
                {destinations[activeIndex].distance}
              </p>
            </div>
            <div className="pt-4">
              <p className="condensed text-[24px] w-full text-center text-[#D0D6F9] flex justify-center items-center md:justify-start md:items-start">
                EST. TRAVEL TIME
              </p>
              <p className="belle text-[36px] w-full text-center flex justify-center items-center md:justify-start md:items-start">
                {destinations[activeIndex].travel_time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
