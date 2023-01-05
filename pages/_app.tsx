import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
import { gsap, Power3 } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }: AppProps) {
  const tl = gsap.timeline();
  const router = useRouter();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    tl.to("#topers", { width: "100%", duration: 5, ease: Power3.easeOut });
    gsap.utils.toArray(".sideLine").forEach((line:any) => {
      let number = line.getAttribute("data-line");
      gsap.to(`.sideLine[data-line="${number}"]`, { delay: number / 2, duration: 1, height: "100%", ease: Power3.easeOut });
    });
    gsap.utils.toArray(".innerInfo").forEach((info:any) => {
      let number = info.getAttribute("data-info");
      gsap.to(`.innerInfo[data-info="${number}"]`, { delay: number / 2, duration: 1, opacity: 1, ease: Power3.easeOut });
    });
    gsap.utils.toArray(".scrollLine").forEach((line:any) => {
      let number = line.getAttribute("data-scrollv");
      gsap.to(`.scrollLine[data-scrollv="${number}"]`, {height:"100%", scrollTrigger:{trigger:`.scrollLine[data-scrollv='${number}']`,scrub:1,start:"center bottom"} });
    });
    gsap.utils.toArray(".scrollLineH").forEach((line:any) => {
      let number = line.getAttribute("data-scrollh");
      gsap.to(`.scrollLineH[data-scrollh="${number}"]`, {width:"100%", scrollTrigger:{trigger:`.scrollLine[data-scrollh='${number}']`,scrub:1,start:"top bottom"} });
    });
    gsap.utils.toArray(".scrollInfo").forEach((line:any) => {
      let number = line.getAttribute("data-scrolli");
      gsap.to(`.scrollInfo[data-scrolli="${number}"]`, {opacity:1, scrollTrigger:{trigger:`.scrollInfo[data-scrolli='${number}']`,scrub:1,start:"center bottom",end:"center center"} });
    });
  }, [router]);
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${montserrat.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
