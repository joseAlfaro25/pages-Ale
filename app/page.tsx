import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#090909] text-[#F5F5F0] selection:bg-[#DDF247] selection:text-black">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
