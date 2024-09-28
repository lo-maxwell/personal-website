'use client'
import { Project } from '@/models/project';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type TransitionStyle = {
	transform: string;
	transition: string;
};

export default function ProjectComponent({ project }: { project: Project }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [transitionStyle, setTransitionStyle] = useState<TransitionStyle | null>(null);
	const [nextImageIndex, setNextImageIndex] = useState<number | null>(null);
	const [direction, setDirection] = useState<'next' | 'prev' | null>(null);

	useEffect(() => {
		if (isTransitioning) {
			const timer = setTimeout(() => {
				setIsTransitioning(false);
				setTransitionStyle(null);
				if (nextImageIndex !== null) {
					setCurrentImageIndex(nextImageIndex);
					setNextImageIndex(null);
				}
				setDirection(null);
			}, 300); // Match this with your transition duration
			return () => clearTimeout(timer);
		}
	}, [isTransitioning, nextImageIndex]);

	const nextImage = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setDirection('next');
		const next = (currentImageIndex + 1) % project.imagePaths.length;
		setNextImageIndex(next);
		setTransitionStyle({ transform: 'translateX(-100%)', transition: 'transform 300ms ease-in-out' });
	};

	const prevImage = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setDirection('prev');
		const prev = (currentImageIndex - 1 + project.imagePaths.length) % project.imagePaths.length;
		setNextImageIndex(prev);
		setTransitionStyle({ transform: 'translateX(100%)', transition: 'transform 300ms ease-in-out' });
	};

	return (
		<div className="relative h-[28rem] rounded-xl overflow-hidden group">
			<div className="relative w-full h-full overflow-hidden">
				<div className="absolute w-full h-full" style={transitionStyle || {}}>
					<div className="absolute top-0 left-0 w-full h-full">
						<Image
							src={project.imagePaths[currentImageIndex]}
							alt={`${project.name} - Current Image`}
							fill
							sizes="100vw"
							style={{ objectFit: 'cover' }}
							className="w-full h-full"
						/>
					</div>
					{nextImageIndex !== null && (
						<div className="absolute top-0 w-full h-full" style={{ left: direction === 'next' ? '100%' : '-100%' }}>
							<Image
								src={project.imagePaths[nextImageIndex]}
								alt={`${project.name} - Next Image`}
								fill
								sizes="100vw"
								style={{ objectFit: 'cover' }}
								className="w-full h-full"
							/>
						</div>
					)}
				</div>
				<div className="absolute left-0 top-0 p-4">
					<div className="inline-block bg-white bg-opacity-80 backdrop-blur-sm p-3 rounded-br-md shadow-md">
						<h3 className="text-lg font-bold">{project.name}</h3>
					</div>
				</div>
				{project.imagePaths.length > 1 && (
					<>
						<button
							onClick={prevImage}
							className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
							aria-label="Previous image"
						>
							<ChevronLeftIcon className="h-6 w-6" />
						</button>
						<button
							onClick={nextImage}
							className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
							aria-label="Next image"
						>
							<ChevronRightIcon className="h-6 w-6" />
						</button>
					</>
				)}
			</div>
			<div className="absolute inset-x-0 bottom-0 p-4">
				<div className="bg-white bg-opacity-80 backdrop-blur-sm p-3 rounded-t-md shadow-md">
					<div 
						dangerouslySetInnerHTML={{ __html: project.description }} 
						className="description-content mb-2 text-sm"
					/>
					<div className="flex flex-wrap gap-1 mb-2">
						{project.technologies.map((tech, index) => (
							<span key={index} className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium">
								{tech}
							</span>
						))}
					</div>
					<div className="flex space-x-2">
						{project.deploymentLink && (
							<a
								href={project.deploymentLink}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs hover:bg-blue-600 transition-colors"
							>
								View Live
							</a>
						)}
						{project.githubLink && (
							<a
								href={project.githubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-gray-800 text-white px-2 py-1 rounded-md text-xs hover:bg-gray-900 transition-colors"
							>
								GitHub
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}