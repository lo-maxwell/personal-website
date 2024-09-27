import { Project } from '@/models/project';
import Image from 'next/image';

export default function ProjectComponent({ project }: { project: Project }) {
	return (
		<div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
			<Image
				src={project.imagePath}
				alt={project.name}
				width={640}
				height={320}
				className="w-full h-48 object-cover"
			/>
			<div className="p-5">
				<h3 className="text-xl font-bold mb-2">{project.name}</h3>
				<p className="text-gray-600 text-sm mb-3">{project.description}</p>
				{project.startDate && (
					<p className="text-gray-600 text-sm mb-3">
						{project.startDate.toLocaleDateString()} - {project.endDate ? project.endDate.toLocaleDateString() : 'Present'}
					</p>
				)}
				<div className="flex flex-wrap gap-2 mb-3">
					{project.technologies.map((tech, index) => (
						<span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
							{tech}
						</span>
					))}
				</div>
				<div className="flex space-x-3">
					{project.deploymentLink && (
						<a
							href={project.deploymentLink}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors"
						>
							View Live
						</a>
					)}
					{project.githubLink && (
						<a
							href={project.githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-900 transition-colors"
						>
							GitHub
						</a>
					)}
				</div>
			</div>
		</div>
	);
}