import RecentPhotos from "./_components/carousels/RecentPhotos";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>This is the landing page</h1>
        <p>
          There should be three cards shown: Photography, Development, and
          personal Resume
        </p>
        <p>
          I would also like to use Three.js to build a drone-style game that
          viewers can use to explore my profile
        </p>
        <p>View HTML Verision (90s Throwback)</p>
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
      <RecentPhotos />
    </main>
  );
}
