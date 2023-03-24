import Link from "next/link";

function Header() {
  return (
    <div className="my-4 pt-6  border-zinc-800">
      <nav>
        <ul className=" inline-flex items-center gap-3" role="list">
          <li className="flex">
            <Link
              className="dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-black inline-flex items-center"
              href="/"
            >
              <span className="text-2xl md:text-3xl xl:text-3xl 2xl:text-3xl font-bold tracking-tighter">
                {" "}
                Home
              </span>
            </Link>
          </li>
          <li className="flex">
            <span className="text-black dark:text-white text-2xl md:text-3xl xl:text-3xl 2xl:text-3xl font-bold tracking-tighter">
              {" "}
              |
            </span>
          </li>
          <li className="flex">
            <Link
              className="dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-black inline-flex items-center"
              href="/about"
            >
              <span className="text-2xl md:text-3xl xl:text-3xl 2xl:text-3xl font-bold tracking-tighter">
                {" "}
                About
              </span>
            </Link>
          </li>

          <li className="flex">
            <span className="text-black dark:text-white text-2xl md:text-3xl xl:text-3xl 2xl:text-3xl font-bold tracking-tighter">
              {" "}
              |
            </span>
          </li>
          <li className="flex">
            <Link
              className="dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-black inline-flex items-center"
              href="/projects"
            >
              <span className="text-2xl md:text-3xl xl:text-3xl 2xl:text-3xl font-bold tracking-tighter">
                {" "}
                Projects
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
