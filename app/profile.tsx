
import Image from "next/image";
export default function Profile() {
	return (
		<>
		<div className="flex flex-col sm:flex-row items-center mx-auto justify-between sm:space-x-8">
			<header className="mb-6 sm:mb-12 text-center sm:text-left">
				<h1 className="text-4xl font-bold">Maxwell Lo</h1>
				<p className="text-xl mb-2">{`Web Developer & Designer`}</p>
				<div className="flex items-center justify-between space-x-4">
				<a
					href="https://www.linkedin.com/in/yourprofile"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:text-blue-700"
				>
					LinkedIn
				</a>
				<a
					href="https://www.instagram.com/yourprofile"
					target="_blank"
					rel="noopener noreferrer"
					className="text-pink-500 hover:text-pink-700"
				>
					Instagram
				</a>
				<a
					href="https://twitter.com/yourprofile"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-400 hover:text-blue-600"
				>
					Twitter
				</a>
				<a
					href="https://github.com/yourprofile"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-800 hover:text-gray-900"
				>
					GitHub
				</a>
				</div>
			</header>
			
			<div className="mb-6 sm:mb-12 bg-gray-100 w-[100px] h-[100px] rounded-full border-4 border-gray-500 overflow-hidden flex-shrink-0">
				<Image
				src="/images/psyduck.jpg"
				alt="icon"
				width={100}
				height={100}
				className="w-full h-full object-cover"
				/>
			</div>
			</div>

		</>
	);
}