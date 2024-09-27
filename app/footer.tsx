export default function Footer() {
    return (
        <div className="bg-background-alt">
            <div className="max-w-screen-xl mx-auto relative px-4 sm:px-0 py-4">
                <div className="flex justify-center items-center">
                    <p className="text-text">
                        Designed and Built by{" "}
                        <a
                            href="https://github.com/lo-maxwell"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-accent"
                        >
                            Maxwell Lo
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}