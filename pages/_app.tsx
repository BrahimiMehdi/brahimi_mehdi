import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
import { gsap, Power3 } from "gsap";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const tl = gsap.timeline();
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
