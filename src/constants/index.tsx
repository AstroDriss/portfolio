import tictactoe from "../assets/tic-tac-toe screenshot.png";
import todo from "../assets/todo app screenshot.png";
import todoWebp from "../assets/todo app screenshot.webp";
import fylo from "../assets/fylo screenshot.png";
import fyloWebp from "../assets/fylo screenshot.webp";
import anime from "../assets/screenshot-home.png";
import animeWebp from "../assets/screenshot-home.webp";

export const projects = [
  {
    id: 1,
    title: "Tic-Tac-Toe Game",
    img: {
      alt: "tic-tac-toe screenshot",
      src: tictactoe.src,
    },
    repo: "https://github.com/AstroDriss/tic-tac-toe-minimax",
    live: "https://tic-tac-toe-minimax-gamma.vercel.app/",
    tech: ["nextjs", "ts", "tailwindcss"],
    desc: "using the minimax algorithme",
  },
  {
    id: 2,
    title: "TODO app",
    img: {
      alt: "todo app screenshot",
      src: todo.src,
      webp: todoWebp.src,
    },
    repo: "https://github.com/AstroDriss/Frontend-Mentor-Todo-app",
    live: "https://frontend-mentor-todo-app-sigma.vercel.app/",
    tech: ["reactjs", "ts", "tailwindcss"],
    desc: "with drag and drop functionality for reordering and theme toggle",
  },
  {
    id: 3,
    title: "Fylo dark theme landing page",
    img: {
      alt: "todo app screenshot",
      src: fylo.src,
      webp: fyloWebp.src,
    },
    repo: "https://github.com/AstroDriss/Fylo-landing-page-with-dark-theme-and-features-grid",
    live: "https://fylo-landing-page-with-dark-theme-and-features-grid-gamma.vercel.app/",
    tech: ["html", "css"],
    desc: "a common layout  for landing pages with dark theme and features grid.",
  },
  {
    id: 4,
    title: "アニメ APP",
    img: {
      alt: "anime app screenshot",
      src: anime.src,
      webp: animeWebp.src,
    },
    repo: "https://github.com/AstroDriss/anime-app",
    live: "https://anime-app-sage.vercel.app/",
    tech: ["reactjs", "ts", "tailwindcss", "API"],
    desc: "Using the Jikan API to display information about animes such as characters, episodes, etc...",
  },
];

export const about = `Passionate web developer based on Morocco who loves learning new skills. working with both front-end and back-end technologies, dedicated to delivering seamless user experiences through clean code.`;
