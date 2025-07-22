import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/home/Hero";
import Bio from "@/components/home/Bio";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Bio />
      <Skills />
      <Projects />
    </div>
  );
}
