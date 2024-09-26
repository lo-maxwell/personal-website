
export default function NavigationHeader() {

	return (
		<>
		<div className={`flex items-end min-w-[100%]`}>
      		<div className="w-[15%]"></div>
			<div className={`flex justify-between items-center w-[70%]`}>
				<div className={`w-[50%]`}>
					<button>Maxwell Lo</button>
				</div>
				<div className={`flex justify-end items-center w-[50%]`}>
					<button className={`mx-4`}>Scroll</button>
					<button className={`mx-4`}>Scroll</button>
					<button className={`mx-4`}>Scroll</button>
					<button className={`mx-4`}>Scroll</button>
				</div>
			</div>
      		<div className="w-[15%]"></div>
		</div>
		</>
	);
}