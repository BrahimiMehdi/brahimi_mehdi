import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
import { gsap, Power3 } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function App({ Component, pageProps }: AppProps) {
  const tl = gsap.timeline();
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
      let number = line.getAttribute("data-scrollV");
      gsap.to(`.scrollLine[data-scrollV="${number}"]`, {height:"100%", scrollTrigger:{trigger:`.scrollLine[data-scrollV='${number}']`,scrub:1,start:"center bottom"} });
    });
    gsap.utils.toArray(".scrollLineH").forEach((line:any) => {
      let number = line.getAttribute("data-scrollH");
      gsap.to(`.scrollLineH[data-scrollH="${number}"]`, {width:"100%", scrollTrigger:{trigger:`.scrollLine[data-scrollH='${number}']`,scrub:1,start:"top bottom"} });
    });
    gsap.utils.toArray(".scrollInfo").forEach((line:any) => {
      let number = line.getAttribute("data-scrollI");
      gsap.to(`.scrollInfo[data-scrollI="${number}"]`, {opacity:1, scrollTrigger:{trigger:`.scrollInfo[data-scrollI='${number}']`,scrub:1,start:"center bottom",end:"center center"} });
    });
  }, []);
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
