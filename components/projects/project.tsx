export default function Project({projectName}: {projectName: string}) {
	return (
		<div
		key={projectName}
		className="w-[70%] h-[70%] mx-4 my-4 bg-white rounded-3xl aspect-square border-2 border-gray-300 flex items-center justify-center p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
		>
			<p className="text-center font-semibold">{projectName}</p>
		</div>);
}