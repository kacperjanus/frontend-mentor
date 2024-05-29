import MainArticle from "@/app/_components/MainArticle";
import Sidebar from "@/app/_components/Sidebar";
import TopArticles from "@/app/_components/TopArticles";

export default function Home() {
  return <div className="bg-off-white w-full overflow-x-auto">
    <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:max-w-3xl lg:mx-auto lg:grid-cols-3 lg:grid-rows-[1.5fr_1fr_1fr] w-[68rem] max-w-sm lg:max-w-7xl mb-5 mx-auto gap-x-8 gap-y-14 px-4">
      <div className="col-span-2 row-span-2">
        <MainArticle/>
      </div>
      <div className="lg:row-span-2">
        <Sidebar/>
      </div>
      <div className="lg:col-span-3">
        <TopArticles/>
      </div>
    </div>

  </div>
}
