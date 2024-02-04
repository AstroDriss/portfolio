import Masonry from "react-masonry-css";

import { Globe } from "@phosphor-icons/react";

import { projects } from "../constants";
import {
  ReactOriginal,
  TailwindcssPlain,
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  NextjsOriginal,
  TypescriptOriginal,
  GithubOriginal,
} from "devicons-react";

type DevIconsMap = {
  [key: string]: React.ReactNode;
};
const devIconsMap: DevIconsMap = {
  reactjs: <ReactOriginal />,
  tailwindcss: <TailwindcssPlain />,
  html: <Html5Original />,
  css: <Css3Original />,
  js: <JavascriptOriginal />,
  nextjs: <NextjsOriginal />,
  ts: <TypescriptOriginal />,
};

const breakpointColumns = {
  default: 3,
  700: 2,
  500: 1,
};

const Projects = () => {
  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className={`my-masonry-grid`}
      columnClassName="my-masonry-grid_column"
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative rounded-2xl border border-black before:absolute before:inset-0 before:bg-sky-100 before:pointer-events-none before:-z-10 before:-translate-x-[10px] before:-translate-y-[10px] before:rounded-[inherit]"
        >
          <div className="flex gap-2 absolute top-2 right-1">
            <a
              target="_blank"
              href={project.repo}
              className="bg-white rounded-full"
            >
              <span className="sr-only">visite github repo</span>
              <GithubOriginal size={32} />
            </a>

            <a
              target="_blank"
              href={project.live}
              className="bg-white rounded-full"
            >
              <span className="sr-only">visite the website</span>
              <Globe size={32} />
            </a>
          </div>

          <picture className="rounded-tl-[inherit] rounded-tr-[inherit]">
            {project.img.webp && (
              <source
                className="rounded-tl-[inherit] rounded-tr-[inherit]"
                src={project.img.webp}
                type="image/webp"
              />
            )}
            <img
              className="rounded-tl-[inherit] rounded-tr-[inherit]"
              src={project.img.src}
              alt={project.img.alt}
              loading="lazy"
              decoding="async"
            />
          </picture>

          <div className="p-4">
            <ul className="flex gap-2 items-center mb-1">
              {project.tech.map((item, index) => (
                <li key={index}>
                  {devIconsMap[item] || (
                    <p className="text-yellow-600 bg-yellow-100 px-1 rounded-md">
                      {item}
                    </p>
                  )}
                  <p className="sr-only">{item}</p>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-sky-900 leading-5 text-sm">{project.desc}</p>
          </div>
        </div>
      ))}
    </Masonry>
  );
};

export default Projects;
