import Art from "./_components/Art";
import FpvCarousel from "./_components/FpvCarousel";
import Gallery from "./_components/Gallery";
import Hero from "./_components/Hero";

export default function Photo() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Gallery />
      <FpvCarousel />
      <Art />
    </main>
  );
}
