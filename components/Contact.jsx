import { useEffect,useRef } from "react";
import { gsap ,Power3,Elastic} from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
const Contact = () => {
    gsap.registerPlugin(ScrollTrigger)
    const first = useRef();
  const trigger = useRef();
  const parent = gsap.utils.selector(first);
  useEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline()
      gsap.from(parent(".child"), { yPercent:"30",ease:Power3.easeInOut, rotate: 0, stagger: 0.05,opacity:0, scrollTrigger: trigger.current })
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={trigger} className="h-[calc(100vh-7rem)] relative w-full grid grid-cols-9 items-center ">
        <div
          data-scrollh="30"
          className={`h-[1px] bg-yellow transition-all duration-300 ease-out   z-40 scrollLineH w-0 absolute top-0`}
        ></div>
        <div className="col-span-4 h-full w-full relative">
           <Image src={"/contact.jpg"} fill className="object-cover h-full w-full object-center" />
           
           <div
          data-scrollv="43"
          className={`w-[1px] h-0 z-40 scrollLine  transition-all duration-300 ease-out   left-0 top-0   bg-yellow  absolute `}
        ></div>
        </div>

      <div className="flex h-full px-8 w-full text-7xl relative  flex-col col-span-5 gap-x-16 uppercase pt-20 font-bold text-white">
      <div
          data-scrollv="44"
          className={`w-[1px] h-0 z-40 scrollLine  transition-all duration-300 ease-out   left-0 top-0   bg-yellow  absolute `}
        ></div>
        <p ref={first} className="firstText">
          <span className="child inline-block">c</span>
          <span className="child inline-block">o</span>
          <span className="child inline-block">n</span>
          <span className="child inline-block">t</span>
          <span className="child inline-block">a</span>
          <span className="child inline-block">c</span>
          <span className="child inline-block">t</span>
          <span className="child inline-block mr-8"> </span>
          <span className="child inline-block"> </span>
          <span className="child inline-block">m</span>
          <span className="child inline-block">e</span>
        </p>
        <form className="w-full grid grid-cols-2  h-full" action="">
            
        </form>
        
      </div>
    </section>
  );
};

export default Contact;
