import Sidebar from "../components/landing/Sidebar";
import ProjectsContent from "../components/projects/ProjectsContent";

export default function Project() {
  return (
    <div className="2xl:max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <Sidebar />
        <ProjectsContent />
      </div>
    </div>
  );
}
