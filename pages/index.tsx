import Head from "next/head";
import { Header, Hero,Services, About, Work, Footer } from "../components";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Brahimi Mehdi</title>
        <meta name="description" content="Jam Stack developer and a web designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen   bg-dark-blue ">
        <Header />
        <div className="h-28 bg-dark-blue">

        </div>
        <Hero />
        <About />
        <Work />
        <Services />
        
        <Footer />
      </main>
    </div>
  );
}
