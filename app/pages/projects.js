import Header from "@/components/landing/Header";
import Sidebar from "../components/landing/Sidebar";
import ProjectsContent from "../components/projects/ProjectsContent";

export default function Project() {
  return (
    <div className="2xl:max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <Sidebar />
        <main role="main" className="w-full lg:col-span-3">
          <Header />
          <ProjectsContent />
        </main>
      </div>
    </div>
  );
}
