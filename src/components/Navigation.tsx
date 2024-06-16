import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineSegment } from "react-icons/md";

const textLinks: { label: string; href: string }[] = [
  { label: "About", href: "/#" },
  { label: "Work", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const BlogLogo = () => (
  <svg
    id="Layer_2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 886.74 579.75"
    aria-hidden="true"
    width="30"
    className="inline"
  >
    <path
      class="cls-2"
      d="m259.8,106.3c16.61,16.61,16.61,43.54,0,60.15l-46.68,46.67-46.67,46.67c-16.61,16.61-43.54,16.61-60.15,0l-46.67-46.67-46.67-46.67c-16.61-16.61-16.61-43.54,0-60.15l46.67-46.67L106.32,12.95c16.61-16.61,43.54-16.6,60.15,0l93.34,93.34Z"
    ></path>
    <path
      class="cls-1"
      d="m873.79,259.79c16.61,16.61,16.61,43.54,0,60.15l-46.68,46.69-200.16,200.16c-16.61,16.61-43.54,16.61-60.15,0l-16.6-16.6c-16.62-16.61-16.62-43.55,0-60.16l46.68-46.67,123.41-123.41c16.61-16.61,16.61-43.54,0-60.15l-46.67-46.67-46.69-46.69c-16.61-16.61-43.54-16.61-60.15,0l-123.41,123.41-76.74,76.76-76.74,76.74-76.76,76.74-46.67,46.67c-16.61,16.61-43.54,16.61-60.15,0l-16.59-16.59c-16.61-16.61-16.61-43.54,0-60.15l46.67-46.67,76.76-76.74,76.74-76.76,76.74-76.74,153.49-153.49,46.69-46.68c16.61-16.61,43.54-16.6,60.15,0l246.84,246.84Z"
    ></path>
  </svg>
);

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <ul className="hidden sm:flex gap-4 items-center">
        {textLinks.map(({ label, href, blank }) => (
          <li key={label}>
            <a className={"nav-link"} href={href}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            class="flex items-center gap-1 bg-gradient-to-l from-[#5f9aff] to-[#03eeaa] hover:brightness-110 transition-all py-1 px-4 rounded-xl"
            href="https://douiri.org"
            target="_blank"
          >
            <BlogLogo />
            Blog
          </a>
        </li>
      </ul>

      <button
        aria-expanded={toggle}
        aria-label={toggle ? "close menu" : "open menu"}
        onClick={() => setToggle(!toggle)}
        className="sm:hidden flex flex-col gap-[6px] w-8 items-end"
      >
        <span className="w-full h-[3px] rounded-md bg-black"></span>
        <span className="w-full h-[3px] rounded-md bg-black"></span>
        <span className="w-full h-[3px] rounded-md bg-black"></span>
      </button>
      <ul
        className={`${
          toggle ? "block" : "hidden"
        } flex-col mobile-nav absolute w-full mt-3 col-span-2 sm:hidden gap-2 overflow-hidden right-0 shadow-md border-2 border-white bg-white rounded-xl top-11`}
      >
        {textLinks.map(({ label, href, blank }) => (
          <li key={href}>
            <a className={`px-8 py-3 block text-black`} href={href}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            class="flex items-center gap-4 bg-gradient-to-l from-[#5f9aff] to-[#03eeaa] hover:brightness-110 px-8 py-3 rounded-xl"
            href="https://douiri.org"
            target="_blank"
          >
            <BlogLogo />
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
