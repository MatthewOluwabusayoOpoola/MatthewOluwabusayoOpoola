import SideBar from "../components/landing/Sidebar";
import ArticleContent from "../components/article/ArticleContent";

export default function Article() {
  return (
    <div className="2xl:max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <SideBar />
        <ArticleContent />
      </div>
    </div>
  );
}
