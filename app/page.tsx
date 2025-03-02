import AboutSection from "@/components/AboutSection";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import HeroSection from "@/components/HeroSection";
import Quotes from "@/components/Quotes";
import Skills from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="w-svw bg-gray-100 text-gray-900 m-0 p-0 ">
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Blogs />
      <Quotes />
      <Contact />
    </main>
  );
}
