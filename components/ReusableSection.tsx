import { useEffect, useRef,useState } from "react";
import { useRouter } from "next/router";
import { gsap, Power3, Elastic } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const Contact = () => {
  const router = useRouter()
  gsap.registerPlugin(ScrollTrigger);
  const trigger = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(trigger.current, {
        yPercent: "30",
        ease: Power3.easeInOut,
        rotate: 0,
        stagger: 0.05,
        opacity: 0,
        scrollTrigger: trigger.current,
      });
    });
    return () => {
      ctx.revert();
    };
  }, []); 

  return (
    <section
          ref={trigger}
      className="2xl:h-[calc(100vh-7rem)]  relative w-full grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-9 items-center "
    >
      <div
        data-scrollh="30"
        className={`h-[1px] bg-yellow transition-all duration-300 ease-out   z-40 scrollLineH w-0 absolute top-0`}
      ></div>
      <div className="col-span-4 order-2 md:order-1 h-full w-full relative">
        <Image
            alt=""
          src={"/contact.jpg"}
          fill
          className="object-cover h-full w-full object-center"
        />

        <div
          data-scrollv="43"
          className={`w-[1px] h-0 z-40 scrollLine  transition-all duration-300 ease-out   left-0 top-0   bg-yellow  absolute `}
        ></div>
      </div>

      <div className="flex h-full order-1 md:order-2 px-8 md:px-16 w-full relative md:items-start items-center  flex-col col-span-5 gap-y-16 uppercase pt-8 font-bold text-white">
        <div
          data-scrollv="44"
          className={`w-[1px] h-0 z-40 scrollLine  transition-all duration-300 ease-out   left-0 top-0   bg-yellow  absolute `}
        ></div>
        <p  className="firstText text-4xl md:text-left text-center lg:text-5xl xl:text-7xl">
          
        </p>
   
      </div>
    </section>
  );
};

export default Contact;