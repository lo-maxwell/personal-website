'use client'
import { useState, useEffect, useRef } from 'react';
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

	const headerRef = useRef<HTMLDivElement>(null);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element && headerRef.current) {
			const headerHeight = headerRef.current.offsetHeight;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 16; // Reduced offset to 16px

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
		setIsOpen(false); // Close the menu after clicking (for mobile)
	};

	return (
		<nav ref={headerRef} className="w-full bg-background-alt shadow-sm">
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
										<button onClick={() => scrollToSection('profile')} className="text-text-alt hover:text-text-alt">Profile</button>
										<button onClick={() => scrollToSection('bio')} className="text-text-alt hover:text-text-alt">Bio</button>
										<button onClick={() => scrollToSection('projects')} className="text-text-alt hover:text-text-alt">Projects</button>
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
							<button onClick={() => scrollToSection('profile')} className="block w-full text-left py-2 px-4 hover:bg-[#d0cecc] whitespace-nowrap">Profile</button>
							<button onClick={() => scrollToSection('bio')} className="block w-full text-left py-2 px-4 hover:bg-[#d0cecc] whitespace-nowrap">Bio</button>
							<button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 px-4 hover:bg-[#d0cecc] whitespace-nowrap">Projects</button>
							<button className="block w-full text-left py-2 px-4 hover:bg-[#d0cecc] whitespace-nowrap">Resume</button>
						</div>
					)}
			</div>
		</nav>
	);
}