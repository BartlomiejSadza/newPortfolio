import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Mini-YT - A Simplified YouTube Clone",
    des: "Built with Expo. This mobile application provides a streamlined video browsing experience with core YouTube-like functionality.",
    img: "/mini-yt.svg",
    iconLists: [
      "/expo.svg",
      "/re.svg",
      "/ts.svg",
      "/ESLint.svg",
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
      "/PostgreSQL.svg",
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
      "/FastAPI.svg",
      "/Azure.svg",
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
      "/Azure.svg",
    ],
    link: "https://github.com/BartlomiejSadza/MachineLearning",
  },
];
