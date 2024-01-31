import {
  ReactOriginal,
  TailwindcssPlain,
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  NextjsOriginal,
  TypescriptOriginal,
  GithubOriginal,
  GitOriginal,
  MysqlOriginal,
} from "devicons-react";

const Skills = () => {
  const skills = [
    { Tag: ReactOriginal, label: "Reactjs" },
    { Tag: TailwindcssPlain, label: "TailwindCSS" },
    { Tag: JavascriptOriginal, label: "JavaScript" },
    { Tag: Html5Original, label: "HTML" },
    { Tag: Css3Original, label: "CSS" },
    { Tag: NextjsOriginal, label: "Nextjs" },
    { Tag: TypescriptOriginal, label: "TypeScript" },
    { Tag: GithubOriginal, label: "Github" },
    { Tag: GitOriginal, label: "Git" },
    { Tag: MysqlOriginal, label: "MySQL" },
  ];
  return (
    <section className="my-6">
      <h2 className="text-3xl my-2 font-semibold">Skills</h2>
      <ul className="flex flex-wrap gap-4 justify-center">
        {skills.map(({ Tag, label }, i) => (
          <li
            key={i}
            className="w-20 h-20 rounded-full bg-rose-50 flex justify-center items-center before:border before:absolute relative before:inset-0 before:rounded-full before:-left-1 before:-top-1"
          >
            <Tag size={30} />
            <span className="sr-only">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
