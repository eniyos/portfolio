import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { HeroDecor, WorksDecor, StatsDecor, StackDecor, AboutDecor, ContactDecor } from "./components/SectionDecor";
import { Projects } from "./components/Projects";
import { Stats } from "./components/Stats";
import { Stack } from "./components/Stack";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="relative flex-1 flex flex-col w-full bg-background">
        <div className="relative w-full min-h-screen overflow-hidden">
          <HeroDecor />
          <div className="relative mx-auto w-full max-w-[1280px] min-h-screen flex flex-col parallax-rise">
            <Hero />
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <WorksDecor />
          <Projects />
        </div>
        <div className="relative w-full overflow-hidden">
          <StatsDecor />
          <Stats />
        </div>
        <div className="relative w-full overflow-hidden">
          <StackDecor />
          <Stack />
        </div>
        <div className="relative w-full overflow-hidden">
          <AboutDecor />
          <About />
        </div>
        <div className="relative w-full overflow-hidden">
          <ContactDecor />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
