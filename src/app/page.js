import Image from "next/image";
import HomeCard from "@components/HomeCard";
import homeCards from "@constants/HomeCards";
import Banner from "@components/Banner";

export default function Home() {
  return (
    <>
      <Banner />
      <main className="bg-white z-50">
        <div className="flex gap-5 flex-col sm:flex-row items-center justify-around max-w-7xl mx-auto my-5 md:my-6">
          {homeCards.map((card) => (
            <HomeCard key={card.id} title={card.title} bg={card.bg} />
          ))}
        </div>
        <div className="w-full h-screen"></div>
      </main>
    </>
  );
}
