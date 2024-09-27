import ProjectComponent from "@/components/projects/project"
import { Project } from "@/models/project"

export default function Projects() {
	const projects: Project[] = [
		new Project(
			"Project 1",
			"A brief description of Project 1. This project showcases the use of React, TypeScript, and Tailwind CSS to create a responsive web application.",
			"https://project1.example.com",
			"https://github.com/yourusername/project1",
			"/images/project1.jpg",
			["React", "TypeScript", "Tailwind CSS"],
			new Date("2023-01-01"),
			new Date("2023-03-31")
		),
		new Project(
			"Project 2",
			"A brief description of Project 2. This project demonstrates the implementation of a full-stack application using Next.js, Node.js, and MongoDB.",
			null,
			"https://github.com/yourusername/project2",
			"/images/project2.jpg",
			["Next.js", "Node.js", "MongoDB"],
			new Date("2023-04-01"),
			null
		),
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