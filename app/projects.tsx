import ProjectComponent from "@/components/projects/project"
import { Project } from "@/models/project"

export default function Projects() {
	const projects: Project[] = [
		{
			name: "Garden Simulator",
			description: "A browser-based farming sim. Plant seeds, harvest crops, and build an empire of lawn flamingos.",
			deploymentLink: "https://react-virtual-garden.vercel.app",
			githubLink: "https://github.com/lo-maxwell/react-virtual-garden",
			imagePaths: ["/images/virtual-garden/1.png", "/images/virtual-garden/2.png", "/images/virtual-garden/3.png"],
			technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL"],
			startDate: null,
			endDate: null
		},
		{
			name: "Minesweeper",
			description: "A recreation of the classic game Minesweeper built with React and Next.js. Features customizable grid sizes and a timer.",
			deploymentLink: "https://minesweeper-boom.vercel.app/",
			githubLink: "https://github.com/lo-maxwell/react-minesweeper",
			imagePaths: ["/images/minesweeper/1.png", "/images/minesweeper/2.png"],
			technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
			startDate: null,
			endDate: null
		},
		{
			name: "Mastermind",
			description: "A recreation of the board game Mastermind built with React and Next.js. Features customizable difficulty and a easy-to-use interface.",
			deploymentLink: "https://mastermind-bubbly.vercel.app/",
			githubLink: "https://github.com/lo-maxwell/react-mastermind",
			imagePaths: ["/images/mastermind/1.png", "/images/mastermind/2.png"],
			technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
			startDate: null,
			endDate: null
		},
		{
			name: "Pangrams Word Game",
			description: "An Android app inspired by the New York Times <a href='https://www.nytimes.com/puzzles/spelling-bee' target='_blank' rel='noopener noreferrer'>Spelling Bee</a>. Features procedurally generated puzzles, local score tracking, and an achievement system.",
			deploymentLink: null,
			githubLink: "https://github.com/lo-maxwell/PangramsGame",
			imagePaths: ["/images/pangrams/1.jpg", "/images/pangrams/2.jpg", "/images/pangrams/3.jpg"],
			technologies: ["Java", "Android"],
			startDate: null,
			endDate: null
		},
		// Add more projects as needed
	];

	return (
		<>
			<h2 className="text-3xl font-bold mb-8 text-center border-b-4 border-text-border inline-block mx-auto">My Projects</h2>
			<div className="max-w-2xl mx-auto px-4">
			<div className="space-y-10">
				{projects.map((project) => (
				<ProjectComponent key={project.name} project={project} />
				))}
			</div>
			</div>
		</>
	  );
}