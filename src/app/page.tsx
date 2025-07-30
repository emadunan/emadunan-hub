import Hero from "@/components/home/Hero";
import Bio from "@/components/home/Bio";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import MediaCarousel from "@/components/home/MediaCarousel";

export default function Home() {
  return (
    <div>
      <Hero />
      <Bio />
      <Skills />
      <Projects />
      <MediaCarousel />
    </div>
  );
}
