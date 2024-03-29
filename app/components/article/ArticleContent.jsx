import Image from "next/image";
function ArticleContent() {
  return (
    <main role="main" className="w-full lg:col-span-3">
      <section>
        <div className="p-8 lg:py-12 lg:px-10">
          <div className="text-base dark:text-zinc-500 text-zinc-500 lg:col-span-3 space-y-12">
            <article className="md:grid md:grid-cols-4">
              <div className="md:col-span-3">
                <header className="flex flex-col">
                  <h1 className="mt-6 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
                    UX Ideation 101: Tips & tools for laying the right design
                    foundations
                  </h1>
                  <time
                    datetime="2022-09-05"
                    className="order-first flex items-center text-base text-zinc-500 dark:text-zinc-400"
                  >
                    <span>May 28, 2023</span>
                  </time>
                </header>
                <div className="mt-8 prose dark:prose-invert prose-zinc">
                  <p>
                    Every brilliant design starts with an amazing idea, as well
                    as hundreds of not-so-amazing ones. To the user’s eye, these
                    rejected concepts aren’t at all visible, however, their
                    experience would be nowhere near as delightful if mistakes,
                    iterations, and learnings didn’t happen during the design
                    process.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="aspect-[280/200] bg-zinc-100 rounded-xl overflow-hidden">
                      <Image className="object-cover h-full" src="" alt="#" />
                    </div>
                    <div className="aspect-[280/200] bg-zinc-100 rounded-xl overflow-hidden">
                      <Image className="object-cover h-full" src="" alt="#" />
                    </div>
                    <div className="aspect-[280/200] bg-zinc-100 rounded-xl overflow-hidden">
                      <Image className="object-cover h-full" src="" alt="#" />
                    </div>
                    <div className="aspect-[280/200] bg-zinc-100 rounded-xl overflow-hidden">
                      <Image className="object-cover h-full" src="" alt="#" />
                    </div>
                  </div>
                  <p>
                    In the Double Diamond, a familiar framework and close friend
                    to the design community, the third stage is where the
                    brainstorming and ideating really kick off.
                  </p>
                  <blockquote>
                    “Ideation is the mode of the design process in which you
                    concentrate on idea generation. Mentally, it represents a
                    process of “going wide” in terms of concepts and outcomes.
                    Ideation provides both the fuel and also the source material
                    for building prototypes and getting innovative solutions
                    into the hands of your users.” — d.school, An Introduction
                    to Design Thinking PROCESS GUIDE
                  </blockquote>
                  <h2>Why ideation is so important</h2>
                  <p>
                    Whether doing so intentionally or not, we go through a
                    multitude of ideation processes daily. What takeaway should
                    we get? What train should I catch? What should we do on the
                    weekend? In design, the answers are a little more
                    complicated than pizza, the 8:35 AM train, or a bush walk.
                    The ideation process allows designers to avoid early
                    summations and encourages you to delve deeper and deeper to
                    uncover thought-out concepts.
                  </p>
                  <p>The ideation phase is uber-important as it:</p>
                  <ol className="list-disc">
                    <li>Helps you ask the right questions.</li>
                    <li>
                      Get all the ideas on the table, good or bad, and filter
                      from there.
                    </li>
                    <li>
                      Find exciting new concepts you may have not considered
                      before.
                    </li>
                    <li>Think outside the box.</li>
                    <li>Saves time and money in the long run.</li>
                  </ol>
                  <h2>Challenge your assumptions and biases</h2>
                  <p>
                    In scientific practice, you are told not to believe
                    assumptions until the experiment uncovers the truth. The
                    same goes for design. Challenging your assumptions in the
                    design process allows you to be creative and use your
                    imagination by questioning the status quo.
                  </p>
                  <p>
                    Design practice is intrinsically about change and changing
                    the world, and something that was assumed a year ago may not
                    be true to this day, so it is imperative to always be
                    questioning, not jump to conclusions or put up any walls
                    during the ideation process. Challenging assumptions when
                    you are stuck in current thinking paradigms or when you are
                    lacking in the idea department is particularly helpful.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ArticleContent;
