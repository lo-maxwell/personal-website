import Project from "@/components/projects/project";
import { Container } from "@chakra-ui/react";
import Image from "next/image";
import Bio from "./bio";
import NavigationHeader from "./navigation";
import Profile from "./profile";
import Projects from "./projects";

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <NavigationHeader/>

      <div className={`w-[600px] mx-auto mt-[10px]`}>
        <Profile/>
        <Bio/>
        <Projects/>

        {/* Main content */}
        <main className="max-w-4xl mx-auto">
          {/* Image space */}
          {/* <div className="mb-12 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/placeholder-image.jpg"
              alt="Your profile"
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </div> */}

          {/* Project bubbles */}
          {/* <h2 className="text-2xl font-bold mb-6">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div
                key={project}
                className="bg-white rounded-full aspect-square flex items-center justify-center p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <p className="text-center font-semibold">Project {project}</p>
              </div>
            ))}
          </div> */}
          
        </main>
      </div>
    </div>
  );
}