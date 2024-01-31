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
              <svg width={32} height={32} viewBox="0 0 255 255" stroke="black">
                <g stroke-linecap="round" stroke-linejoin="round">
                  <path
                    fill="none"
                    stroke-width="14.7"
                    d="M55.7 167.2c13.9 1 21.3 13.1 22.2 14.6 4.2 7.2 10.4 9.6 18.3 7.1l1.1-3.4a60.3 60.3 0 0 1-25.8-11.9c-12-10.1-18-25.6-18-46.3"
                  />
                  <path
                    fill="none"
                    stroke-width="16"
                    d="M61.4 205.1a24.5 24.5 0 0 1-3-6.1c-3.2-7.9-7.1-10.6-7.8-11.1l-1-.6c-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.7 46.7 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4 0 42.6-25.8 54.7-43.6 58.7 1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3"
                  />
                  <path
                    fill="none"
                    stroke-width="16"
                    d="M160.9 185.7c1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3A98.6 98.6 0 1 0 61.4 205c-1.4-2.1-11.3-17.5-11.8-17.8-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.4 46.4 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4.1 42.6-25.8 54.7-43.6 58.6z"
                  />
                  <path
                    fill="none"
                    stroke-width="18.7"
                    d="m170.1 203.3 17.3-12 17.2-18.7 9.5-26.6v-27.9l-9.5-27.5"
                  />
                  <path
                    fill="none"
                    stroke-width="22.7"
                    d="m92.1 57.3 23.3-4.6 18.7-1.4 29.3 5.4m-110 32.6-8 16-4 21.4.6 20.3 3.4 13"
                  />
                  <path
                    fill="none"
                    stroke-width="13.3"
                    d="M28.8 133a100 100 0 0 0 66.9 94.4v-8.7c-22.4 1.8-33-11.5-35.6-19.8-3.4-8.6-7.8-11.4-8.5-11.8"
                  />
                </g>
              </svg>
            </a>

            <a
              target="_blank"
              href={project.live}
              className="bg-white rounded-full"
            >
              <Globe size={32} />
            </a>
          </div>

          <img
            className="rounded-tl-[inherit] rounded-tr-[inherit]"
            src={project.img.src}
            alt={project.img.alt}
          />

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
