import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 scroll-smooth">
      <div className="max-w-7xl w-full text-white">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        {/* <Experience /> */}
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
