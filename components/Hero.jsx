import {useEffect,useRef} from "react";
import { Martel_Sans } from "@next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import {gsap,Power3} from "gsap";
import {Link as LinkS} from "react-scroll"
import Link from "next/link";
const martel_sans = Martel_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});

const Hero = () => {
    const content = useRef();
    const image = useRef();
    const tl = gsap.timeline();
    useEffect(() => {
      tl.to(content.current,{opacity:1,ease:Power3.easeOut,delay:0.6,duration:1})
        .to(image.current,{opacity:1,ease:Power3.easeOut,duration:1})
    }, [])
    
  return (
    <section name="/" className="w-full md:h-[80vh] snap-center  grid relative text-white grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-9">
      <div ref={content} className="w-full opacity-0 gap-y-8 p-8 py-16 h-full relative flex flex-col col-span-5">
        <h1 className="font-bold  tracking-wide uppercase text-4xl lg:text-6xl leading-normal">
          turn your <span className="text-yellow">idea</span> into <br /> <span>a reality</span>
        </h1>
        <p className={` text-2xl sm:text-3xl sm:text-left text-justify lg:mr-24 tracking-wider font-light`}>Build your ideas in the real world using the latest technologies.</p>
        <div className="w-full  gap-12 sm:flex-row flex-col flex items-center">
          <LinkS offset={-112} spy={true} smooth={true}  to="/about" className={` flex-grow cursor-pointer group sm:max-w-xs max-w-sm flex  intersect font-medium w-full px-20 sm:w-72 items-center justify-around relative transition-all group duration-300 ease-out hover:bg-blue    uppercase tracking-widest  h-16 border-2 border-gray-100 bg-orange `}>
            <span className="  transition-all duration-300 pointer-events-none ease-in-out text-white">learn more</span>
            <IoIosArrowDown className=" text-white intersect pointer-events-none relative bottom-[1px] transition-all duration-300 ease-out left-3 text-xl group-hover:opacity-100 opacity-0" />
          </LinkS>
          <button className="w-full lg:w-60   max-w-sm sm:w-48 sm:flex-shrink">
          <Link href={"/contact"} className={`lg:w-60 hover:bg-blue   max-w-sm sm:w-48 sm:flex-shrink intersect cursor-pointer uppercase border-white transition-all duration-300 ease-out group flex items-center justify-center tracking-widest  h-16 border-2   `}>
            Start now
          </Link>
          </button>
          
        </div>
        <div data-line="8" className="w-[1px] h-0 sideLine left-0 top-0   bg-yellow  absolute "></div>

      </div>
      <div className="w-full  h-full relative col-span-4">
      <div data-line="9" className="w-[1px] h-0 sideLine left-0 top-0   bg-yellow  absolute "></div>

        <div data-line="10" className="w-[1px] h-0 sideLine right-0 top-0   bg-yellow  absolute "></div>

        <div ref={image} className="w-full opacity-0 h-full  grid place-items-center">
          <Image lt="picture contains  a light bulb" priority width={763} height={631.95} className="h-full w-full object-cover object-center" src="/services.jpg" alt="" />
        </div>
      </div>
      <div id="topers" className="h-[1px] bg-yellow  w-0 absolute bottom-0"></div>
    </section>
  );
};

export default Hero;
