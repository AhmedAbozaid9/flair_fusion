import Image from "next/image";
import Banner from "@components/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="relative z-50 w-full h-screen bg-pastel_red"></div>
      <div className="relative z-50 w-full h-screen bg-pastel_pink"></div>
    </div>
  );
}
