import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-[url(/home.png)] h-screen w-full bg-cover relative z-0 flex flex-col justify-center items-center">
      <div className="p-12 justify-between gap-13 items-center flex flex-col h-full w-full max-h-[676px] sm:max-h-[700px] md:flex-row md:max-h-[416px] md:max-w-[1110px] md:justify-between md:items-center">
        <div className="max-w-[1100px] w-full flex flex-col justify-center items-center md:justify-start md:items-start">
          <p className="barco text-[16px] text-[#D0D6F9] ">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <div className="flex justify-center items-start w-ful">
            <h1 className="belle text-[80px]  text-left">SPACE</h1>
          </div>

          <p className="text-[#D0D6F9] text-[15px] w-full max-w-[540px] text-center md:text-left ">
            Let's face it if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <Link href="/destination">
            <button className="bg-white aspect-square size-[275px] rounded-full relative group flex justify-center items-center">
              <p className="belle text-[32px] text-black w-fit z-10 relative">
                Explore
              </p>
              <div className="absolute bg-white top-0 z-0 w-full h-full rounded-full  group-hover:scale-130 group-hover:opacity-20 transition-all "></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
