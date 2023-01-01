import React from "react";
import { Martel_Sans } from "@next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import { gsap, Power3 } from "gsap";
import { useEffect, useRef } from "react";
const martel_sans = Martel_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});

const Hero = () => {
  return (
    <section className="w-full grid relative text-white grid-cols-9">
      <div className="w-full gap-y-8 p-8 py-16 h-full relative flex flex-col col-span-5">
        <h1 className="font-bold tracking-wide uppercase text-5xl leading-normal">
          turn your <span className="text-yellow">idea</span> into <br /> <span>a reality</span>
        </h1>
        <p className={`${martel_sans.className} text-2xl mr-24 tracking-wider font-light`}>Build your ideas in the real world using the latest technologies.</p>
        <div className="w-full  gap-x-12 flex items-center">
          <button className={`w-[50%] transition-all duration-300 ease-out hover:bg-white hover:text-dark-blue hover:scale-95 uppercase tracking-widest  h-16 border-2 border-gray-100 bg-orange ${martel_sans.className}`}>start now</button>
          <button className={`w-60 uppercase hover:scale-95 transition-all duration-300 ease-out group flex items-center justify-center tracking-widest  h-16 border-2 border-orange  ${martel_sans.className}`}>
            Learn more
            <IoIosArrowDown className=" text-white relative bottom-[1px] transition-all duration-300 ease-out left-3 text-xl group-hover:opacity-100 opacity-0" />
          </button>
        </div>
        <div data-line="8" className="w-[2.5px] h-0 sideLine left-0 top-0   bg-yellow  absolute "></div>

        <div data-line="9" className="w-[2.5px] h-0 sideLine right-0 top-0   bg-yellow  absolute "></div>
      </div>
      <div className="w-full  h-full relative col-span-4">
        <div data-line="10" className="w-[2.5px] h-0 sideLine right-0 top-0   bg-yellow  absolute "></div>

        <div className="w-full h-full p-12 grid place-items-center">
          <img src="/cuate.svg" alt="" />
        </div>
      </div>
      <div id="topers" className="h-[2px] bg-yellow rat w-0 absolute bottom-0"></div>
    </section>
  );
};

export default Hero;
