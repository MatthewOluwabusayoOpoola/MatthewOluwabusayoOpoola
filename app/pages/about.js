import SideBar from "../components/landing/Sidebar";
import AboutContent from "../components/about/AboutContent";
import { aboutMe } from "@/portfolio";
import Header from "@/components/landing/Header";

export default function About() {
  return (
    <div className="2xl:max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <SideBar />
        <main role="main" className="w-full lg:col-span-3">
          <Header />
          <AboutContent />
        </main>
      </div>
    </div>
  );
}
