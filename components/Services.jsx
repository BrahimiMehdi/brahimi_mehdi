import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { TfiWrite } from "react-icons/tfi";
const Services = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
  const scrollContainer = useRef();
  const title = useRef();
  const secondaryTitle = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".serviceSection");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          scrub: 1,
          pin: true,
          pinSPacing:false,
          end: "+=2000",
        },
      });
      gsap.to(title.current, {
        keyframes: {
          //   xPercent: [-50, 100, 100, -100, -150, -200],
          //   y: [0, 0, 50, 100, 100, 0],
          xPercent: [-0, -0, -0, -200],
          scale: [1, 1.2, 1.3, 1.5],
          ease: "power1.inOut",
        },
        scrollTrigger: {
          trigger: container.current,
          scrub: 1,
          end: "+=2000",
        },
        duration: 2,
      });
    });
    gsap.to(secondaryTitle.current, {
      keyframes: {
        //   xPercent: [-50, 100, 100, -100, -150, -200],
        //   y: [0, 0, 50, 100, 100, 0],
        xPercent: [-0, -0, -0, -200],
        scale: [1, 1.2, 1.3, 1.5],
        ease: "power1.inOut",
      },
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        end: "+=2000",
      },
      duration: 2,
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className=" overflow-x-hidden bg-[url('/service.jpg')] bg-cover bg-center relative h-screen w-full  flex flex-row"
    >
      <div
        data-scrollv="20"
        className={`w-[2.5px] h-0 z-40 transition-all duration-300 ease-out scrollLine  left-0 top-0   bg-yellow  absolute`}
      ></div>
      <p
        ref={title}
        className=" text-5xl  text-white font-bold absolute top-40 left-[50%] z-20 translate-x-[-50%] uppercase"
      >
        Services
      </p>

      <div
        ref={scrollContainer}
        className="w-[300vw] mainContainer   h-full  flex "
      >
        <section className="w-screen pb-16 bg-cover bg-center  gap-y-12 h-full flex items-center flex-col px-8 pt-64 serviceSection "></section>
        <section className="w-screen pb-16 bg-blue bg-opacity-80 justify-between backdrop-blur-md  gap-y-12 h-full flex items-center flex-col px-8 pt-64 serviceSection ">
          <svg
            ref={secondaryTitle}
            className="w-64"
            viewBox="0 0 132 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M131.354 4.35355C131.549 4.15829 131.549 3.84171 131.354 3.64645L128.172 0.464466C127.976 0.269204 127.66 0.269204 127.464 0.464466C127.269 0.659728 127.269 0.976311 127.464 1.17157L130.293 4L127.464 6.82843C127.269 7.02369 127.269 7.34027 127.464 7.53553C127.66 7.7308 127.976 7.7308 128.172 7.53553L131.354 4.35355ZM0 4.5H131V3.5H0V4.5Z"
              fill="white"
            />
          </svg>
          <div className="w-full max-h-96 h-full gap-8 grid grid-cols-3 ">
            <div className="bg-black p-8 outline outline-yellow  rounded-sm bg-opacity-40 backdrop-blur-md">
                <div className="flex items-center gap-x-8">
                <TfiWrite className="text-5xl text-white" />
                <p className="uppercase text-white font-bold text-2xl">SEO</p>
                </div>
            </div>
            <div className="bg-black  outline outline-yellow rounded-sm bg-opacity-40 backdrop-blur-md"></div>
            <div className="bg-black  outline outline-yellow rounded-sm bg-opacity-40 backdrop-blur-md"></div>
          </div>
        </section>
        <section className="w-screen pb-16 bg-transparent  gap-y-12 h-full flex justify-end flex-col px-8 pt-40 serviceSection ">
          {/* <div className="w-full h-full gap-8 grid  ">
            <div className="bg-black  outline outline-yellow rounded-sm bg-opacity-40 backdrop-blur-md"></div>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Services;
