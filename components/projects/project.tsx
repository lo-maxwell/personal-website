'use client'
import { Project } from '@/models/project';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function ProjectComponent({ project }: { project: Project }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [imageStyle, setImageStyle] = useState({});
	const imageRef = useRef<HTMLImageElement>(null);
	const [fadeIn, setFadeIn] = useState(true);

	useEffect(() => {
		const checkImageDimensions = () => {
			if (imageRef.current) {
				setImageStyle({ objectFit: 'cover', objectPosition: 'center' });
			}
		};

		checkImageDimensions();
		window.addEventListener('resize', checkImageDimensions);

		return () => window.removeEventListener('resize', checkImageDimensions);
	}, [currentImageIndex]);

	const nextImage = () => {
		setFadeIn(false);
		setTimeout(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.imagePaths.length);
			setFadeIn(true);
		}, 300);
	};

	const prevImage = () => {
		setFadeIn(false);
		setTimeout(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.imagePaths.length) % project.imagePaths.length);
			setFadeIn(true);
		}, 300);
	};

	return (
		<div className="relative h-[28rem] rounded-xl overflow-hidden group">
			<div className="relative w-full h-full overflow-hidden">
				<div className="absolute top-0 left-1/2 -translate-x-1/2 h-full">
					<Image
						ref={imageRef}
						src={project.imagePaths[currentImageIndex]}
						alt={`${project.name} - Current Image`}
						width={1920}
						height={1080}
						quality={95}
						style={imageStyle}
						className={`h-full w-auto max-w-none transition-opacity duration-300 ${
							fadeIn ? 'opacity-100' : 'opacity-0'
						}`}
						onLoad={() => {
							if (imageRef.current) {
								setImageStyle({ objectFit: 'cover', objectPosition: 'center' });
							}
						}}
					/>
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
							className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
							aria-label="Previous image"
						>
							<ChevronLeftIcon className="h-6 w-6" />
						</button>
						<button
							onClick={nextImage}
							className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
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