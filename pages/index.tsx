import Head from "next/head";
import {
  Header,
  Hero,
  Services,
  Contact,
  About,
  Work,
  Footer,
} from "../components";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Brahimi Mehdi</title>
        <meta
          name="description"
          content="Jam Stack developer and a web designer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen overflow-x-hidden   bg-dark-blue ">
        <Header />
        <div className="h-28 bg-dark-blue"></div>
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </main>
      <div
        id="ball"
        className="ball md:grid hidden text-[0.5rem] tracking-wider  place-items-center border-4 border-transparent uppercase mix-blend-difference  text-transparent bg-lime-100 z-50"
      >
        CLICK
      </div>
    </div>
  );
}
