"use client";
import React from "react";
import { useState } from "react";
import technology from "../components/technology";

export default function page() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="bg-[url(/technology.png)] bg-cover h-screen w-full relative z-0 flex flex-col justify-center items-center gap-24 md:pl-20 md:py-20 pt-40">
      <div className="flex condensed gap-6 text-lg font-medium w-full justify-center items-center md:justify-start md:items-start md:pl-7 sm:text-[24px] md:text-[32px]">
        <p className="text-[#53555F]">03</p>
        <p>SPACE LAUNCH 101</p>
      </div>

      <div className=" flex flex-col md:flex-row-reverse">
        <img
          src={technology[activeIndex].image}
          alt={technology[activeIndex].name}
          className="max-h-[258px] w-full object-cover object-center sm:max-h-[360px] md:max-h-[700px]"
        />
        <div className="flex flex-col w-full justify-center items-center p-6 gap-10 md:flex-row">
          <div className="flex gap-4 md:flex-col">
            {technology.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-10 h-10 rounded-full border-[1px] boreder-white sm:w-[56px] sm:h-[56px] md:w-20 md:h-20 ${
                  index === activeIndex
                    ? "bg-white text-black"
                    : "border-[#504F59]"
                }`}
              >
                {technology[index].index}
              </button>
            ))}
          </div>

          <div className="flex flex-col w-full justify-center items-center text-center gap-4 md:justify-start md:items-start md:text-left">
            <div className="flex flex-col gap-3">
              <h1 className="belle text-[#504F59] text-[18px] sm:text-[24px] md:text-[32px]">
                {technology[activeIndex].tag}
              </h1>
              <h1 className="belle text-[24px] sm:text-[40px] md:text-[56px]">
                {technology[activeIndex].name}
              </h1>
            </div>

            <p className="text-[#D0D6F9] text-[16px] md:text-[18px]">
              {technology[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
