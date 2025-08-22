import LogoLoop from "./LogoLoop";

const imageLogos = [
	{
		src: "https://cdn.worldvectorlogo.com/logos/expo-1.svg",
		alt: "Expo Framework",
		href: "",
	},
	{
		src: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
		alt: "NextJS",
		href: "",
	},
	{
		src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
		alt: "ReactJS",
		href: "",
	},
	{
		src: "https://cdn.worldvectorlogo.com/logos/android-logomark.svg",
		alt: "Android Native",
		href: "",
	},
	{
		src: "https://cdn.worldvectorlogo.com/logos/django.svg",
		alt: "Django",
		href: "",
	},
	{
		src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1-1.svg",
		alt: "MongoDD",
		href: "",
	},
	{
		src: "https://cdn.worldvectorlogo.com/logos/matplotlib-1.svg",
		alt: "matplotlib",
		href: "",
	},
	{
		src: "https://cdn.worldvectorlogo.com/logos/docker-4.svg",
		alt: "Docker",
		href: "",
	},
	{
		src: "https://avatars.githubusercontent.com/u/45563345?s=200&v=4",
		alt: "Silence Framework",
		href: "",
	},
];

function LogoLoopSetUp() {
	return (
		<div
			style={{ height: "40px", position: "relative", overflow: "hidden" }}
		>
			<LogoLoop
				logos={imageLogos}
				speed={120}
				direction="left"
				logoHeight={32}
				gap={40}
				pauseOnHover
				scaleOnHover
				fadeOut
				fadeOutColor="#ffffff"
				ariaLabel="Technology partners"
			/>
		</div>
	);
}

export default LogoLoopSetUp;
