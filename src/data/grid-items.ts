import type { GridItem } from '@/types';

export const gridItems: GridItem[] = [
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
    cardType: "tech-stack",
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
      "Currently working with Next.js, Spring Boot, and exploring Kubernetes & Grafana",
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
    cardType: "email-copy",
  },
];
