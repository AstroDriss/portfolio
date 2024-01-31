import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineSegment } from "react-icons/md";

const textLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="relative">
      <ul className="hidden sm:flex gap-4">
        {textLinks.map(({ label, href }) => (
          <li key={label}>
            <a className="hover:underline" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button onClick={() => setToggle(!toggle)} className="sm:hidden">
        {toggle ? <IoClose size={28} /> : <MdOutlineSegment size={28} />}
        <span className="sr-only">{toggle ? "close menu" : "open menu"}</span>
      </button>

      <ul
        className={`${
          toggle ? "flex" : "hidden"
        } flex-col sm:hidden absolute gap-2 overflow-hidden right-0 shadow-md border-2 border-white bg-white/70 backdrop-blur-[200px] rounded-xl top-11`}
      >
        {textLinks.map(({ label, href }) => (
          <li key={href}>
            <a className="px-8 py-3 block hover:bg-yellow-50/80" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
