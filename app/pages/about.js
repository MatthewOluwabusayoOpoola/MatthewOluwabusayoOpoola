import SideBar from "../components/landing/Sidebar";
import AboutContent from "../components/about/AboutContent";
import { aboutMe } from "@/portfolio";

export default function About() {
  return (
    <div className="2xl:max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <SideBar />
        <AboutContent />
      </div>
    </div>
  );
}
