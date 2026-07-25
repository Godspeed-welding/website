import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Credentials from "@/components/Credentials";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Capabilities />
        <Credentials />
        <Process />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
