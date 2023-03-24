import Link from "next/link";
function SideBar() {
  return (
    <>
      <aside className="w-full">
        <div className="sticky top-0 rounded-xl w-full px-8 sm:px-16 py-8 lg:py-12 lg:px-10">
          <div>
            <Link href="/" className="text-black dark:text-white">
              {/* <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M6 5h12l3 5l-8.5 9.5a.7.7 0 0 1-1 0L3 10l3-5"></path>
                  <path d="M10 12L8 9.8l.6-1"></path>
                </g>
              </svg> */}
              <h1 className="text-black dark:text-white text-1xl md:text-1xl xl:text-1xl 2xl:text-1xl font-bold tracking-tighter">
                {" <moo />"}
              </h1>
              <h1 className="text-black dark:text-white text-2xl md:text-3xl xl:text-3xl 2xl:text-3xl font-bold tracking-tighter">
                Matthew Oluwabusayo Opoola
              </h1>
            </Link>
          </div>

          <div className="lg:mt-8 max-w-xl">
            <p className="dark:text-zinc-400 text-zinc-500 text-base">
              Every brilliant design starts with an amazing idea, as well as
              hundreds of not-so-amazing ones. To the user’s eye, these rejected
              concepts aren’t at all visible, however, their experience would be
              nowhere near as delightful if mistakes, iterations, and learnings
              didn’t happen during the design process.
            </p>
          </div>
          <div className="mt-4 pt-6 border-t border-zinc-800">
            <ul className="inline-flex items-center gap-3" role="list">
              <li className="p-2 flex border border-zinc-800">
                <Link
                  className="group flex text-sm font-medium dark:text-zinc-400 text-zinc-500 transition hover:text-black dark:hover:text-white "
                  href="https://drive.google.com/file/d/1XYPNtuBMcq8RB2vBYPmCr7ttbmSs3OwN/view?usp=sharing"
                  title="My Resume"
                  target={"_blank"}
                >
                  MyResume
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="group flex text-sm font-medium dark:text-zinc-400 text-zinc-500 transition hover:text-black dark:hover:text-white"
                  href="https://github.com/MatthewOluwabusayoOpoola"
                  title="Github Link"
                  target={"_blank"}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-zinc-400"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                    ></path>
                  </svg>
                  {/* Github */}
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="group flex text-sm font-medium dark:text-zinc-400 text-zinc-500 transition hover:text-black dark:hover:text-white"
                  href="mailto:initoluwa@gmail.com"
                  title="Message Me"
                  target={"_blank"}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-zinc-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                    ></path>
                  </svg>
                  {/* MessageMe */}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
export default SideBar;
