export const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Projects", link: "#projects" },
	{ name: "Testimonials", link: "#testimonials" },
	{ name: "Contact", link: "#contact" },
];

export const gridItems = [
	{
		id: 1,
		title:
			"Client focus, collaborative spirit, and clear communication - the core pillars of my work ethic",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full object-cover object-center",
		titleClassName: "justify-end",
		img: "/b1.svg",
		spareImg: "",
	},
	{
		id: 2,
		title: "Emergency crisis? Call me first.",
		description: "I'm not afraid of challenging environments",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName:
			"absolute right-2 -bottom-12 md:-bottom-20 blur-[2px] w-auto max-h-full z-10",
		titleClassName: "justify-start",
		img: "/Subject.png",
		spareImg: "/grid.svg",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "/grid.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 4,
		title: " I own the stack for end-to-end development.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b4.svg",
	},

	{
		id: 5,
		title:
			"Currently exploring the magic of SSR rendering technology & Expo.js",
		description: "The Inside Scoop",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 6,
		title: "Let's get in touch!",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

export const projects = [
	{
		id: 1,
		title: "Mini-YT - A Simplified YouTube Clone",
		des: "Built with Expo. This mobile application provides a streamlined video browsing experience with core YouTube-like functionality.",
		img: "/mini-yt.svg",
		iconLists: [
			"/expo.svg",
			"/re.svg",
			"/ts.svg",
			"/eslint.svg",
			"/react-query.svg",
		],
		link: "https://github.com/BartlomiejSadza/mini-yt",
	},
	{
		id: 2,
		title: "AGH Coin - Student Organization Website",
		des: "Website showcases student-driven projects from AGH University, ranging from classic-inspired games to innovative ones.",
		img: "/agh-coin.svg",
		iconLists: [
			"/next.svg",
			"/sass.svg",
			"/ts.svg",
			"/directus.svg",
			"/postgresql.svg",
		],
		link: "https://coin.agh.edu.pl/",
	},
	{
		id: 3,
		title: "Weather and Solar Energy Prediction",
		des: "Application provides weather forecasts for the next 7 days & estimates solar energy production based on weather conditions.",
		img: "/weatherapp.png",
		iconLists: [
			"/next.svg",
			"/ts.svg",
			"/python.svg",
			"/fastapi.svg",
			"/azure.svg",
		],
		link: "https://proud-water-05321801e.5.azurestaticapps.net/",
	},
	{
		id: 4,
		title: "Machine Learning - Hotel Booking",
		des: "This project analyzes hotel booking data to predict booking cancellations using various machine learning models.",
		img: "/machine-learning.svg",
		iconLists: [
			"/python.svg",
			"/NumPy.svg",
			"/pandas.svg",
			"/Matplotlib.svg",
			"/azure.svg",
		],
		link: "https://github.com/BartlomiejSadza/MachineLearning",
	},
];

export const testimonials = [
	{
		quote:
			"“Your application stands out with its clear, readable, and aesthetically pleasing interface, boosted by a creative approach to Dark Mode. Use of TypeScript and Next.js showcases a solid grasp of current industry standards, and employing external libraries for data fetching demonstrates strong backend fundamentals. You got the makings of a promising developer who values clarity and modern solutions.”",
		name: "Justyna Janczur",
		title: "Senior Recruitment Specialist at Codibly",
	},
	{
		quote:
			"“First of all, congratulations, because the result you achieved is really good compared to other solutions we receive. The project has a solid foundation, and details like debounce in the search bar or ESLint indicate a thoughtful approach to implementation. The project structure is clear, and the code itself is pleasant to read. Additionally, during the interview, we noticed that you have solid mathematical foundations, which is a major asset and can translate into a good understanding of more advanced programming concepts.”",
		name: "Agatha Gąsiorowska",
		title: "Business Manager w The Widlarz Group",
	},
	{
		quote:
			"“Bartłomiej was an invaluable asset to our production team at Betard. He quickly established himself as a reliable and highly capable member of the department, tackling a wide range of responsibilities — from developing production schedules, to handling HR tasks and creating detailed spreadsheets. His strong organizational skills and eagerness to learn greatly contributed to a smooth, efficient workflow. I would gladly welcome the opportunity to work with him again in the future.”",
		name: "Sylwester Nowak",
		title: "Chief Production Manager at Betard",
	},
];

export const companies = [
	{
		id: 1,
		name: "Betard",
		img: "/betard.svg",
		nameImg: "/betardName.svg",
	},
	{
		id: 2,
		name: "appwrite",
		img: "/thewidlarz.png",
		nameImg: "/thewidlarzName.svg",
	},
	{
		id: 3,
		name: "HOSTINGER",
		img: "/codibly.png",
		nameImg: "/codiblyName.svg",
	},
];

export const workExperience = [
	{
		id: 1,
		title: "Junior Fullstack Developer",
		desc: "Currently participating in the development of a websites using most often Next.js. AGH Code Industry WebDev-Team.",
		className: "md:col-span-2",
		thumbnail: "/exp4.svg",
	},
	{
		id: 2,
		title: "Front-End Developer",
		desc: "Rebuild the website based on design we made with a team, significantly improving its previous outdated version. UX Berries",
		className: "md:col-span-2",
		thumbnail: "/exp2.svg",
	},
	{
		id: 3,
		title: "UI/UX Designer",
		desc: "I collaborated with a team to create the design for the website, resulting in a significant improvement of user expirience. UX Berries",
		className: "md:col-span-2",
		thumbnail: "/exp3.svg",
	},
	{
		id: 4,
		title: "Assistant to the Chief Production Manager",
		desc: "Managed ERP XL software, Excel spreadsheets, production schedules, HR tasks, and data reporting. Betard Sp. z o.o.",
		className: "md:col-span-2",
		thumbnail: "/exp5.png",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		url: "https://github.com/BartlomiejSadza",
	},
	{
		id: 2,
		img: "/link.svg",
		url: "https://www.linkedin.com/in/bartlomiej-sadza/",
	},
	{
		id: 3,
		img: "/facebook.svg",
		url: "https://www.facebook.com/bartek.sadza.9",
	},
];
