import AboutSection from "@/components/AboutSection";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Quotes from "@/components/Quotes";
import Skills from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Experience />
      <Blogs />
      <Quotes />
      <Contact />
    </>
  );
}
