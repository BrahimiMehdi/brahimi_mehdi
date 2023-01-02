import { Hind_Guntur } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useState ,useEffect} from "react";
import {gsap} from "gsap"
import { Flip } from "gsap/dist/Flip";
const hind_Guntur = Hind_Guntur({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const Work = () => {
    gsap.registerPlugin(Flip)
    const [selected, setSelected] = useState({sec:"",on:false})
    const [flipState, setflipState] = useState(null)
    useEffect(() => {
        if(flipState !==null){
            Flip.from(flipState, {
                absolute: true, // uses position: absolute during the flip to work around flexbox challenges
                duration: 1, 
                stagger: 0.1,
                targets:".workChild, .workParent",
                ease: "power1.inOut"
              });
        }
    }, [flipState])
    const changeState = (name) =>{
        setflipState(Flip.getState(".workChild, .workParent"))
        if( name ==="") {
            setSelected({on:false,sec:""})
        }
        else{
            setSelected({on:true,sec:name})
        }
    
    }
  return (
    <section   name="/work" className="min-h-screen workParent grid-rows-4 w-full relative grid grid-cols-9">
      {/* work sec */}
      <div onClick={()=>changeState("")} data-scrolli="3" className={`w-full workChild cursor-pointer scrollInfo  h-full  relative ${selected.on ? "col-span-3" : "col-span-5 cursor-default"}  row-span-1`}>
        <div data-scrollv="4" className={`w-[2.5px] h-0 z-40 scrollLine ${selected.on ? "opacity-0" :"opacity-100"} transition-all duration-300 ease-out   left-0 top-0   bg-yellow  absolute `}></div>
        <div className="flex h-full w-full items-center justify-between p-8 relative">
          <p className="font-bold  text-white tracking-wide uppercase text-5xl ">my work</p>
          <Link href={"/personal-projects"}>
            <div className="w-48 transition-all duration-300 ease-out hover:scale-95 text-gray-50  hover:text-yellow flex items-center justify-between">
              <p className={`${hind_Guntur.className} relative top-1 text-sm leading-normal  text-center uppercase tracking-widest font-light`}>personal projects</p>
              <svg className="w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z" fill="white" />
              </svg>
            </div>
          </Link>
        </div>
        <div data-scrollh="2" className={`h-[2px] bg-yellow ${selected.on ? "opacity-0" :"opacity-100"} transition-all duration-300 ease-out   z-40 scrollLineH w-0 absolute bottom-0`}></div>
      </div>
      {/* edjoy sec */}
      <div onClick={()=>changeState("edjoy")} className={`w-full workChild cursor-pointer overflow-hidden group ${selected.sec === "edjoy"  ? "col-start-1 cursor-default col-end-10 row-start-1 row-end-4" : selected.on ? "row-start-4 row-end-5 col-start-4 col-end-7" :"col-start-6 col-end-10 row-start-1 row-end-3"}  h-full  relative`}>
        <div data-scrollh="3" className={`h-[2px] ${selected.on ? "opacity-0" :"opacity-100"} transition-all duration-300 ease-out bg-yellow right-0 z-40 scrollLineH w-0 absolute bottom-0`}></div>
        <div data-scrollv="5" className={`w-[2.5px] h-0 z-40 ${selected.on ? "opacity-0" :"opacity-100"} transition-all duration-300 ease-out scrollLine  left-0 top-0   bg-yellow  absolute`}></div>
        <div className="h-full w-full flex flex-col relative">
          <div className="h-full w-full flex p-8 px-12">
            <p className="font-bold text-white relative z-[2]   tracking-widest uppercase text-2xl ">edjoy</p>
          </div>

          <Image lt="picture contains a smiling kid" width={863} height={401} src={"/kid.png"} className="w-full z-[1] transition-all duration-300 ease-out group-hover:scale-105 h-full object-cover object-center absolute top-0" />
        </div>
      </div>
      <div onClick={()=>changeState("asepa")} className={`w-full workChild cursor-pointer overflow-hidden group ${selected.sec === "asepa"  ? "col-start-1 cursor-default col-end-10 row-start-1 row-end-4" : selected.on ? "col-start-7 col-end-10 row-start-4 row-end-5" :"row-start-2 row-end-5 col-start-1 col-end-6"}  h-full  relative`}>
        <div data-scrollh="4" className={`h-[2px] ${selected.on ? "opacity-0" :"opacity-100"} transition-all duration-300 ease-out bg-yellow right-0  z-40 scrollLineH w-0 absolute bottom-0`}></div>
        <div data-scrollv="6" className={`w-[2.5px] h-0 z-40 scrollLine ${selected.on ? "opacity-0" :"opacity-100"} transition-all duration-300 ease-out  left-0 top-0   bg-yellow  absolute `}></div>
        <div className="h-full w-full flex flex-col relative  ">
          <div className="h-full w-full flex p-8 px-12">
            <p className="font-bold text-white  relative z-[2]    tracking-widest uppercase text-2xl ">asepa</p>
          </div>
          <Image  lt="picture contains a member of asepa" width={1057} height={612} src={"/asepa.png"} className="w-full transition-all duration-300 ease-out group-hover:scale-105 z-[1] h-full object-cover object-center absolute top-0" />
        </div>
      </div>
      <div onClick={()=>changeState("flyfra")} className={`w-full workChild cursor-pointer overflow-hidden group h-full ${selected.sec === "flyfra"  ? "col-start-1 cursor-default col-end-10 row-start-1 row-end-4" : selected.on && selected.sec ==="edjoy" ? "col-start-4 col-end-7 row-start-4 row-end-5"  : selected.on ? "row-start-4 row-end-5 col-start-7 col-end-10" :"row-span-2 col-span-4"} relative`}>
        <div data-scrollh="5" className={`h-[2px] bg-yellow z-40 ${selected.on ? "opacity-0" :"opacity-100"} transition-all duration-300 ease-out scrollLineH w-0 absolute bottom-0`}></div>
        <div data-scrollv="7" className={`w-[2.5px] h-0 z-40 scrollLine ${selected.on ? "opacity-0" :"opacity-100"} transition-all duration-300 ease-out left-0 top-0   bg-yellow  absolute`}></div>
        <div className="h-full w-full flex flex-col relative ">
          <div className="h-full w-full flex p-8 px-12">
            <p className="font-bold  text-white relative z-[2]   tracking-widest uppercase text-2xl ">flyfra</p>{" "}
          </div>
          <Image lt="picture contains a plane" width={863} height={402} src={"/plane.png"} className="w-full transition-all duration-300 ease-out group-hover:scale-105 z-[1] h-full object-cover object-center left-0 bottom-0 right-0 absolute top-0" />
        </div>
      </div>
    </section>
  )
};

export default Work;
