import Image from "next/image";
import MainArticle from "@/app/_components/MainArticle";
import Sidebar from "@/app/_components/Sidebar";
import TopArticles from "@/app/_components/TopArticles";

export default function Home() {
  return <div className="bg-off-white w-full overflow-x-auto">
    <div className="grid grid-cols-3 grid-rows-[1.5fr_1fr_1fr] min-h-6xl w-[68rem] max-w-7xl mx-auto gap-x-8 gap-y-14 px-4">
      <div className="col-span-2 row-span-2">
        <MainArticle/>
      </div>
      <div className="row-span-2">
        <Sidebar/>
      </div>
      <div className="col-span-3">
        <TopArticles/>
      </div>
    </div>

  </div>
}
