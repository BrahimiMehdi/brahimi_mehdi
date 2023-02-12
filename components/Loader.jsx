import React from 'react'
import {useEffect,useState,useRef} from 'react'
import { gsap } from 'gsap';
import { useRouter } from 'next/router';
const Loader = ({children}) => {
    const router = useRouter();
    const [loading,setLoading] = useState(false);
    const container = useRef()
    const animate =()=>{
        return gsap.to(container.current,{opacity:1,duration:1})
    }
    const reverse =()=>{
        return gsap.to(container.current,{opacity:0,duration:1})
    }
    useEffect(() => {   
      let timeout

      const handleStart = (url) => {if(url !== router.asPath){ console.log("started"); reverse()}};
      const handleComplete = (url) => animate();
      router.events.on("routeChangeStart",handleStart)
      router.events.on("routeChangeComplete",handleComplete)
      router.events.on("routeChangeError",handleComplete)
      
      return () =>{
        router.events.off("routeChangeStart",handleStart)
        router.events.off("routeChangeComplete",handleComplete)
        router.events.off("routeChangeError",handleComplete)
        clearTimeout(timeout)
      }
    }, [router.asPath])
  return (
    <div className={"min-h-full bg-dark-blue w-full"}>
        <div ref={container} className={`min-h-full w-full`}>
            {children}
        </div>
    </div>
  )
}

export default Loader