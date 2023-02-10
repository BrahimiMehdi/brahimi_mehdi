import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
const montserrat = Montserrat({
  subsets: ["latin-ext"],
  variable: "--font-mont",
});
import { gsap, Power3 } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }: AppProps) {
  const tl = gsap.timeline();
  const router = useRouter();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const context =gsap.context(()=>{
      tl.to("#topers", { width: "100%", duration: 5, ease: Power3.easeOut });
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    const ball = document.querySelector(".ball");
    const intersectors = document.querySelectorAll(".intersect")
    const images = document.querySelectorAll(".intersectImage")
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.15;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    intersectors.forEach((item)=>{
      item.addEventListener("mouseenter",(e)=>{
          gsap.to(".ball",{width:"50px",height:"50px",scale:2,duration:0.2})
      })
      item.addEventListener("mouseleave",(e)=>{
          gsap.to(".ball",{width:"16px",height:"16px",scale:1,duration:0.2})
      })
    })
    images.forEach((item)=>{
      item.addEventListener("mouseenter",(e)=>{
          gsap.to(".ball",{width:"50px",height:"50px",borderColor:"rgb(236 252 203)",background:"transparent",scale:2,duration:0.2})
      })
      item.addEventListener("mouseleave",(e)=>{
          gsap.to(".ball",{width:"16px",height:"16px",background:"rgb(236 252 203)",scale:1,duration:0.2})
      })
    })
    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
    gsap.utils.toArray(".sideLine").forEach((line: any) => {
      let number = line.getAttribute("data-line");
      gsap.to(`.sideLine[data-line="${number}"]`, {
        delay: number / 2,
        duration: 1,
        height: "100%",
        ease: Power3.easeOut,
      });
    });
    gsap.utils.toArray(".innerInfo").forEach((info: any) => {
      let number = info.getAttribute("data-info");
      gsap.to(`.innerInfo[data-info="${number}"]`, {
        delay: number / 2,
        duration: 1,
        opacity: 1,
        ease: Power3.easeOut,
      });
    });
    gsap.utils.toArray(".scrollLine").forEach((line: any) => {
      let number = line.getAttribute("data-scrollv");
      gsap.to(`.scrollLine[data-scrollv="${number}"]`, {
        height: "100%",
        scrollTrigger: {
          trigger: `.scrollLine[data-scrollv='${number}']`,
          scrub: 1,
          start: "center bottom",
        },
      });
    });
    gsap.utils.toArray(".scrollLineH").forEach((line: any) => {
      let number = line.getAttribute("data-scrollh");
      gsap.to(`.scrollLineH[data-scrollh="${number}"]`, {
        width: "100%",
        scrollTrigger: {
          trigger: `.scrollLineH[data-scrollh='${number}']`,
          scrub: 1,
          start: "top bottom",
        },
      });
    });
    gsap.utils.toArray(".scrollInfo").forEach((line: any) => {
      let number = line.getAttribute("data-scrolli");
      gsap.to(`.scrollInfo[data-scrolli="${number}"]`, {
        opacity: 1,
        scrollTrigger: {
          trigger: `.scrollInfo[data-scrolli='${number}']`,
          scrub: 1,
          start: "center bottom",
          end: "center center",
        },
      });
    });
    })
    return ()=>{
      context.revert();
    }
  }, [router.asPath]);
  return (
    <div className={`${montserrat.className} font-Montserrat `}>
      <Component {...pageProps} />
    </div>
  );
}
