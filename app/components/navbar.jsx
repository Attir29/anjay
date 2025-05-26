"use client";

import React from "react";
import Link from "next/link";
import { useState, usePath } from "react";
import { usePathname } from "next/navigation";

const menus = [
  { title: "home", path: "/home" },
  { title: "crew", path: "/crew" },
  { title: "destination", path: "/destination" },
  { title: "technology", path: "/technology" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();
  console.log(path);

  return (
    <nav className="fixed z-10 top-0 left-0 right-0 py-4 px-6 md:pr-0">
      <div className="flex justify-between items-center">
        <img src="/logo.svg" alt="" />
        <div className="h-[1px] bg-white w-[50%] absolute left-32 hidden md:flex"></div>

        <div
          className={`bg-white/10 backdrop-blur-3xl w-3/4 md:w-fit min-h-screen md:min-h-fit absolute top-0 right-0  ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <ul className="flex flex-col gap-12 md:flex-row condensed h-full pt-20 md:pt-0">
            {menus.map((menu, index) => {
              return (
                <li>
                  <Link
                    href={menu.title == "home" ? "/" : menu.path}
                    className="cursor-pointer"
                    key={index}
                  >
                    <div className="flex px-6 md:py-5 gap-2 text-2xl group relative group">
                      <div
                        className={`w-1 h-full md:h-1 md:w-full bg-white absolute left-0 md:bottom-0 ${
                          path == menu.path ? "flex" : "hidden"
                        } group-hover:flex`}
                      ></div>
                      <p className=" font-bold">{`0${index}`}</p>
                      <p className="uppercase condensed tracking-widest">
                        {menu.title}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={`md:hidden flex flex-col gap-1 cursor-pointer transition-all duration-300 ease-in-out`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`burger w-9 h-1 bg-[#D0D6F9] transition-all duration-300 ease-in-out ${
              isOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          ></div>
          <div
            className={`burger w-9 h-1 bg-[#D0D6F9] transition-all duration-300 ease-in-out ${
              isOpen ? "hidden" : ""
            }`}
          ></div>
          <div
            className={`burger w-9 h-1 bg-[#D0D6F9] transition-all duration-300 ease-in-out ${
              isOpen ? "-translate-y-[2px] -translate-x-[0px] -rotate-45" : ""
            }`}
          ></div>
        </div>
      </div>
    </nav>
  );
}
