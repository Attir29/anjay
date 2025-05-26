"use client";
import React, { useState } from "react";
import crew from "../components/Crew";

export default function page() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="h-screen w-full relative z-0 flex flex-col justify-center items-center gap-24 bg-[url(/destination.png)] bg-cover md:flex-row md:justify-between md:px-24 pt-40 overflow-hidden">
      <div className="text-center flex flex-col justify-center items-center gap-8 p-8 md:max-w-[539px] md:h-screen md:justify-between md:py-52">
        <div className="flex condensed gap-6 text-lg font-medium w-full justify-center items-center md:justify-start md:items-start sm:text-[24px] md:text-[32px]">
          <p className="text-[#53555F]">02</p>
          <p className="text-white">MEET YOUR CREW</p>
        </div>
        <div className="flex flex-">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <h3 className="text-2xl w-full md:text-left">
                {crew[activeIndex].role}
              </h3>
              <p className="text-4xl font-bold w-full md:text-left">
                {crew[activeIndex].name}
              </p>
            </div>

            <p className="text-[#D0D6F9] w-full max-w-[539px] md:text-left">
              {crew[activeIndex].description}
            </p>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center md:justify-start md:items-start">
            {crew.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full ${
                  index === activeIndex ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <img
        src={crew[activeIndex].image}
        alt={crew[activeIndex].name}
        className=" md:max-w-[576px] md:max-h-[734px] max-w-[271px] flex bottom-0 "
      />
    </section>
  );
}
