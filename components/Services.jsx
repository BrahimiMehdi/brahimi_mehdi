import { gsap, Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { TfiWrite } from "react-icons/tfi";
// gsap.to(title.current, {
//   keyframes: {
//     //   xPercent: [-50, 100, 100, -100, -150, -200],
//     //   y: [0, 0, 50, 100, 100, 0],
//     xPercent: [-0, -0, -0, -200],
//     scale: [1, 1.2, 1.3, 1.5],
//     ease: "power1.inOut",
//   },
//   scrollTrigger: {
//     trigger: container.current,
//     scrub: 1,
//     end: "+=2000",
//   },
//   duration: 2,
// });


const Services = () => {
  const cards = [
  
    {
      title: "Full stack Mastery",
      image: "bg-[url('/web.jpg')] ",
      text: "Transform your ideas into reality with my full stack development skills, honed to deliver seamless results.",
    },
   
    {
      title: "UI/UX Design",
      image: "bg-[url('/ui.jpg')] ",
      text: "Elevate your online presence with eye-catching and user-friendly UI/UX designs, crafted to enhance the user experience.",
    },
    {
      title: "Ecommerce",
      image: "bg-[url('/ecommerce.jpg')] ",
      text: "Drive growth and increase conversions with custom e-commerce solutions, designed to boost your sales.",
    },
    {
      title: "Website Revamp",
      image: "bg-[url('/ux.jpg')] ",
      text: "Give your website a much-needed upgrade with my website redesign services, breathing new life into your online presence.",
    },
    {
      title: "SEO and marketting",
      image: "bg-[url('/seo2.jpg')] ",
      text: "Put your brand on the map with my effective SEO and marketing strategies, aimed at increasing your online visibility and attracting more customers.",
    },
    {
      title: "Content Elevation",
      image: "bg-[url('/seo.jpg')] ",
      text: "Engage your audience and elevate your brand with my top-quality, SEO-optimized content creation services, designed to bring your message to life.",
    },
  ];
  
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
  const scrollContainer = useRef();
  const imageCont = useRef();
  const cardsContainer = useRef();
  const [current, setCurrent] = useState("");
  const handleClick =(input)=>{
    setCurrent((old)=> old !==input ? input :"")
  }
  useEffect(() => {
    const mm = gsap.matchMedia()
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");
      const sections = gsap.utils.toArray(".serviceSection");
      const containerAnim = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        delay: 0.2,
        scrollTrigger: {
          trigger: container.current,
          scrub: 1,
          pin: true,
          // snap: {
          //   snapTo: 0.5,
          //   duration: 0.3,
          //   ease: Power3.easeInOut
          // },
          end: "+=2000",
        },
      });
      cards.forEach((card) => {
        gsap.to(card, {
          scale: 1,
          backgroundPositionX: "0%",
          ease: Power3.easeInOut,
          duration: 2,
          scrollTrigger: {
            trigger: cardsContainer.current,
            containerAnimation: containerAnim,
            scrub: 1,
            // start:"-=300",
            // end:"-=0"
          },
        });
      });

      gsap.to(imageCont.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scale: 1,
        backgroundPositionY:"55",
        scrollTrigger: { trigger: container.current, scrub: 1, end: "+=1000" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
    name="/services"

      className=" overflow-hidden    relative h-screen w-full  flex flex-row"
    >
      <div
        ref={imageCont}
        className="absolute grid will-change-[clip-path]  z-[6] place-items-center  scale-125 bg-cover bg-center bg-[url('/bg.jpg')] top-0 left-0 h-full w-full [clip-path:_polygon(40%_40%,_60%_40%,_60%_60%,_40%_60%);] "
      >
          <p className="md:text-7xl text-5xl sm:text-6xl xl:text-8xl lg:text-7xl 2xl:text-9xl md:scale-125 tracking-widest testSmall md:test text-transparent relative select-text font-bold uppercase">services</p>
      </div>
      <div
        data-scrollv="20"
        className={`w-[1px] h-0 z-40 transition-all duration-300 ease-out scrollLine  left-0 top-0   bg-yellow  absolute`}
      ></div>

      <div
        ref={scrollContainer}
        className="w-[300vw] will-change-contents  snap-center snap-always snap-mandatory snap-x   h-full  flex "
      >
        <section className="w-screen relative z-[3]  snap-mandatory pb-16 bg-cover bg-center  gap-y-12 h-full flex items-center flex-col px-8 pt-64 serviceSection "></section>
        <section
          ref={cardsContainer}
          className="w-[200vw]  will-change-contents  relative z-[7] snap-mandatory grid grid-cols-3 grid-rows-2 md:grid-rows-1 md:grid-cols-6 pt-28  h-full  serviceSection "
        >
          {cards.map((card, index) => (
            <div
              onClick={() => handleClick(card.title)}
              key={index}
              className={`${card.image} will-change-contents md:py-16 py-6 px-12  flex flex-col items-center relative  bg-cover  w-full overflow-hidden group   bg-center card intersectImage h-full  `}
            >
              <p
                className={`2xl:text-6xl text-center md:text-left text-2xl md:text-4xl  transition-all duration-1000 ease-in-out ${
                  card.title === current
                    ? "text-dark-blue -translate-y-4"
                    : " text-white"
                } tracking-wide relative z-[4] uppercase  font-bold`}
              >
                {card.title}
              </p>
              <div className="h-full z-[1] w-full bg-gradient-to-b absolute top-0 opacity-80 left-0 from-dark-blue to-transparent bg-cover"></div>

              <div
                className={`h-full p-4 flex flex-col items-center top-0 left-0  absolute  ${
                  card.title === current
                    ? "[clip-path:_polygon(0_0,_100%_0,_100%_100%,_0%_100%);]"
                    : " [clip-path:_polygon(0_0,_0_0,_0_100%,_0%_100%);] "
                } transition-all duration-1000 ease-in-out z-[2] w-full bg-stone-100 `}
              >
                <p
                  className={`2xl:text-3xl md:text-xl sm:text-base text-xs absolute top-[60%] md:text-left  md:top-[50%] whitespace-normal leading-normal -translate-y-[50%] px-4 text-left transition-all duration-1000 ease-in-out md:leading-10 tracking-wide text-dark-blue ${
                    card.title === current ? " opacity-100" : "opacity-0"
                  }`}
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Services;
