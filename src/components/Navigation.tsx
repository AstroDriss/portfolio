import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineSegment } from "react-icons/md";

const textLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
  { label: "Blog", href: "https://douiri.org", blank: true },
];

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <ul className="hidden sm:flex gap-4">
        {textLinks.map(({ label, href, blank }) => (
          <li key={label}>
            <a
              className={`${
                blank
                  ? "bg-slate-800 hover:bg-slate-700 transition-colors text-white rounded-xl px-4 py-1"
                  : "nav-link"
              }`}
              href={href}
              target={`${blank ? "_blank" : "_self"}`}
            >
              {label}
            </a>
          </li>
        ))}
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
        } flex-col absolute w-full mt-3 col-span-2 sm:hidden gap-2 overflow-hidden right-0 shadow-md border-2 border-white bg-white rounded-xl top-11`}
      >
        {textLinks.map(({ label, href, blank }) => (
          <li key={href}>
            <a
              className={`px-8 py-3 block  ${
                blank && "bg-slate-800 text-white"
              }`}
              href={href}
              target={`${blank ? "_blank" : "_self"}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
