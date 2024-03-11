import {
  css,
  html,
  js,
  nextjs,
  reactjs,
  tailwindcss,
  ts,
  github,
  git,
  mysql,
} from "../assets/icons";

const Skills = () => {
  const skills = [
    { img: reactjs, label: "Reactjs" },
    { img: tailwindcss, label: "TailwindCSS" },
    { img: js, label: "JavaScript" },
    { img: html, label: "HTML" },
    { img: css, label: "CSS" },
    { img: nextjs, label: "Nextjs" },
    { img: ts, label: "TypeScript" },
    { img: git, label: "Git" },
    { img: mysql, label: "MySQL" },
  ];

  return (
    <section className="my-6">
      <h2 className="text-4xl font-display my-8 underline font-semibold">
        Skills
      </h2>
      <ul className="flex flex-wrap gap-4 justify-center">
        {skills.map(({ img, label }, i) => (
          <li
            key={i}
            className="w-20 h-20 rounded-full bg-rose-50 flex justify-center items-center before:border before:border-gray-400 before:absolute relative before:inset-0 before:rounded-full before:-left-1 before:-top-1"
            title={label}
          >
            <span className="sr-only">{label}</span>
            <img src={img.src} alt="" width={30} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
