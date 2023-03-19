import SideBar from "../components/landing/Sidebar";
import ThoughtsContent from "../components/thoughts/ThoughtsContent";

export default function Thoughts() {
  return (
    <div className="2xl:max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <SideBar />
        <ThoughtsContent />
      </div>
    </div>
  );
}
