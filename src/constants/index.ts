import tictactoe from "../assets/tic-tac-toe screenshot.png";
import tictactoeWebp from "../assets/tic-tac-toe screenshot.webp";
import todo from "../assets/todo app screenshot.png";
import todoWebp from "../assets/todo app screenshot.webp";
import fylo from "../assets/fylo screenshot.png";
import fyloWebp from "../assets/fylo screenshot.webp";
import anime from "../assets/screenshot-home.png";
import animeWebp from "../assets/screenshot-home.webp";
import connect4 from "../assets/connect-four.png";
import connect4Webp from "../assets/connect-four.webp";

export const projects = [
  {
    id: 1,
    title: "Tic-Tac-Toe Game",
    img: {
      alt: "tic-tac-toe screenshot",
      src: tictactoe,
      webp: tictactoeWebp,
    },
    repo: "https://github.com/AstroDriss/tic-tac-toe-minimax",
    live: "https://tic-tac-toe-minimax-gamma.vercel.app/",
    tech: ["nextjs", "ts", "tailwindcss"],
    desc: "play vs unbeatable AI using the minimax algorithm",
  },
  {
    id: 5,
    title: "Connect four Game",
    img: {
      alt: "connect four game screenshot",
      src: connect4,
      webp: connect4Webp,
    },
    repo: "https://github.com/AstroDriss/connect-four",
    live: "https://connect-four-five-zeta.vercel.app/",
    tech: ["html", "css", "js"],
    desc: "play vs AI or another player.",
  },
  {
    id: 2,
    title: "TODO app",
    img: {
      alt: "todo app screenshot",
      src: todo,
      webp: todoWebp,
    },
    repo: "https://github.com/AstroDriss/Frontend-Mentor-Todo-app",
    live: "https://frontend-mentor-todo-app-sigma.vercel.app/",
    tech: ["reactjs", "ts", "tailwindcss"],
    desc: "with drag and drop functionality for reordering, and dark/light theme toggle",
  },
  {
    id: 4,
    title: "アニメ APP",
    img: {
      alt: "anime app screenshot",
      src: anime,
      webp: animeWebp,
    },
    repo: "https://github.com/AstroDriss/anime-app",
    live: "https://anime-app-sage.vercel.app/",
    tech: ["reactjs", "ts", "tailwindcss", "API"],
    desc: "Using the Jikan API to display information about animes such as characters, episodes, etc...",
  },
  {
    id: 3,
    title: "Fylo dark theme landing page",
    img: {
      alt: "todo app screenshot",
      src: fylo,
      webp: fyloWebp,
    },
    repo: "https://github.com/AstroDriss/Fylo-landing-page-with-dark-theme-and-features-grid",
    live: "https://fylo-landing-page-with-dark-theme-and-features-grid-gamma.vercel.app/",
    tech: ["html", "css"],
    desc: "a common layout  for landing pages with dark theme and features grid.",
  },
];

// export const about = `Passionate web developer based on Morocco who loves learning new skills. working with both front-end and back-end technologies, dedicated to delivering seamless user experiences through clean code.`;
export const about = `Versatile and highly skilled web developer with an array of front-end and back-end experience. Based in Morocco, I am dedicated to expanding my clientele while delivering seamless user experiences with accuracy and precision.`;
