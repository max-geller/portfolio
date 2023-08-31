import About from "./_components/About";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import RecentMusic from "./_components/RecentMusic";
import RecentPhotos from "./_components/RecentPhotos";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>

        <p>
          I would also like to use Three.js to build a drone-style game that
          viewers can use to explore my profile
        </p>
        <p>View day, night, and 90s theme</p>
        <p>Create a component that shows recently played music from Spotify</p>
        <p>
          Create a component that displays a stream of photos from my photo blog
        </p>
        <ul>
          <li>Configure Font Awesome</li>
          <li>Create Personal Logo</li>
          <li>Decide on Font</li>
          <li>Confirm primary/secondary colors</li>
          <li>Consolidate dev and photo to single portfolio page</li>
          <li>Finish Navbar / Responsive Behavior</li>
          <li> Finish footer</li>
        </ul>
      </div>
      <Hero />
      <About />
      <RecentPhotos />
      <RecentMusic />
      <Contact />
    </main>
  );
}
