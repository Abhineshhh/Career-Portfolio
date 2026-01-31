import ScrollToTop from "@/components/ui/scroll-to-top";
import Navbar from "@/components/sections/navbar";
import Header from "@/components/sections/header";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import OpenSource from "@/components/sections/open-source";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center relative">
      <main className="relative z-10 max-w-3xl w-full mx-auto px-4 sm:px-6 md:px-8">
        <Navbar />
        <ScrollToTop />

        <Header />
        <Skills />
        <Projects />
        <OpenSource />
        
        <Footer />
      </main>

    </div>
  );
}
