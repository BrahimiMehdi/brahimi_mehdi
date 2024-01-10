import React from 'react'
import { Hind_Guntur } from "@next/font/google";
const hind_Guntur = Hind_Guntur({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
type Props = {
    job:{
        title:string;
        icon:string;
        desc:string;
        rounded:boolean;
        dark:boolean;
        link:string;
    }
}

const WorkCard = ({job}: Props) => {
  return (
    <div className='w-full justify-between flex flex-col gap-y-8 p-8  bg-dark-blue'>
       <div className='flex items-center w-full justify-between'>
       <p className='text-2xl uppercase font-bold text-white'>{job.title}</p>
        <img className={`w-16 ${job.dark ? "brightness-0 invert" : "brightness-100 invert-0"}  ${job.rounded ? " rounded-full" :"rounded-none"} object-contain object-center aspect-square`} src={job.icon} alt={job.title} />
        
       </div>
       <p className={`${hind_Guntur.className} text-gray-100 text-justify leading-normal text-xl tracking-wider font-light`}>
        {job.desc}
        </p>
        <a className='py-4 md:w-fit w-full text-center transition-all duration-300 ease-in-out hover:bg-blue intersect px-20 self-start uppercase border-2 border-white text-white text-sm font-medium' href={job.link} target="_blank" rel="noopener noreferrer">
          visit
        </a>
    </div>
  )
}

export default WorkCard