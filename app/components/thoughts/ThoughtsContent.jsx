import Link from "next/link";
import { Thoughts } from "@/portfolio";
function ThoughtsContent() {
  return (
    <>
      <section>
        <div className="p-8 lg:py-12 lg:px-10">
          <div>
            <h1 className="text-black dark:text-white text-2xl md:text-4xl xl:text-8xl font-bold tracking-tighter">
              Me and
              <span className="lg:block">my thoughts</span>
            </h1>
          </div>
          <div className="mt-8 lg:mt-24 text-base dark:text-zinc-500 text-zinc-500 lg:col-span-3 space-y-12">
            {Thoughts.map((article, i) => {
              return (
                <article
                  className="md:grid md:grid-cols-4 md:items-baseline "
                  key={i}
                >
                  <div className="md:col-span-3 group relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-black dark:text-white">
                      <Link href="/article/">
                        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">{article.title}</span>
                      </Link>
                    </h2>
                    <time
                      className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm dark:text-zinc-400 text-zinc-500 pl-3.5"
                      datetime="2022-09-05"
                    >
                      <span
                        className="absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                      </span>
                      {article.date}
                    </time>
                    <p className="relative z-10 mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                      {article.desc}
                    </p>
                    <div
                      aria-hidden="true"
                      className="relative z-10 mt-4 flex items-center text-sm font-medium text-black transition group-hover:text-sky-500 dark:text-white"
                    >
                      Read article
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="ml-1 h-4 w-4 stroke-current order-last group-hover:translate-x-6 transition"
                      >
                        <path
                          d="M6.75 5.75 9.25 8l-2.5 2.25"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <time
                    className="mt-1 md:block relative z-10 order-first mb-3 flex items-center text-sm dark:text-zinc-400 text-zinc-500"
                    datetime="2022-09-05"
                  >
                    {article.date}
                  </time>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ThoughtsContent;
