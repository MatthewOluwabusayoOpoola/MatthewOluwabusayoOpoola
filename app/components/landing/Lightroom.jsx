import Image from "next/image";
import Landing from "../../public/images/wallpaper.jpg";
import Header from "./Header";
import { aboutMe, projects } from "@/portfolio";
import Link from "next/link";
import AboutContent from "../about/AboutContent";
import ProjectsContent from "../projects/ProjectsContent";
function LigthRoom() {
  return (
    <main role="main" class="w-full lg:col-span-3">
      <section>
        <div class="grid grid-cols-1 gap-3 p-4">
          {/* <Header /> */}
          <div class="aspect-[250/120] bg-zinc-100 rounded-xl overflow-hidden filter grayscale">
            <Image class="object-cover h-full" src={Landing} alt="#" />
          </div>
        </div>
      </section>

      <AboutContent />

      <ProjectsContent />
      <section>
        <div className=" p-8 lg:py-12 lg:px-10">
          <div className="group relative">
            <p className="relative z-10 mt-6 flex text-black dark:text-white text-2xl md:text-3xl xl:text-3xl font-bold tracking-tighter text-black transition group-hover:text-sky-500 dark:text-white items-center">
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
                <Link href="mailto:initoluwa@gmail.com">
                  Let us Discuss Your Next Project
                </Link>
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default LigthRoom;
