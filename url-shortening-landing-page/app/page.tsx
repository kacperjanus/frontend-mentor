import Header from "@/app/_components/Header";
import HeroSection from "@/app/_components/HeroSection";
import ShortenBox from "@/app/_components/ShortenBox";
import Features from "@/app/_components/Features";
import Cta from "@/app/_components/Cta";
import Footer from "@/app/_components/Footer";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col overflow-x-hidden">
      <Header/>
        <HeroSection/>
        <ShortenBox/>
      <Features/>
        <Cta/>
        <Footer/>
    </div>
  );
}
