import Hero from "@/app/components/Hero";
import AvailableFor from "@/app/components/AvailableFor";
import GameShowcase from "@/app/components/GameShowcase";
import Deployments from "@/app/components/Deployments";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Hero />
      <AvailableFor />
      <GameShowcase />
      <Deployments />
      <Skills />
      <Contact />
    </main>
  );
}
