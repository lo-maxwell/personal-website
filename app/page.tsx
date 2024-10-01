import Bio from "./bio";
import Footer from "./footer";
import NavigationHeader from "./navigation";
import Profile from "./profile";
import Projects from "./projects";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-background text-text">
      <div className="sticky top-0 z-10">
        <NavigationHeader/>
      </div>

      <div className={`max-w-[600px] mx-auto my-4 px-4 sm:px-6 lg:px-8`}>
        <section id="profile" className="mb-8">
          <Profile/>
        </section>
        
        <section id="bio" className="mb-8">
          <Bio/>
        </section>
        
        <section id="projects" className="mb-8">
          <Projects/>
        </section>
      </div>
      <Footer/>
    </div>
  );
}