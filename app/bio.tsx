export default function Bio() {
	return (
		<>
		<div className="mb-6">
			<h1 className="text-2xl font-bold border-b-4 border-text-border inline-block mb-3">Bio</h1>
			<div className={`w-full hypens-auto break-words overflow-wrap`}>
			{`I'm a software engineer who loves building things, from scalable backends and webapps to games and interactive projects. Recently I've been working on a fullstack virtual garden simulator using React, Next.js, and AWS. I’m always excited to take on new challenges and keep learning along the way.`}
			</div>
			<div className={`mt-4 w-full hypens-auto break-words overflow-wrap`}>
			{`In my free time, I like baking and cooking, roguelike video games, and a coop board game called Spirit Island.`}
			</div>
			<div className={`mt-4 w-full hypens-auto break-words overflow-wrap`}>
			{`Feel free to get in touch, whether about new opportunities or just to say hi!`}
			</div>
		</div>
		</>
	);
}