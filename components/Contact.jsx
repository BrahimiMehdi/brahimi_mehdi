import { useEffect, useRef } from "react";
import { gsap, Power3, Elastic } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { BsPerson, BsCalendar2Date, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  gsap.registerPlugin(ScrollTrigger);
  const first = useRef();
  const trigger = useRef();
  const parent = gsap.utils.selector(first);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.from(parent(".child"), {
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
    name="/contact"
      ref={trigger}
      className="md:h-[calc(100vh-7rem)] relative w-full grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-9 items-center "
    >
      <div
        data-scrollh="30"
        className={`h-[1px] bg-yellow transition-all duration-300 ease-out   z-40 scrollLineH w-0 absolute top-0`}
      ></div>
      <div className="col-span-4 order-2 md:order-1 h-full w-full relative">
        <Image
          src={"/contact.jpg"}
          fill
          className="object-cover h-full w-full object-center"
        />

        <div
          data-scrollv="43"
          className={`w-[1px] h-0 z-40 scrollLine  transition-all duration-300 ease-out   left-0 top-0   bg-yellow  absolute `}
        ></div>
      </div>

      <div className="flex h-full order-1 md:order-2 px-8 md:px-16 w-full relative md:items-start items-center  flex-col col-span-5 gap-y-16 uppercase pt-20 font-bold text-white">
        <div
          data-scrollv="44"
          className={`w-[1px] h-0 z-40 scrollLine  transition-all duration-300 ease-out   left-0 top-0   bg-yellow  absolute `}
        ></div>
        <p ref={first} className="firstText text-4xl md:text-left text-center lg:text-7xl">
          <span className="child inline-block">c</span>
          <span className="child inline-block">o</span>
          <span className="child inline-block">n</span>
          <span className="child inline-block">t</span>
          <span className="child inline-block">a</span>
          <span className="child inline-block">c</span>
          <span className="child inline-block">t</span>
          <span className="child inline-block mr-4 md:mr-8"> </span>
          <span className="child inline-block">m</span>
          <span className="child inline-block">e</span>
        </p>
        <form className="w-full h-full md:min-h-fit min-h-[30rem] font-medium pb-16" action="">
          <div className="grid md:grid-cols-2 place-items-center md:place-items-start gap-12 md:gap-8 grid-rows-5 md:grid-rows-4  w-full max-w-xl  h-full">
            <div className="w-full relative h-12 group transition-all duration-200 ease-out focus-within:bg-gray-50 outline-light-blue outline focus-within:outline-yellow bg-white rounded-sm flex items-center">
              <div className="w-16 transition-all duration-200 ease-out h-full group-focus-within:border-r-yellow border-r-2 border-r-gray-300 grid place-items-center ">
                <BsPerson className="text-2xl text-dark-blue" />
              </div>
              <label
                htmlFor="name"
                className="absolute text-sm left-0 transition-all ease-in-out duration-300 group-focus-within:-translate-y-1 group-focus-within:text-yellow -top-6 font-medium text-white"
              >
                Name
              </label>

              <input
                required
                {...register("name", { required: true })}
                className="h-full w-full pl-3 focus:outline-none  "
                placeholder="Name"
                type="text"
                name="name"
                id=""
              />
            </div>

            <div className="w-full relative h-12 group transition-all duration-200 ease-out focus-within:bg-gray-50 outline-light-blue outline focus-within:outline-yellow bg-white rounded-sm flex items-center">
              <div className="w-16 transition-all duration-200 ease-out h-full group-focus-within:border-r-yellow border-r-2 border-r-gray-300 grid place-items-center ">
                <AiOutlineMail className="text-2xl text-dark-blue" />
              </div>
              <label
                htmlFor="email"
                className="absolute text-sm left-0 transition-all ease-in-out duration-300 group-focus-within:-translate-y-1 group-focus-within:text-yellow -top-6 font-medium text-white"
              >
                Email
              </label>

              <input
                required
                {...register("email", { required: true })}
                className="h-full w-full pl-3 focus:outline-none  "
                placeholder="Email"
                type="email"
                name="email"
                id=""
              />
            </div>
            <div className="w-full md:col-span-2 relative h-12 group transition-all duration-200 ease-out focus-within:bg-gray-50 outline-light-blue outline focus-within:outline-yellow bg-white rounded-sm flex items-center">
              <div className="w-16 transition-all duration-200 ease-out h-full group-focus-within:border-r-yellow border-r-2 border-r-gray-300 grid place-items-center ">
                <AiOutlineMail className="text-2xl text-dark-blue" />
              </div>
              <label
                htmlFor="subject"
                className="absolute text-sm left-0 transition-all ease-in-out duration-300 group-focus-within:-translate-y-1 group-focus-within:text-yellow -top-6 font-medium text-white"
              >
                subject
              </label>

              <input
                required
                {...register("subject", { required: true })}
                className="h-full w-full pl-3 focus:outline-none  "
                placeholder="Subject"
                type="subject"
                name="subject"
                id=""
              />
            </div>
            <div className="w-full md:col-span-2 row-span-3 md:row-span-2 relative h-full group transition-all duration-200 ease-out focus-within:bg-gray-50 outline-light-blue outline focus-within:outline-yellow bg-white rounded-sm flex items-center">
              <label
                htmlFor="message"
                className="absolute text-sm left-0 transition-all ease-in-out duration-300 group-focus-within:-translate-y-1 group-focus-within:text-yellow -top-6 font-medium text-white"
              >
                message
              </label>

              <textarea
                required
                {...register("message", { required: true })}
                className="h-full resize-none w-full p-3 focus:outline-none  "
                placeholder="Message"
                type="message"
                name="message"
                id=""
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
