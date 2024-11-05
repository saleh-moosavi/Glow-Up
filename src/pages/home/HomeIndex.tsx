import FeaturedProducts from "./FeaturedProducts";
import Hero from "./Hero";
import Advantages from "./Advantages";
import Banner from "../../components/Banner";

export default function HomeIndex() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <div className="bg-stone-100">
        <Advantages />
      </div>

      <FeaturedProducts />
      <Banner
        desc="New Collection"
        title="Intensive Glow Serum"
        btnTitle="Shop Now"
        img="https://img.freepik.com/premium-photo/stylish-display-essential-cosmetic-items-featuring-lipstick-brushes-powder-set-against-serene-light-backdrop-generative-ai_262708-55452.jpg"
      />
    </>
  );
}
