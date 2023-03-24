import { projects } from "../../portfolio.js";
import Link from "next/link.js";
import Image from "next/image.js";
import wallpaper from "../../public/images/sixteen.webp";
function ProjectsContent() {
  return (
    <section>
      <div className="p-8 lg:py-12 lg:px-10">
        <div>
          <h1 className="text-black dark:text-white text-2xl md:text-3xl xl:text-3xl font-bold tracking-tighter">
            My most recent works
          </h1>
        </div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2 mt-12"
        >
          {projects.map((data, i) => {
            return (
              <li className="relative flex flex-col items-start" key={i}>
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
                    <Link href={data.link} target="_blank">
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
                      <li
                        className="group flex text-sm font-medium dark:text-white"
                        key={i}
                      >
                        {stack}
                      </li>
                    );
                  })}
                </ul>
                <br />
                <ul className="inline-flex items-center gap-3" role="list">
                  <li className="flex">
                    <Link href={data.github} target="_blank">
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
                    </Link>
                  </li>

                  <li className="flex flex text-sm font-medium dark:text-white">
                    |
                  </li>
                  <li className="flex">
                    <Link
                      href={data.link}
                      target="_blank"
                      className="group flex text-sm font-medium dark:text-white"
                    >
                      Check It Out
                    </Link>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ProjectsContent;
