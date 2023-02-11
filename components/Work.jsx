import { Hind_Guntur } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";
const hind_Guntur = Hind_Guntur({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const Work = () => {
  gsap.registerPlugin(Flip);
  const [selected, setSelected] = useState({ sec: "", on: false });
  const [flipState, setflipState] = useState(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (flipState !== null) {
        Flip.from(flipState, {
          absolute: true, // uses position: absolute during the flip to work around flexbox challenges
          duration: 1,
          stagger: 0.1,
          targets: ".workChild",
          ease: "power1.inOut",
          nested: true,
        });
      }
    });
    return () => {
      ctx.revert();
    };
  }, [flipState]);
  const changeState = (name) => {
    setflipState(Flip.getState(".workChild"));
    if (name === "") {
      setSelected({ on: false, sec: "" });
    } else {
      setSelected({ on: true, sec: name });
    }
  };
  return (
    <section
      name="/work"
      className={` sm:h-[calc(100vh-7rem)] h-screen relative snap-start workParent grid-rows-4 w-full  grid grid-cols-9`}
    >
      <div
        data-scrollh="22"
        className={`h-[1.5px] bg-yellow ${
          selected.on ? "opacity-0" : "opacity-100"
        } transition-all duration-300 ease-out   z-40 scrollLineH w-0 absolute top-0`}
      ></div>
      {/* work sec */}
      <div
        onClick={() => changeState("")}
        data-scrolli="3"
        className={`w-full workChild cursor-pointer scrollInfo  h-full  relative ${
          selected.on ? "col-span-3" : "col-span-5 cursor-default"
        }  row-span-1`}
      >
        <div
          data-scrollv="4"
          className={`w-[1px] h-0 z-40 scrollLine ${
            selected.on ? "opacity-0" : "opacity-100"
          } transition-all duration-300 ease-out   left-0 top-0   bg-yellow  absolute `}
        ></div>
        <div className="flex h-full md:flex-row flex-col w-full items-center justify-center md:justify-between p-2 md:p-8 relative">
          <p className="font-bold  text-white tracking-wide uppercase sm:text-3xl text-2xl lg:text-5xl ">
            my work
          </p>
          <Link href={"/personal-projects"}>
            <div className="md:w-48 w-32 transition-all duration-300 ease-out hover:scale-95 text-gray-50  hover:text-yellow flex items-center justify-between">
              <p
                className={`${hind_Guntur.className} relative top-1 text-sm leading-normal  text-center uppercase tracking-widest font-light`}
              >
                personal projects
              </p>
              <svg
                className="w-3 sm:block hidden"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div
          data-scrollh="2"
          className={`h-[1px] bg-yellow ${
            selected.on ? "opacity-0" : "opacity-100"
          } transition-all duration-300 ease-out   z-40 scrollLineH w-0 absolute bottom-0`}
        ></div>
      </div>
      {/* edjoy sec */}
      <div
        onClick={() => changeState("edjoy")}
        className={`w-full workChild  intersectImage cursor-pointer overflow-hidden group ${
          selected.sec === "edjoy"
            ? "col-start-1 text-2xl cursor-default col-end-10 row-start-1 row-end-4"
            : selected.on
            ? "row-start-4 text-lg row-end-5 col-start-4 col-end-7"
            : "col-start-6 text-2xl col-end-10 row-start-1 row-end-3"
        }  h-full  relative`}
      >
        <div
          data-scrollh="3"
          className={`h-[1px] ${
            selected.on ? "opacity-0" : "opacity-100"
          } transition-all duration-300 ease-out bg-yellow right-0 z-40 scrollLineH w-0 absolute bottom-0`}
        ></div>
        <div
          data-scrollv="5"
          className={`w-[1px] h-0 z-40 ${
            selected.on ? "opacity-0" : "opacity-100"
          } transition-all duration-300 ease-out scrollLine  left-0 top-0   bg-yellow  absolute`}
        ></div>
        <div className="h-full w-full flex flex-col relative">
          <div className="h-full w-full gap-y-4  flex-col relative z-[3] flex p-8 px-4 md:px-12">
            <p className="font-bold text-white relative z-[2]   tracking-widest uppercase  ">
              edjoy
            </p>
            <div
              className={`h-full w-full flex flex-col ${
                selected.sec === "edjoy" ? "opacity-100 delay-1000" : "opacity-0 delay-75 "
              } transition-all duration-1000 ease-in-out `}
            >
              <p className="lg:text-3xl text-sm sm:leading-10 font-light text-stone-100 ">
                Edjoy is a company that sells entertaining games for both kids
                and adults, games that strengthen the mind of their player and
                allow them to have fun at the same time.
              </p>
              <p className="lg:text-3xl text-sm sm:leading-10 font-light text-stone-100 mt-2 ">
                I was tasked with delivering an ecommerce website with a unique
                visual identity that is both apparent to kids and adults.
              </p>
              <div className="flex md:flex-row flex-col gap-y-4 relative sm:top-0 top-20 sm:h-full w-full items-center justify-between">
                <img
                  className="md:w-28 w-16 relative md:top-3"
                  src="/edjoy.png"
                  alt=""
                />
                <a
                  className="sm:text-3xl text-xl   text-white font-bold uppercase"
                  href="https://edjoy.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visit the website
                </a>
              </div>
            </div>
          </div>
          <div
            className={`absolute transition-all duration-1000 backdrop-blur-sm ${
              selected.sec === "edjoy" ? "opacity-80 delay-1000" : "opacity-0 delay-75"
            }  z-[2] bg-dark-blue  w-full h-full top-0 left-0`}
          ></div>
          <Image
            alt="picture contains a smiling kid"
            width={863}
            height={401}
            src={"/kid.jpg"}
            className="w-full z-[1]  transition-all duration-300 ease-out group-hover:scale-105 h-full object-cover  object-center absolute top-0"
          />
        </div>
      </div>
      <div
        onClick={() => changeState("asepa")}
        className={`w-full workChild  intersectImage cursor-pointer overflow-hidden group ${
          selected.sec === "asepa"
            ? "col-start-1 text-2xl cursor-default col-end-10 row-start-1 row-end-4"
            : selected.on
            ? "col-start-7 text-lg col-end-10 row-start-4 row-end-5"
            : "row-start-2 text-2xl row-end-5 col-start-1 col-end-6"
        }  h-full  relative`}
      >
        <div
          data-scrollv="6"
          className={`w-[1px] h-0 z-40 scrollLine ${
            selected.on ? "opacity-0" : "opacity-100"
          } transition-all duration-300 ease-out  left-0 top-0   bg-yellow  absolute `}
        ></div>
        <div className="h-full w-full flex flex-col relative  ">
          <div className="h-full w-full gap-y-4  flex-col relative z-[3] flex p-8 px-4 md:px-12">
            <p className="font-bold text-white relative z-[2]   tracking-widest uppercase  ">
              asepa
            </p>
            <div
              className={`h-full w-full flex flex-col ${
                selected.sec === "asepa" ? "opacity-100 delay-1000 " : "opacity-0  delay-75"
              } transition-all duration-1000 ease-in-out `}
            >
              <p className="lg:text-3xl text-sm sm:leading-10 font-light text-stone-100 ">
            ASEPA is an association that aims for incentivsing people from
            all ages about health and pharmacy
          </p>

          <p className="lg:text-3xl text-sm sm:leading-10 font-light text-stone-100 mt-2 ">
            My role in ASEPA was to re-develop and design a new website
            using the latest technologies and creating a smooth user
            experience.
          </p>
          <p className="lg:text-3xl text-sm sm:leading-10 font-light text-stone-100 mt-4 ">
            The website has dynamic articles and events implemented using
            nextjs static generation,also with google analytics to follow
            user interactivity.
          </p>
              
              <div className="flex md:flex-row flex-col gap-y-4 relative sm:top-0 top-20 sm:h-full w-full items-center justify-between">
                <img
                  className="md:w-48 w-24 relative top-1"
                  src="/aspeaLogo.png"
                  alt=""
                />
                <a
                  className="md:text-3xl text-sm  text-white font-bold uppercase"
                  href="https://asepalg.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visit the website
                </a>
              </div>
            </div>
          </div>
          <div
            className={`absolute transition-all duration-1000 backdrop-blur-sm ${
              selected.sec === "asepa" ? "opacity-80 delay-1000" : "opacity-0 delay-75"
            }  z-[2] bg-dark-blue  w-full h-full top-0 left-0`}
          ></div>
          <Image
            alt="picture contains a member of asepa"
            width={1057}
            height={612}
            src={"/asepa.JPG"}
            className="w-full transition-all duration-300 ease-out group-hover:scale-105 z-[1] h-full object-cover  object-center absolute top-0"
          />
        </div>
      </div>
      {/* flyfra sec */}
      <div
        onClick={() => changeState("flyfra")}
        className={`w-full workChild  intersectImage cursor-pointer overflow-hidden group h-full ${
          selected.sec === "flyfra"
            ? "col-start-1  text-2xl cursor-default col-end-10 row-start-1 row-end-4"
            : selected.on && selected.sec === "edjoy"
            ? "col-start-4 text-lg col-end-7 row-start-4 row-end-5"
            : selected.on
            ? "row-start-4 text-lg row-end-5 col-start-7 col-end-10"
            : "row-span-2  text-2xl col-span-4"
        } relative`}
      >
        <div
          data-scrollv="7"
          className={`w-[1px] h-0 z-40 scrollLine ${
            selected.on ? "opacity-0" : "opacity-100"
          } transition-all duration-300 ease-out left-0 top-0   bg-yellow  absolute`}
        ></div>
        <div className="h-full w-full flex flex-col relative ">
        <div className="h-full w-full gap-y-4  flex-col relative z-[3] flex p-8 px-4 md:px-12">
            <p className="font-bold text-white relative z-[2]   tracking-widest uppercase  ">
              flyfra
            </p>
            <div
              className={`h-full w-full flex flex-col ${
                selected.sec === "flyfra" ? "opacity-100 delay-1000" : "opacity-0 delay-75"
              } transition-all duration-1000 ease-in-out `}
            >
              <p className="lg:text-3xl text-sm sm:leading-10 font-light text-stone-100 ">
               FlyFra is an academy that offers courses and oppurtonities in the airline field for its students.
              </p>

              <p className="lg:text-3xl text-sm sm:leading-10 font-light text-stone-100 mt-2 ">
                My role in FlyFra was to re-design and devleop their main website, improving its usability for both the staff  and the students, focusing primarly on the user experience and the compatability with the brand identity
              </p> 
              
              <div className="flex md:flex-row flex-col gap-y-4 relative sm:top-0 top-20 sm:h-full w-full items-center justify-between">
                <img
                  className="md:w-48 w-24 relative top-1"
                  src="/flyfra.png"
                  alt=""
                />
                <a
                  className="md:text-3xl text-sm  text-white font-bold uppercase"
                  href="https://flyfra.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visit the website
                </a>
              </div>
            </div>
          </div>
          <div
            className={`absolute transition-all duration-1000 backdrop-blur-sm ${
              selected.sec === "flyfra" ? "opacity-80 delay-1000" : "opacity-0 delay-75"
            }  z-[2] bg-dark-blue  w-full h-full top-0 left-0`}
          ></div>
          <Image
            alt="picture contains a plane"
            width={863}
            height={402}
            src={"/plane.jpg"}
            className="w-full transition-all duration-300 ease-out group-hover:scale-105 z-[1] h-full object-cover  object-center left-0 bottom-0 right-0 absolute top-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
