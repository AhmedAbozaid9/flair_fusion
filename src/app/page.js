import HomeCard from "@components/HomeCard";
import homeCards from "@constants/HomeCards";
import Banner from "@components/Banner";
import ProductsCarousel from "@components/products/ProductsCarousel";

export default function Home() {
  return (
    <>
      <Banner />
      <main className="bg-white z-50">
        <div className="max-w-7xl mx-auto max-sm:px-4">
          <div className="flex gap-5 flex-col sm:flex-row items-center justify-between mx-auto my-6 md:my-16">
            {homeCards.map((card) => (
              <HomeCard key={card.id} title={card.title} bg={card.bg} />
            ))}
          </div>
          <ProductsCarousel type={"new"} />
          <ProductsCarousel type={"trending"} />
          <ProductsCarousel type={"hot"} />
        </div>
      </main>
    </>
  );
}
