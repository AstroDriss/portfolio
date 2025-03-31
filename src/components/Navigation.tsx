const textLinks: { label: string; href: string }[] = [
  { label: "About", href: "/#" },
  { label: "projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const BlogLogo = () => (
  <svg
    id="Layer_2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 886.74 579.75"
    aria-hidden="true"
    width="20"
    className="inline"
    fill="currentColor"
  >
    <path
      className="cls-2"
      d="m259.8,106.3c16.61,16.61,16.61,43.54,0,60.15l-46.68,46.67-46.67,46.67c-16.61,16.61-43.54,16.61-60.15,0l-46.67-46.67-46.67-46.67c-16.61-16.61-16.61-43.54,0-60.15l46.67-46.67L106.32,12.95c16.61-16.61,43.54-16.6,60.15,0l93.34,93.34Z"
    ></path>
    <path
      className="cls-1"
      d="m873.79,259.79c16.61,16.61,16.61,43.54,0,60.15l-46.68,46.69-200.16,200.16c-16.61,16.61-43.54,16.61-60.15,0l-16.6-16.6c-16.62-16.61-16.62-43.55,0-60.16l46.68-46.67,123.41-123.41c16.61-16.61,16.61-43.54,0-60.15l-46.67-46.67-46.69-46.69c-16.61-16.61-43.54-16.61-60.15,0l-123.41,123.41-76.74,76.76-76.74,76.74-76.76,76.74-46.67,46.67c-16.61,16.61-43.54,16.61-60.15,0l-16.59-16.59c-16.61-16.61-16.61-43.54,0-60.15l46.67-46.67,76.76-76.74,76.74-76.76,76.74-76.74,153.49-153.49,46.69-46.68c16.61-16.61,43.54-16.6,60.15,0l246.84,246.84Z"
    ></path>
  </svg>
);

const Navigation = () => {
  return (
    <nav className="flex items-center gap-5">
      <ul className="hidden sm:flex gap-10 items-center">
        {textLinks.map(({ label, href }) => (
          <li key={label}>
            <a className={"nav-link"} href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        className="flex items-center bg-black text-Background gap-2 hover:brightness-110 transition-all py-2 px-8 rounded-full"
        href="https://douiri.org"
        target="_blank"
      >
        <BlogLogo />
        Blog
      </a>
    </nav>
  );
};

export default Navigation;
