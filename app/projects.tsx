import Project from "@/components/projects/project"

export default function Projects() {
	const projects = ["project 1", "project 2", "project 3"]

	return (<>
			<h2 className="text-2xl font-bold mb-6">My Projects</h2>
          	<div className="flex flex-col items-center justify-center">
			{projects.map((project) => (
				<Project key={project} projectName={project}/>
			))}
			</div>
		  </>
	);
}