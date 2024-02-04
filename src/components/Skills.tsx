import BallCanvas from "./canvas/Ball";
import {
  html,
  css,
  tailwindcss,
  git,
  js,
  mysql,
  nextjs,
  reactjs,
  ts,
} from "../assets/icons";

const Skills = () => {
  const skills = [
    { icon: reactjs, label: "Reactjs" },
    { icon: tailwindcss, label: "TailwindCSS" },
    { icon: js, label: "JavaScript" },
    { icon: nextjs, label: "Nextjs" },
    { icon: ts, label: "TypeScript" },
    { icon: git, label: "Git" },
    { icon: mysql, label: "MySQL" },
    { icon: html, label: "HTML" },
    { icon: css, label: "CSS" },
  ];

  return (
    <section className="my-6">
      <h2 className="text-3xl my-2 font-semibold">Skills</h2>
      <ul className="flex flex-wrap gap-4 justify-center">
        {skills.map(({ icon, label }, i) => (
          <li
            key={i}
            className="w-14 h-14 sm:w-24 sm:h-24 rounded-full flex justify-center items-center "
            title={label}
          >
            <span className="sr-only">{label}</span>
            <BallCanvas icon={icon.src} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
