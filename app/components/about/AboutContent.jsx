import { aboutMe } from "@/portfolio";
import Link from "next/link";
function AboutContent() {
  return (
    <>
      <main role="main" className="w-full lg:col-span-3">
        <section>
          <div className="p-8 lg:py-12 lg:px-10">
            <div>
              <h1 className="text-black dark:text-white text-2xl md:text-3xl xl:text-3xl font-bold tracking-tighter">
                About
                <span className="lg:block">me</span>
              </h1>
            </div>
            <div className="mt-8 lg:mt-24 text-base dark:text-zinc-500 text-zinc-500 lg:col-span-3 space-y-12">
              {aboutMe.map((data, i) => {
                return (
                  <article className="md:grid md:grid-cols-4" key={i}>
                    <div className="md:col-span-3">
                      <div className="text-sm text-zinc-600 dark:text-zinc-500 space-y-6">
                        <p>{data.desc}</p>
                        <p>{data.desc2}</p>
                        <p>{data.desc3}</p>
                        <p>{data.desc4}</p>

                        <h2 className="text-black dark:text-white text-2xl md:text-4xl xl:text-8xl font-bold tracking-tighter">
                          My Current Stack
                        </h2>
                        <ul>
                          {data.stack.map((stack, i) => {
                            return <li key={i}>{stack}</li>;
                          })}
                        </ul>
                        <h2 className="text-black dark:text-white text-2xl md:text-3xl xl:text-3xl font-bold tracking-tighter">
                          Education
                        </h2>
                        {data.education.map((education, i) => {
                          return (
                            <div
                              className="mt-8 lg:mt-24 text-base dark:text-zinc-500 text-zinc-500 lg:col-span-3 space-y-12"
                              key={i}
                            >
                              <div className="md:grid md:grid-cols-4 md:items-baseline">
                                <div className="md:col-span-3 group relative flex flex-col items-start">
                                  <h2 className="text-base font-semibold tracking-tight text-black dark:text-white">
                                    <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                    <span className="relative z-10">
                                      {education.name}
                                    </span>
                                  </h2>
                                  <p className="relative z-10  text-sm text-zinc-500 dark:text-zinc-400">
                                    {education.course}
                                  </p>
                                  <p className="relative z-10  text-sm text-zinc-500 dark:text-zinc-400">
                                    {education.grade}
                                  </p>
                                </div>
                                <time
                                  className="mt-1 md:block relative z-10 order-first mb-3 flex items-center text-sm dark:text-zinc-400 text-zinc-500"
                                  dateTime="2022-09-05"
                                >
                                  {education.date}
                                </time>
                              </div>
                            </div>
                          );
                        })}

                        <h2 className="text-black dark:text-white text-2xl md:text-3xl xl:text-3xl font-bold tracking-tighter">
                          Certifications
                        </h2>
                        {data.certifications.map((certifications, i) => {
                          return (
                            <div
                              className="mt-8 lg:mt-24 text-base dark:text-zinc-500 text-zinc-500 lg:col-span-3 space-y-12"
                              key={i}
                            >
                              <div className="md:grid md:grid-cols-4 md:items-baseline">
                                <div className="md:col-span-3 group relative flex flex-col items-start">
                                  <h2 className="text-base font-semibold tracking-tight text-black dark:text-white">
                                    <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                    <span className="relative z-10">
                                      {certifications.name}
                                    </span>
                                  </h2>
                                  <p className="relative z-10 mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    {certifications.desc}
                                  </p>
                                  <Link href={certifications.link}>
                                    <div
                                      aria-hidden="true"
                                      className="relative z-10 mt-4 flex items-center text-sm font-medium text-black transition group-hover:text-sky-500 dark:text-white"
                                    >
                                      Link
                                      <svg
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        aria-hidden="true"
                                        className="ml-1 h-4 w-4 stroke-current order-last group-hover:translate-x-6 transition"
                                      >
                                        <path
                                          d="M6.75 5.75 9.25 8l-2.5 2.25"
                                          strokeWidth="1.5"
                                          stroke-linecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                  </Link>
                                </div>
                                <time
                                  className="mt-1 md:block relative z-10 order-first mb-3 flex items-center text-sm dark:text-zinc-400 text-zinc-500"
                                  dateTime="2022-09-05"
                                >
                                  {certifications.date}
                                </time>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutContent;
