import { aboutMe } from "@/portfolio";
import Link from "next/link";
import Header from "../landing/Header";

function AboutContent() {
  return (
    <>
      <section>
        <div className="p-8 lg:py-12 lg:px-10">
          <div>
            <h1 className="text-black dark:text-white text-2xl md:text-4xl xl:text-8xl font-bold tracking-tighter">
              About Me
            </h1>
          </div>
          <div className="mt-8 lg:mt-4 text-base dark:text-zinc-500 text-zinc-500 lg:col-span-3 space-y-12">
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
                      <h2 className="text-black dark:text-white text-2xl md:text-4xl xl:text-8xl font-bold tracking-tighter">
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
                                  {education.grade}
                                </p>
                                <p className="relative z-10  text-sm text-zinc-500 dark:text-zinc-400">
                                  {education.course}
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

                      <h2 className="text-black dark:text-white text-2xl md:text-4xl xl:text-8xl font-bold tracking-tighter">
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
    </>
  );
}

export default AboutContent;
