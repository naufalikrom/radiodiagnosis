import Link from "next/link"
import Navbar from "../components/organisms/navbar"
import Hero from "../components/organisms/hero"
import Advantages from "../components/organisms/advantages"
import About from "../components/organisms/about"
import Footer from "../components/organisms/footer"
import Sends from "../components/organisms/sends"

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16 pb-7 pl-7 pr-7">
        <Hero/>
        <About/>
        <Advantages/>
        <Sends/>
      </main>
      <Footer/>
    </>
  )
}

export default LandingPage
