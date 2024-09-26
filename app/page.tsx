import Bio from "./bio";
import NavigationHeader from "./navigation";
import Profile from "./profile";
import Projects from "./projects";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header - now sticky */}
      <div className="sticky top-0 z-10">
        <NavigationHeader/>
      </div>

      <div className={`max-w-[600px] mx-auto mt-4 px-4 sm:px-6 lg:px-8`}>
        <Profile/>
        <Bio/>
        <Projects/>
      </div>
    </div>
  );
}