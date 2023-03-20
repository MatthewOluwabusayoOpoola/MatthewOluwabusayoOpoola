import Link from "next/link";
function ThoughtsContent() {
  return (
    <>
      <main role="main" className="w-full lg:col-span-3">
        <section>
          <div className="p-8 lg:py-12 lg:px-10">
            <div>
              <h1 className="text-black dark:text-white text-2xl md:text-4xl xl:text-8xl font-bold tracking-tighter">
                Me and
                <span className="lg:block">my thoughts</span>
              </h1>
            </div>
            <div className="mt-8 lg:mt-24 text-base dark:text-zinc-500 text-zinc-500 lg:col-span-3 space-y-12">
              <article className="md:grid md:grid-cols-4 md:items-baseline">
                <div className="md:col-span-3 group relative flex flex-col items-start">
                  <h2 className="text-base font-semibold tracking-tight text-black dark:text-white">
                    <Link href="/article/">
                      <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                      <span className="relative z-10">
                        Becoming an Illustrator:
                      </span>
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
                    March 16 , 2023
                  </time>
                  <p className="relative z-10 mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    Like many artists out there, it all began with drawing as a
                    child. I’ve always been creative and have loved telling
                    stories through both visuals and words. I took art
                    classNamees as a kid and loved every second of it! However,
                    when it was time to make a career out of it, I was nervous.
                    I thought pursuing something like graphic design or
                    marketing would fair better in the professional world. I
                    tried the graphic design program at my college, SCAD, but
                    immediately knew it wasn’t for me.
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
                  March 16 , 2023
                </time>
              </article>
              <article className="md:grid md:grid-cols-4 md:items-baseline">
                <div className="md:col-span-3 group relative flex flex-col items-start">
                  <h2 className="text-base font-semibold tracking-tight text-black dark:text-white">
                    <Link href="/article">
                      <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                      <span className="relative z-10">
                        &quot;Don’t be fearful of scaling.&quot; — A chat with
                        agency founder Oleg Davydov
                      </span>
                    </Link>
                  </h2>
                  <time
                    className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm dark:text-zinc-400 text-zinc-500 pl-3.5"
                    datetime="2022-09-02"
                  >
                    <span
                      className="absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                    </span>
                    February 28, 2023
                  </time>
                  <p className="relative z-10 mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    These were questions facing London-based Oleg Davydov three
                    years into running his web design business. It was early
                    2020, and the world was coming to terms with a global
                    pandemic. Strict lockdowns and the rise of remote work
                    skyrocketed the need for web design services. That coupled
                    with an increasing number of leads coming through the Wix
                    Partner Program, Oleg soon found himself burning the candle
                    at both ends to keep up with demand, working 14-hour days,
                    seven days a week, as a one-person company.
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
                  datetime="2022-09-02"
                >
                  May 28, 2022
                </time>
              </article>
              <article className="md:grid md:grid-cols-4 md:items-baseline">
                <div className="md:col-span-3 group relative flex flex-col items-start">
                  <h2 className="text-base font-semibold tracking-tight text-black dark:text-white">
                    <Link href="/article">
                      <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                      <span className="relative z-10">
                        Wine, dine, design: Get inspired by colorful wine
                        branding and packaging
                      </span>
                    </Link>
                  </h2>
                  <time
                    className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm dark:text-zinc-400 text-zinc-500 pl-3.5"
                    datetime="2022-07-14"
                  >
                    <span
                      className="absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                    </span>
                    July 14, 2022
                  </time>
                  <p className="relative z-10 mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    From elegant wine labels to creative packaging ideas, these
                    wine-inspired designs will definitely quench your thirst for
                    inspiration. Enjoy the classNameic maroons, purples, reds,
                    and whites that this collection has to offer, along with
                    some funkier new takes like orange. Whether you’re searching
                    for inspiration for your next wine bottle mockups or are
                    just thirsty for creative ideas, these designs should do the
                    trick. ■
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
                  datetime="2022-07-14"
                >
                  July 14, 2022
                </time>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ThoughtsContent;
