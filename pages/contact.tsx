import Head from "next/head";
import {
  Header,
  Contact,
  Footer,
} from "../components";

export default function contact() {
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

export async function getServerSideProps(context:any) {
    await waitload(1.5);
    return {
      props: { dummy: "dummy" }, // will be passed to the page component as props
    };
  }
  
  function waitload(sec:number) {
    return new Promise((resolve) => setTimeout(resolve, sec * 1000));
  }