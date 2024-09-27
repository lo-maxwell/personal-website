'use client'
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Correct imports

export default function NavigationHeader() {
	const [isOpen, setIsOpen] = useState(false);
	const [isLargeScreen, setIsLargeScreen] = useState(true);
  
	const toggleMenu = () => setIsOpen(!isOpen);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsLargeScreen(window.innerWidth >= 640); // Smaller breakpoint
		};

		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

	return (
		<nav className="w-full bg-background-alt shadow-sm">
			<div className="max-w-screen-xl mx-auto relative px-4 sm:px-0 py-4">
				<div className="flex justify-between items-center sm:justify-center">
					{/* Navigation content */}
						<div className="flex items-center justify-between w-full sm:w-[600px]"> {/* Adjusted width */}
							{/* Name Button */}
							<div className="flex-shrink-0">
								<button className="text-lg font-bold text-text-alt">Maxwell Lo</button>
							</div>

							{/* Scroll buttons or Hamburger Menu Icon */}
							{isLargeScreen ? (
								<div className="flex items-center space-x-4">
									<button className="text-text-alt hover:text-text-alt">Scroll 1</button>
									<button className="text-text-alt hover:text-text-alt">Scroll 2</button>
									<button className="text-text-alt hover:text-text-alt">Scroll 3</button>
									<button className="text-text-alt hover:text-text-alt">Resume</button>
								</div>
							) : (
								<button onClick={toggleMenu} className="text-text-alt">
									{isOpen ? (
										<XMarkIcon className="h-6 w-6" />
									) : (
										<Bars3Icon className="h-6 w-6" />
									)}
								</button>
							)}
					</div>
				</div>

				{/* Dropdown menu for small screens */}
					{!isLargeScreen && isOpen && (
						<div className="absolute right-0 mt-4 mr-2 bg-[#e0dedc] text-text-alt rounded-lg shadow-lg p-2 w-max">
							<button className="block w-full text-left py-2 px-4 hover:bg-[#d0cecc] whitespace-nowrap">Scroll 1</button>
							<button className="block w-full text-left py-2 px-4 hover:bg-[#d0cecc] whitespace-nowrap">Scroll 2</button>
							<button className="block w-full text-left py-2 px-4 hover:bg-[#d0cecc] whitespace-nowrap">Scroll 3</button>
							<button className="block w-full text-left py-2 px-4 hover:bg-[#d0cecc] whitespace-nowrap">Resume</button>
						</div>
					)}
			</div>
		</nav>
	);
}