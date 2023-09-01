import Bio from "./_components/Bio";
import Education from "./_components/Education";
import Experience from "./_components/Experience";
import Hero from "./_components/Hero";

export default function Resume() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>Resume</p>
      </div>
      <Hero />
      <Bio />
      <Education />
      <Experience />
    </main>
  );
}
