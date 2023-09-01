import About from "./_components/About";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import ParticlesComponent from "./_components/Particles";
import RecentMusic from "./_components/RecentMusic";
import RecentPhotos from "./_components/RecentPhotos";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      <ParticlesComponent />
      <Hero />
      <About />
      <RecentPhotos />
      <RecentMusic />
      <Contact />
    </main>
  );
}
