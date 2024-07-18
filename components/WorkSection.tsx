import React from "react";
import WorkCard from "./WorkCard";

type Props = {};

const WorkSection = (props: Props) => {
  const workData = [
    {
      title: "Pharma at hand",
      icon: "/logos/pah.png",
      desc: "Engineered Pharma at Hand, a resource platform for pharmacy students, consolidating essential tools and information. The site streamlines the student experience, providing easy access to resources crucial for academic success in the field of pharmacy in algeria.",
      dark: false,
      rounded: true,
      link: "https://pharma-at-hand.vercel.app/",
    },
    {
      title: "Microhack",
      icon: "/logo.png",
      desc: "Collaborated with a team of developers and designers to create a registration website for the Microhack hackathon. My responsibilities included developing the agenda and assisting with the Hero and timeline sections, ensuring a cohesive and engaging user experience.",
      dark: false,
      rounded: true,
      link: "https://microhack.microclub.info/",
    },
    {
      title: "Innobase",
      icon: "",
      desc: "Designed and developed a comprehensive website for an Algerian startup, offering a specialized horizon scanning database for researchers. This platform streamlines the process of identifying emerging trends and opportunities in various fields of study.",
      dark: false,
      rounded: true,
      link: "https://inno-base.vercel.app/",
    },
    {
      title: "ASEPA-2",
      icon: "/logos/aspeaLogo.png",
      desc: "Revamped my previous website creation using the latest version of the Next.js app router. This upgrade significantly enhances both the user and editor experience, providing a smoother interface, faster load times, and more efficient navigation. The improvements ensure a modern, user-friendly environment for all visitors and contributors.",
      dark: false,
      rounded: false,
      link: "https://asepalg.com/",
    },
    {
      title: "ASEPA-1",
      icon: "/logos/aspeaLogo.png",
      desc: "Created a blog for the scientific association of pharmacy students of the University of Algiers. (ASEPA), focusing on awareness and support for pharmacy students. The platform serves as an informative space throughout their academic journey, offering valuable resources and insights.",
      dark: false,
      rounded: false,
      link: "https://old-asepalg.vercel.app/",
    },
    {
      title: "3JoyGames",
      icon: "/logos/3joy.svg",
      desc: "Created an ecommerce store and blog for 3JoyGames, a company specializing in entertaining games for diverse audiences. The platform seamlessly combines product listings and informative content to cater to both kids and adults.",
      dark: false,
      rounded: true,
      link: "https://3joygames.com/",
    },
    {
      title: "basa cosmetique",
      icon: "/logos/basa.png",
      desc: "Developed an ecommerce platform for Basa Cosmetique, a natural cosmetics company. The site offers a straightforward and engaging shopping experience for users seeking high-quality, nature-inspired beauty products.",
      dark: true,
      rounded: false,
      link: "https://basacosmetique.com/",
    },
    {
      title: "Flyfra",
      icon: "/logos/flyfra.png",
      desc: "Designed a website for an airlines training company, FlyFra, providing comprehensive resources for aspiring aviation professionals. The site facilitates students' access to essential information, ensuring a solid foundation for success in the aviation industry.",
      dark: false,
      rounded: false,
      link: "https://flyfra.vercel.app/",
    },
    {
      title: "Ophin",
      icon: "/logos/ophin.png",
      desc: "Developed a blog for a pharmacy student club, Ophin, dedicated to exploring botanical aspects of pharmacy. The site serves as a knowledge-sharing platform, fostering a deeper understanding of the botanical fields within the realm of pharmacy.",
      dark: false,
      rounded: false,
      link: "https://ophin.vercel.app/",
    },
  ];
  return (
    //@ts-ignore
    <section name="/work" className="grid relative  gap-[1px] bg-yellow md:grid-cols-2 w-full">
      <div
        data-scrollv="50"
        className={`w-[1px] h-0 z-40 scrollLine  transition-all duration-300 ease-out   left-0 top-0   bg-yellow  absolute `}
      ></div>
      <div
        data-scrollv="51"
        className={`w-[1px] h-0 z-40 scrollLine  transition-all duration-300 ease-out   right-0 top-0   bg-yellow  absolute `}
      ></div>
      {workData.map((job, index) => (
        <WorkCard spanTwo={index+1===workData.length} job={job} key={index} />
      ))}
      
    </section>
  );
};

export default WorkSection;
