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
      link: "",
    },
    {
      title: "ASEPA",
      icon: "/logos/aspeaLogo.png",
      desc: "Created a blog for the scientific association of pharmacy students of the University of Algiers. (ASEPA), focusing on awareness and support for pharmacy students. The platform serves as an informative space throughout their academic journey, offering valuable resources and insights.",
      dark: false,
      rounded: false,
      link: "",
    },
    {
      title: "3JoyGames",
      icon: "/logos/3joy.svg",
      desc: "Created an ecommerce store and blog for 3JoyGames, a company specializing in entertaining games for diverse audiences. The platform seamlessly combines product listings and informative content to cater to both kids and adults.",
      dark: false,
      rounded: true,

      link: "",
    },
    {
      title: "basa cosmetique",
      icon: "/logos/basa.png",
      desc: "Developed an ecommerce platform for Basa Cosmetique, a natural cosmetics company. The site offers a straightforward and engaging shopping experience for users seeking high-quality, nature-inspired beauty products.",
      dark: true,
      rounded: false,
      link: "",
    },
    {
      title: "Flyfra",
      icon: "/logos/flyfra.png",
      desc: "Designed a website for an airlines training company, FlyFra, providing comprehensive resources for aspiring aviation professionals. The site facilitates students' access to essential information, ensuring a solid foundation for success in the aviation industry.",
      dark: false,
      rounded: false,
      link: "",
    },
    {
      title: "Ophin",
      icon: "/logos/ophin.png",
      desc: "Developed a blog for a pharmacy student club, Ophin, dedicated to exploring botanical aspects of pharmacy. The site serves as a knowledge-sharing platform, fostering a deeper understanding of the botanical fields within the realm of pharmacy.",
      dark: false,
      rounded: false,
      link: "",
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
        <WorkCard job={job} key={index} />
      ))}
    </section>
  );
};

export default WorkSection;
