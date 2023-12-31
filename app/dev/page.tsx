import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import GitSummary from "./_components/GitSummary";
import Contact from "../_components/Contact";
import DevInterests from "./_components/DevInterests";
import Hero from "./_components/Hero";
export default function Dev() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
        <Skills />
        <DevInterests />
        <GitSummary />
        <Projects />
        <Contact />{" "}

    </main>
  );
}
