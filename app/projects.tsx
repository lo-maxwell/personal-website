import ProjectComponent from "@/components/projects/project"
import { Project } from "@/models/project"

export default function Projects() {
	const projects: Project[] = [
		{
			name: "Garden Simulator",
			description: "A browser-based farming sim. Plant seeds, harvest crops, and build an empire of lawn flamingos.",
			deploymentLink: "https://react-virtual-garden.vercel.app",
			githubLink: "https://github.com/lo-maxwell/react-virtual-garden",
			imagePaths: ["/images/psyduck.jpg", "/images/usagyuuun.gif"],
			technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL"],
			startDate: null,
			endDate: null
		},
		{
			name: "Minesweeper",
			description: "A recreation of the classic game Minesweeper built with React and Next.js.",
			deploymentLink: "https://minesweeper-boom.vercel.app/",
			githubLink: "https://github.com/lo-maxwell/react-minesweeper",
			imagePaths: ["/images/psyduck.jpg"],
			technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
			startDate: null,
			endDate: null
		},
		{
			name: "Mastermind",
			description: "A recreation of the board game Mastermind built with React and Next.js.",
			deploymentLink: "https://mastermind-bubbly.vercel.app/",
			githubLink: "https://github.com/lo-maxwell/react-mastermind",
			imagePaths: ["/images/psyduck.jpg"],
			technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
			startDate: null,
			endDate: null
		},
		{
			name: "Pangrams Word Game",
			description: "An Android app inspired by the New York Times <a href='https://www.nytimes.com/puzzles/spelling-bee' target='_blank' rel='noopener noreferrer'>Spelling Bee</a>.",
			deploymentLink: null,
			githubLink: "https://github.com/lo-maxwell/PangramsGame",
			imagePaths: ["/images/psyduck.jpg"],
			technologies: ["Java", "Android"],
			startDate: null,
			endDate: null
		},
		// Add more projects as needed
	];

	return (
		<div className="max-w-2xl mx-auto px-4">
		  <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
		  <div className="space-y-10">
			{projects.map((project) => (
			  <ProjectComponent key={project.name} project={project} />
			))}
		  </div>
		</div>
	  );
}