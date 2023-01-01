import { gsap, Power3 } from "gsap";
import { useEffect, useRef } from "react";
import { Link as LinkS } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import {AiFillHome} from "react-icons/ai"
import {BsFillMoonFill} from "react-icons/bs"
const Header = () => {
  const topLine = useRef();
  const sideLine2 = useRef([]);

  const tl = gsap.timeline();
  useEffect(() => {
    tl.to("#topers", { width: "100%", duration: 5, ease: Power3.easeOut });
    gsap.utils.toArray(".sideLine").forEach((line) => {
      let number = line.getAttribute("data-line");
      gsap.to(`.sideLine[data-line="${number}"]`, { delay: number / 2, duration: 1, height: "100%", ease: Power3.easeOut });
    });
    gsap.utils.toArray(".innerInfo").forEach((info) => {
      let number = info.getAttribute("data-info");
      gsap.to(`.innerInfo[data-info="${number}"]`, { delay: number / 2, duration: 1, opacity:1, ease: Power3.easeOut });
    });
  }, []);

  return (
    <header className="w-full grid relative h-28 grid-cols-9  text-white  ">
      <div id="topers" className="h-[2px] bg-yellow rat w-0 absolute top-0"></div>
      <div id="topers" className="h-[2px] bg-yellow rat w-0 absolute bottom-0"></div>

      <div className="w-full h-full relative  col-span-4">
        <div data-line="1" className="w-[2px] sideLine bg-yellow h-0 absolute left-0"></div>
        <div data-line="2" className="w-[2px] sideLine bg-yellow h-0 absolute right-0"></div>
        <div data-info="1" className="w-full innerInfo opacity-0 h-full py-4 px-12 flex items-center justify-between">
            <Image width={400} height={400} className="w-20 object-contain" src={"/pic.png"} />
            <p className="text-xl font-bold uppercase">brahimi mehdi</p>
            <Link href={"/"}>
                <AiFillHome className="text-3xl text-white" />
            </Link>
        </div>
      </div>
      <div className="w-full h-full relative ">
        <div data-line="3" className="w-[2px] bg-yellow sideLine h-0 absolute right-0"></div>
        <LinkS data-info="2" to="/" className="h-full opacity-0 w-full text-lg font-semibold innerInfo cursor-pointer uppercase grid place-items-center">home</LinkS>
      </div>
      <div className="w-full h-full relative ">
        <div data-line="4" className="w-[2px] bg-yellow sideLine h-0 absolute right-0"></div>
        <LinkS data-info="3" to="/" className="h-full opacity-0 w-full text-lg font-semibold cursor-pointer innerInfo uppercase grid place-items-center">work</LinkS>
      </div>
      <div className="w-full h-full relative ">
        <div data-line="5" className="w-[2px] bg-yellow sideLine h-0 absolute right-0"></div>
        <LinkS data-info="5" to="/" className="h-full opacity-0 w-full text-lg font-semibold cursor-pointer innerInfo uppercase grid place-items-center">about</LinkS>
      </div>
      <div className="w-full h-full relative ">
        <div data-line="6" className="w-[2px] bg-yellow sideLine h-0 absolute right-0"></div>
        <LinkS data-info="6" to="/" className="h-full opacity-0 w-full text-lg font-semibold cursor-pointer innerInfo uppercase grid place-items-center">
            contact
        </LinkS>
      </div>
      <div className="w-full h-full relative ">
        <div data-line="7" className="w-[2px] bg-yellow sideLine h-0 absolute right-0"></div>
        <div data-info="7" className="h-full innerInfo opacity-0 w-full grid place-items-center">
            <BsFillMoonFill className="text-2xl text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
