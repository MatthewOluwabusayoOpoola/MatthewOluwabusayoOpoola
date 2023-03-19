import Sidebar from "../components/landing/Sidebar";
import StoreContent from "../components/store/StoreContent";

export default function Store() {
  return (
    <div className="2xl:max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <Sidebar />
        <StoreContent />
      </div>
    </div>
  );
}
