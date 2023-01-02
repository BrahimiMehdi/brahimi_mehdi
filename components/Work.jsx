import { Hind_Guntur } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
const hind_Guntur = Hind_Guntur({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
const Work = () => {
  return (
    <section name="/work" className="min-h-screen  grid-rows-4 w-full relative grid grid-cols-9">
      {/* work sec */}
      <div data-scrollI="3" className="w-full scrollInfo  h-full col-span-5 relative   row-span-1">
        <div data-scrollV="4" className="w-[2.5px] h-0 z-40 scrollLine  left-0 top-0   bg-yellow  absolute "></div>
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
        <div data-scrollH="2" className="h-[2px] bg-yellow  z-40 scrollLineH w-0 absolute bottom-0"></div>
      </div>
      {/* edjoy sec */}
      <div className="w-full   h-full row-span-2 col-span-4 relative">
        <div data-scrollH="3" className="h-[2px] bg-yellow  z-40 scrollLineH w-0 absolute bottom-0"></div>
        <div data-scrollV="5" className="w-[2.5px] h-0 z-40 scrollLine  left-0 top-0   bg-yellow  absolute "></div>
        <div className="h-full w-full flex flex-col relative">
          <div className="h-full w-full flex p-8 px-12">
            <p className="font-bold text-white relative z-[2]   tracking-widest uppercase text-2xl ">edjoy</p>
          </div>

          <Image width={863} height={401} src={"/kid.png"} className="w-full z-[1] h-full object-cover object-center absolute top-0" />
        </div>
      </div>
      <div className="w-full   h-full row-span-3 col-span-5 relative">
        <div data-scrollH="4" className="h-[2px] bg-yellow  z-40 scrollLineH w-0 absolute bottom-0"></div>
        <div data-scrollV="6" className="w-[2.5px] h-0 z-40 scrollLine  left-0 top-0   bg-yellow  absolute "></div>
        <div className="h-full w-full flex flex-col relative  ">
          <div className="h-full w-full flex p-8 px-12">
            <p className="font-bold text-white  relative z-[2]    tracking-widest uppercase text-2xl ">asepa</p>
          </div>
          <Image width={1057} height={612} src={"/asepa.png"} className="w-full z-[1] h-full object-cover object-center absolute top-0" />
        </div>
      </div>
      <div className="w-full   h-full row-span-2 col-span-4 relative">
        <div data-scrollH="5" className="h-[2px] bg-yellow z-40  scrollLineH w-0 absolute bottom-0"></div>
        <div data-scrollV="7" className="w-[2.5px] h-0 z-40 scrollLine  left-0 top-0   bg-yellow  absolute "></div>
        <div className="h-full w-full flex flex-col relative ">
          <div className="h-full w-full flex p-8 px-12">
            <p className="font-bold  text-white relative z-[2]   tracking-widest uppercase text-2xl ">flyfra</p>{" "}
          </div>

          <Image width={863} height={402} src={"/plane.png"} className="w-full z-[1] h-full object-cover object-center left-0 bottom-0 right-0 absolute top-0" />
        </div>
      </div>
    </section>
  );
};

export default Work;
