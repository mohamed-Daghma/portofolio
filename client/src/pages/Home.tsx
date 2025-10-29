import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="py-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mohammed Daghma, CPI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
