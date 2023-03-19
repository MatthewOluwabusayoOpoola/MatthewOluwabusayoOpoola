import LightRoom from "../components/landing/Lightroom";
import SideBar from "../components/landing/Sidebar";

function Welcome() {
  return (
    <div className="2xl:max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <SideBar />
        <LightRoom />
      </div>
    </div>
  );
}

export default Welcome;
