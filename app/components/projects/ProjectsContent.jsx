import { projects } from "../../portfolio.js";
import Link from "next/link.js";
import Image from "next/image.js";
import wallpaper from "../../public/images/sixteen.webp";
function ProjectsContent() {
  return (
    <main role="main" className="w-full lg:col-span-3">
      <section>
        <div className="p-8 lg:py-12 lg:px-10">
          <div>
            <h1 className="text-black dark:text-white text-2xl md:text-4xl xl:text-9xl font-bold tracking-tighter">
              My most
              <span className="lg:block">recent work</span>
            </h1>
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mt-12"
          >
            {projects.map((data, i) => {
              return (
                <li
                  className="group relative flex flex-col items-start"
                  key={i}
                >
                  <div className="relative z-10 flex items-center justify-center rounded-full bg-white dark:bg-black">
                    <Image
                      alt=""
                      src={wallpaper}
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="future"
                      className="h-8 w-8 rounded-full"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                    <h2 className="ml-3 text-base font-semibold text-black dark:text-white">
                      <Link href={data.link}>
                        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">{data.title}</span>
                      </Link>
                    </h2>
                  </div>
                  <p className="relative z-10 mt-6 text-sm text-zinc-500 dark:text-zinc-400">
                    {data.desc}
                  </p>
                  <br />
                  <ul className="inline-flex items-center gap-3" role="list">
                    {data.stack.map((stack, i) => {
                      return (
                        <li className="flex" key={i}>
                          <Link
                            className="group flex text-sm font-medium dark:text-white "
                            href="#"
                            title="My Resume"
                          >
                            {stack}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="relative z-10 mt-6 flex text-sm font-medium text-black transition group-hover:text-sky-500 dark:text-white items-center">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="ml-1 h-4 w-4 stroke-current flex-none order-last group-hover:translate-x-6 transition"
                    >
                      <path
                        d="M6.75 5.75 9.25 8l-2.5 2.25"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>

                    <span className="mr-2">
                      <Link href={data.github}>Check It Out</Link>
                    </span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ProjectsContent;
