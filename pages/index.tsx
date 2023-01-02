import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import {Header,Hero,About,Work} from "../components"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Brahimi Mehdi</title>
        <meta name="description" content="Jam Stack developer and a web designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen  bg-dark-blue ">
        <div className="h-28">

        </div>
        <Header />
        <Hero />
        <About />
        <Work />
        <div className="h-screen">

        </div>
      </main>
    </>
  )
}
